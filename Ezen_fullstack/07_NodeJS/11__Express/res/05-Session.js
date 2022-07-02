/*-------------------------------------------------------------------------------
 | (1) 모듈참조
 --------------------------------------------------------------------------------*/
/** 직접 구현한 모듈 */
import logger from "../helper/LogHelper.js";
import { myip, urlFormat } from "../helper/UtilHelper.js";
/** 내장모듈 */
import url from "url";
import path from "path";
/** 설치가 필요한 모듈 */
import dotenv from "dotenv";
import express from "express"; // Express 본체
import useragent from "express-useragent"; // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from "serve-static"; // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from "serve-favicon"; // favicon 처리
import bodyParser from 'body-parser'; // POST 파라미터 처리
import MethodOverride from "method-override"; // PUT 파라미터 처리
import cookieParser from 'cookie-parser'; // Cookie 처리


/*-------------------------------------------------------------------------------
 | (2) Express 객체 생성
 --------------------------------------------------------------------------------*/
// 여기서 생성한 app 객체의 use() 함수를 사용해서
// 각종 외부 기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.
const app = express();

// 프로젝트 폴더 위치
const __dirname = path.resolve();

// 설정파일 내용 가져오기
dotenv.config({ path: path.join(__dirname, "../config.env") });

/*-------------------------------------------------------------------------------
 | (3) 클라리언트의 접속시 초기화
 --------------------------------------------------------------------------------*/
/** app 객체에 UserAgent 모듈을 탑재 */
// --> Express 객체(app)에 추가되는 확장 기능들을 Express에서는 미들웨어라고 부른다.
// --> UserAgent 모듈은 초기화 콜백함수에 전달되는 req, res객체를 확장하기 때문에 다른 모듈보다 먼저 설정되어야 한다.
app.use(useragent.express());

// 클라이언트의 접속을 감지
app.use((req, res, next) => {
  logger.debug("클라이언트가 접속했습니다.");

  // 클라이언트가 접속한 시간
  const beginTime = Date.now();

  // 클라이언트의 IP주소(출처: 스택오버플로우)
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  // 클라이언트의 디바이스 정보 기록 (UserAgent 사용)
  logger.debug(
    `[client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} / (${req.useragent.version}) / ${req.useragent.platform}`
  );

  // 클라이언트가 요청한 페이지 URL
  // 콜백함수에 전달되는 req 파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있다.
  const current_url = urlFormat({
    protocol: req.protocol, // ex) http://
    host: req.get("host"), // ex) 172.16.141.1
    port: req.port, // ex) 3000
    pathname: req.originalUrl, // ex) /page1.html
  });

  logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

  // 클라이언트의 접속이 종료된 경우의 이벤트 --> 모든 응답의 전송이 완료된 경우
  res.on("finish", () => {
    // 접속 종료시간
    const endTime = Date.now();

    // 이번 접속에서 클라이언트가 머문 시간 = 백엔드가 실행하는데 걸린 시간
    const time = endTime - beginTime;
    logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
    logger.debug("--------------------------------------------------------");
  });

  // 이 콜백함수를 종료하고 요청 URL에 연결된 기능으로 제어를 넘김
  next();
});

/*-------------------------------------------------------------------------------
 | (4) Express 객체의 추가 설정
 --------------------------------------------------------------------------------*/
/** POST 파라미터 수신 모듈 설정. 추가되는 미들웨어들 중 가장 먼저 설정해야 함 */
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// extended: true --> 지속적 사용.
// extended: false --> 한번만 사용.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text()); // TEXT형식의 파라미터 수신 가능.
app.use(bodyParser.json()); // JSON형식의 파라미터 수신 가능.

/** HTTP PUT, DELETE 전송방식 확장 */
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(MethodOverride('X-HTTP-Method')); // Microsoft
app.use(MethodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(MethodOverride('X-Method-Override')); // IBM
// HTML 폼에서 PUT, DELETE로 전송할 경우 post 방식을 사용하되, action 주소에 "?_method" 라고 추가.
app.use(MethodOverride('_method')); // HTML form

/** 쿠리를 처리할 수 있는 객체 연결 */
// cookie-parser는 데이터를 저장, 조회할 때 암호화 처리를 동반한다.
// 이 때 암호화에 사용되는 key 문자열을 개발자가 정해야 한다.
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

/** HTML, CSS, IMG, JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 결로를 탐색한다.
app.use("/", serveStatic(process.env.PUBLIC_PATH));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라우터(URL 분배기) 객체 설정 --> 맨 마지막에 설정 */
const router = express.Router();
// 라우터를 express에 등록
app.use("/", router);

/*-------------------------------------------------------------------------------
 | (5) 각 URL별 백엔드 기능 정의
 --------------------------------------------------------------------------------*/
/** 01-setup.js */
// router.route(path).get|post|put|delete((req, res, next) => {})
router.get("/page1", (req, res, next) => {
  // 브라우저에게 전달할 응답 내용
  let html = "<h1>Page1</h1>";
  html += `<h2>Express로 구현한 Node.js 백엔드 페이지</h2>`;

  /** 응답보내기(1) - Node 순정 방법 */
  // res.writeHead(200);
  // res.write(html);
  // res.end();

  /** 응답보내기(2) - Express의 간결화된 방법 */
  // res.status(200);
  // res.send(html);

  // 메서드 체인 가능
  res.status(200).send(html);
});

router.get("/page2", (req, res, next) => {
  // 브라우저에게 전달할 응답 내용
  let html = "<h1>Page2</h1>";
  html += "<h2>Node.js Backend Page</h2>";
  res.status(200).send(html);
});

router.get("/page3", (req, res, next) => {
  // 페이지 강제 이동
  res.redirect("https://www.naver.com");
});

/** 02-GetParams.js */
// public/02_get_params_by_link.html
// public/02_get_params_by_form.html
// public/02_get_params_by_js.html
router.get("/send_get", (req, res, next) => {
  // ex) ?answer=400&age=10&height=175&weight=80
  // GET 파라미터들은 req.qurey 객체의 하위 데이터로 저장된다.
  logger.debug("[프론트엔드로 부터 전달받은 GET 파라미터]");
  for (let key in req.query) {
    const str = "\t >> " + key + "=" + req.query[key];
    logger.debug(str);
  }
  // /send_get?answer=0000 형태로 접근한 경우 answer파라미터 값 추출
  // const answer = req.query['answer'];
  const answer = req.query.answer;
  let html = null;
  if (parseInt(answer) == 300) {
    html = "<h1 style='color:#0066ff'>정답입니다.</h1>";
  } else {
    html = "<h1 style='color:#ff6600'>틀렸습니다.</h1>";
  }

  res.status(200).send(html);
});

// 직접 URL로 테스트
router.get('/send_url/:username/:age', (req, res, next) => {
  // URL 파라미터들은 req.params 객체의 하위 데이터로 저장된다.
  // 전달받은 URL 파라미터는 GET 파라미터와 같은 방법으로 사용 가능함.
  logger.debug("[프론트엔드로 부터 전달받은 URL 파라미터]");
  for (let key in req.params) {
    const str = '\t >> ' + key + '=' + req.params[key];
    logger.debug(str);
  }

  const html = "<h1><span style='color:#0066ff'>" + req.params.username + "</span>님은 <span style='color:#ff6600'>" + req.params.age + '</span>세 입니다.</h1>';

  res.status(200).send(html);
});

/** 03-Post, Put, Delete.js */
/** POST 파라미터를 처리하기 위한 라우터 등록 */
router.post('/send_post', (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로부터 전달받음 POST 파라미터]');
  for (let key in req.body) {
    const str = '\t >>' + key + '=' + req.body[key];
    logger.debug(str);
  }

  const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님의 이메일 주소는 <span style='color:#ff6600'>" + req.body.email + "</span>입니다.</h1>";

  res.status(200).send(html);
});

/** PUT 파라미터를 처리하기 위한 라우터 등록 */
router.put('/send_put', (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로부터 전달받음 PUT 파라미터]');
  for (let key in req.body) {
    const str = '\t >>' + key + '=' + req.body[key];
    logger.debug(str);
  }

  const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님은 <span style='color:#ff6600'>" + req.body.grade + "</span>학년 입니다.</h1>";

  res.status(200).send(html);
});

/** DELETE 파라미터를 처리하기 위한 라우터 등록 */
router.delete('/send_delete', (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로부터 전달받음 DELETE 파라미터]');
  for (let key in req.body) {
    const str = '\t >>' + key + '=' + req.body[key];
    logger.debug(str);
  }

  const html = "<h1><span style='color:#0066ff'>" + req.body.username + "</span>님의 점수는 <span style='color:#ff6600'>" + req.body.point + "</span>점 입니다.</h1>";

  res.status(200).send(html);
});

/** 상품에 대한 Restful API 정의하기 */
// 위의 형태처럼 개별적인 함수로 구현 가능하지만 대부분 하나의 URL에 메서드 체인을 사용해서 4가지 전송방식을 한번에 구현
router
    .get('/product/:productNumber', (req, res, next) => {
      // URL Params 형식으로 조회할 상품의 일련번호를 전달받아야 한다.
      const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'>조회</span>하기</h1>";
      res.status(200).send(html);
    })
    .post('/product', (req, res, next) => {
      // <form> 상에 저장할 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
      // 저장시에는 일련번호는 전송하지 않으며 저장후 자동으로 발급되는 일련번호를 프론트에게 돌려줘야 한다.
      const html = "<h1><span style='color:#0066ff'>" + req.body.productNumber + "</span>번 상품 <span style='color:#ff6600'>등록</span>하기</h1>";
      res.status(200).send(html);
    })
    .put('/product/:productNumber', (req, res, next) => {
      // <form> 상에 수정 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
      // 몇번 상품을 수정할지 식별하기 위해 상품 일련번호가 함께 전송된다.
      const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'>수정</span>하기</h1>";
      res.status(200).send(html);
    })
    .delete('/product/:productNumber', (req, res, next) => {
      // 삭제할 상품의 일련번호 전송된다.
      const html = "<h1><span style='color:#0066ff'>" + req.params.productNumber + "</span>번 상품 <span style='color:#ff6600'>삭제</span>하기</h1>";
      res.status(200).send(html);
    });

/** 04-Cookie.js */
// public/04_cookie.html
router
    .post('/cookie', (req, res, next) => {
      // POST로 전달된 파라미터 받기
      const msg = req.body.msg;

      // 일반 쿠키 저장하기 -> 유효시간을 30초로 설정
      res.cookie('my_msg', msg, {
        maxAge: 30*1000,
        path: '/'
      });

      // 암호화된 쿠키 저장하기 -> 유효시간을 30초로 설정
      res.cookie('my_msg_signed', msg, {
        maxAge: 30*1000,
        path: '/',
        signed: true
      });
      
      res.status(200).send('ok');
    })
    .get('/cookie', (req, res, next) => {
      // 일반 쿠키값들은 req.cookies 객체의 하위 데이터로 저장된다. (일반 데이터)
      for (let key in req.cookies) {
        const str = '[cookies]' + key+ '=' + req.cookies[key];
        logger.debug(str);
      }

      // 암호화 된 쿠키값들은 req.signedCookies 객체의 하위 데이터로 저장된다.
      for (let key in req.signedCookies) {
        const str = '[singedCookies]' + key + '=' + req.signedCookies[key];
        logger.debug(str);
      }

      // 원하는 쿠키값을 가져온다.
      const my_msg = req.cookies.my_msg;
      const my_msg_signed = req.signedCookies.my_msg_signed;

      const result_data = {
        my_msg: my_msg,
        my_msg_signed: my_msg_signed,
      };

      res.status(200).send(result_data);
    })
    .delete('/cookie', (req, res, next) => {
      // 저장시 domain, path를 설정했다면 삭제시에도 동일한 값을 지정해야 함.
      res.clearCookie('my_msg', { path: '/' });
      res.clearCookie('my_msg_signed', { path: '/' });
      res.status(200).send('clear');
    });

    
/*-------------------------------------------------------------------------------
 | (6) 설정한 내용을 기반으로 서버 구동 시작
 --------------------------------------------------------------------------------*/
const ip = myip();

app.listen(process.env.PORT, () => {
  logger.debug("--------------------------------------------");
  logger.debug("|           Start Express Server           |");
  logger.debug("--------------------------------------------");

  ip.forEach((v, i) => {
    logger.debug(`server address => http://${v}:${process.env.PORT}`);
  });

  logger.debug("--------------------------------------------");
});
