/*-------------------------------------------------------------------------------
 | (1) 모듈참조
 --------------------------------------------------------------------------------*/
/** 직접 구현한 모듈 */
import logger from "../helper/LogHelper.js";
import { myip, urlFormat } from "../helper/UtilHelper.js";
import { mkdirs, initMulter, checkUploadError, createThumbnail, createThumbnailMultiple } from "../helper/FileHelper.js";
/** 내장모듈 */
import url from "url";
import path, { extname } from "path";
/** 설치가 필요한 모듈 */
import dotenv from "dotenv";
import express from "express"; // Express 본체
import useragent from "express-useragent"; // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from "serve-static"; // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from "serve-favicon"; // favicon 처리
import bodyParser from "body-parser"; // POST 파라미터 처리
import MethodOverride from "method-override"; // PUT 파라미터 처리
import cookieParser from "cookie-parser"; // Cookie 처리
import expressSession from "express-session"; // Session 처리
import nodemailer from "nodemailer"; // 메일발송 --> app.use()로 추가설정 필요 없음.
import multer from "multer"; // 업로드 모듈
import thumbnail from "node-thumbnail"; // 썸네일 이미지 생성 모듈

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text()); // TEXT형식의 파라미터 수신 가능.
app.use(bodyParser.json()); // JSON형식의 파라미터 수신 가능.

/** HTTP PUT, DELETE 전송방식 확장 */
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(MethodOverride("X-HTTP-Method")); // Microsoft
app.use(MethodOverride("X-HTTP-Method-Override")); // Google/GData
app.use(MethodOverride("X-Method-Override")); // IBM
// HTML 폼에서 PUT, DELETE로 전송할 경우 post 방식을 사용하되, action 주소에 "?_method" 라고 추가.
app.use(MethodOverride("_method")); // HTML form

/** 쿠리를 처리할 수 있는 객체 연결 */
// cookie-parser는 데이터를 저장, 조회할 때 암호화 처리를 동반한다.
// 이 때 암호화에 사용되는 key 문자열을 개발자가 정해야 한다.
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));

/** 세션 설정 */
app.use(
  expressSession({
    // 암호화 키
    secret: process.env.SESSION_ENCRYPT_KEY,
    // 세션이 초기화 되지 않더라도 새로 저장할지 여부 (일반적으로 false)
    resave: false,
    // 세션이 저장되기 전에 기존의 세션을 초기화 상태로 만들지 여부
    saveUninitialized: false,
  })
);

/** HTML, CSS, IMG, JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면
// static 모듈에 연결된 폴더 안에서 해당 결로를 탐색한다.
app.use("/", serveStatic(process.env.PUBLIC_PATH));
// 업로드 된 파일이 저장될 폴더를 URL에 노출함
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
// 썸네일 이미지가 저장될 폴더를 URL에 노출함
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));

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
router.get("/send_url/:username/:age", (req, res, next) => {
  // URL 파라미터들은 req.params 객체의 하위 데이터로 저장된다.
  // 전달받은 URL 파라미터는 GET 파라미터와 같은 방법으로 사용 가능함.
  logger.debug("[프론트엔드로 부터 전달받은 URL 파라미터]");
  for (let key in req.params) {
    const str = "\t >> " + key + "=" + req.params[key];
    logger.debug(str);
  }

  const html =
    "<h1><span style='color:#0066ff'>" +
    req.params.username +
    "</span>님은 <span style='color:#ff6600'>" +
    req.params.age +
    "</span>세 입니다.</h1>";

  res.status(200).send(html);
});

/** 03-Post, Put, Delete.js */
/** POST 파라미터를 처리하기 위한 라우터 등록 */
router.post("/send_post", (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug("[프론트엔드로부터 전달받음 POST 파라미터]");
  for (let key in req.body) {
    const str = "\t >>" + key + "=" + req.body[key];
    logger.debug(str);
  }

  const html =
    "<h1><span style='color:#0066ff'>" +
    req.body.username +
    "</span>님의 이메일 주소는 <span style='color:#ff6600'>" +
    req.body.email +
    "</span>입니다.</h1>";

  res.status(200).send(html);
});

/** PUT 파라미터를 처리하기 위한 라우터 등록 */
router.put("/send_put", (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug("[프론트엔드로부터 전달받음 PUT 파라미터]");
  for (let key in req.body) {
    const str = "\t >>" + key + "=" + req.body[key];
    logger.debug(str);
  }

  const html =
    "<h1><span style='color:#0066ff'>" +
    req.body.username +
    "</span>님은 <span style='color:#ff6600'>" +
    req.body.grade +
    "</span>학년 입니다.</h1>";

  res.status(200).send(html);
});

/** DELETE 파라미터를 처리하기 위한 라우터 등록 */
router.delete("/send_delete", (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug("[프론트엔드로부터 전달받음 DELETE 파라미터]");
  for (let key in req.body) {
    const str = "\t >>" + key + "=" + req.body[key];
    logger.debug(str);
  }

  const html =
    "<h1><span style='color:#0066ff'>" +
    req.body.username +
    "</span>님의 점수는 <span style='color:#ff6600'>" +
    req.body.point +
    "</span>점 입니다.</h1>";

  res.status(200).send(html);
});

/** 상품에 대한 Restful API 정의하기 */
// 위의 형태처럼 개별적인 함수로 구현 가능하지만 대부분 하나의 URL에 메서드 체인을 사용해서 4가지 전송방식을 한번에 구현
router
  .get("/product/:productNumber", (req, res, next) => {
    // URL Params 형식으로 조회할 상품의 일련번호를 전달받아야 한다.
    const html =
      "<h1><span style='color:#0066ff'>" +
      req.params.productNumber +
      "</span>번 상품 <span style='color:#ff6600'>조회</span>하기</h1>";
    res.status(200).send(html);
  })
  .post("/product", (req, res, next) => {
    // <form> 상에 저장할 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
    // 저장시에는 일련번호는 전송하지 않으며 저장후 자동으로 발급되는 일련번호를 프론트에게 돌려줘야 한다.
    const html =
      "<h1><span style='color:#0066ff'>" +
      req.body.productNumber +
      "</span>번 상품 <span style='color:#ff6600'>등록</span>하기</h1>";
    res.status(200).send(html);
  })
  .put("/product/:productNumber", (req, res, next) => {
    // <form> 상에 수정 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
    // 몇번 상품을 수정할지 식별하기 위해 상품 일련번호가 함께 전송된다.
    const html =
      "<h1><span style='color:#0066ff'>" +
      req.params.productNumber +
      "</span>번 상품 <span style='color:#ff6600'>수정</span>하기</h1>";
    res.status(200).send(html);
  })
  .delete("/product/:productNumber", (req, res, next) => {
    // 삭제할 상품의 일련번호 전송된다.
    const html =
      "<h1><span style='color:#0066ff'>" +
      req.params.productNumber +
      "</span>번 상품 <span style='color:#ff6600'>삭제</span>하기</h1>";
    res.status(200).send(html);
  });

/** 04-Cookie.js */
// public/04_cookie.html
router
  .post("/cookie", (req, res, next) => {
    // POST로 전달된 파라미터 받기
    const msg = req.body.msg;

    // 일반 쿠키 저장하기 -> 유효시간을 30초로 설정
    res.cookie("my_msg", msg, {
      maxAge: 30 * 1000,
      path: "/",
    });

    // 암호화된 쿠키 저장하기 -> 유효시간을 30초로 설정
    res.cookie("my_msg_signed", msg, {
      maxAge: 30 * 1000,
      path: "/",
      signed: true,
    });

    res.status(200).send("ok");
  })
  .get("/cookie", (req, res, next) => {
    // 일반 쿠키값들은 req.cookies 객체의 하위 데이터로 저장된다. (일반 데이터)
    for (let key in req.cookies) {
      const str = "[cookies]" + key + "=" + req.cookies[key];
      logger.debug(str);
    }

    // 암호화 된 쿠키값들은 req.signedCookies 객체의 하위 데이터로 저장된다.
    for (let key in req.signedCookies) {
      const str = "[singedCookies]" + key + "=" + req.signedCookies[key];
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
  .delete("/cookie", (req, res, next) => {
    // 저장시 domain, path를 설정했다면 삭제시에도 동일한 값을 지정해야 함.
    res.clearCookie("my_msg", { path: "/" });
    res.clearCookie("my_msg_signed", { path: "/" });
    res.status(200).send("clear");
  });

/** 05-Session.js */
// Insomnia로 테스트
router
  .post("/session", (req, res, next) => {
    // POST로 전송된 변수값을 추출
    const username = req.body.username;
    const nickname = req.body.nickname;

    // 세션 저장
    req.session.username = username;
    req.session.nickname = nickname;

    // 결과 응답
    const json = { rt: "ok" };
    res.status(200).send(json);
  })
  .get("/session", (req, res, next) => {
    // 저장되어 있는 모든 session값 탐색
    for (let key in req.session) {
      const str = "[session]" + key + "=" + req.session[key];
      logger.debug(str);
    }

    // 세션 데이터를 JSON으로 구성 후 클라이언트에게 응답으로 전송
    const my_data = {
      username: req.session.username,
      nickname: req.session.nickname,
    };

    res.status(200).send(my_data);
  })
  .delete("/session", async (req, res, next) => {
    let result = "ok";
    let code = 200;

    try {
      await req.session.destroy();
    } catch (e) {
      logger.error(e.message);
      result = e.message;
      code = 500;
    }

    const json = { rt: result };
    res.status(code).send(json);
  });

// public/05_login.html
router
  .post("/session/login", (req, res, next) => {
    const id = req.body.userid;
    const pw = req.body.userpw;

    logger.debug("id=" + id);
    logger.debug("pw=" + pw);

    let login_ok = false;
    if (id == "node" && pw == "1234") {
      logger.debug("로그인 성공");
      login_ok = true;
    }

    let result_code = null;
    let result_msg = null;

    if (login_ok) {
      req.session.userid = id;
      req.session.userpw = pw;
      result_code = 200;
      result_msg = "ok";
    } else {
      result_code = 403;
      result_msg = "fali";
    }

    const json = { rt: result_msg };
    res.status(result_code).send(json);
  })
  .delete("/session/login", async (req, res, next) => {
    let result = "ok";
    let code = 200;

    try {
      await req.session.destroy();
    } catch (e) {
      logger.error(e.message);
      result = e.message;
      code = 500;
    }

    const json = { rt: result };
    res.status(code).send(json);
  })
  .get("/session/login", (req, res, next) => {
    const id = req.session.userid;
    const pw = req.session.userpw;

    let result_code = null;
    let result_msg = null;

    if (id !== undefined && pw !== undefined) {
      logger.debug("현재 로그인중이 맞습니다.");
      result_code = 200;
      result_msg = "ok";
    } else {
      logger.debug("현재 로그인중이 아닙니다.");
      result_code = 400;
      result_msg = "fali";
    }

    const json = { rt: result_msg };
    res.status(result_code).send(json);
  });

/** 06-SendMail.js */
// public/06_mail.html
router.post("/send_mail", async (req, res, next) => {
  /** 1) 프론트엔드에서 잔달한 사용자 입력값 */
  const writer_name = req.body.writer_name;
  let writer_email = req.body.writer_email;
  const receiver_name = req.body.receiver_name;
  let receiver_email = req.body.receiver_email;
  const subject = req.body.subject;
  const content = req.body.content;
  logger.debug(writer_name);
  logger.debug(writer_email);
  logger.debug(receiver_name);
  logger.debug(receiver_email);
  /** 2) 보내는 사람, 받는 사람의 메일주소와 이름 */
  // 보내는 사람의 이름과 주소
  // --> 외부 SMTP연동시 주의사항 - 발신주소가 로그인 계정과 다를 경우 발송이 거부됨.
  if (writer_name) {
    // ex) 이광호 <leekh4232@gmail.com>
    writer_email = writer_name + " <" + writer_email + ">";
  }

  // 받는 사람 이름과 주소
  if (receiver_name) {
    receiver_email = receiver_name + " <" + receiver_email + ">";
  }

  /** 3) 메일 발송정보 구성 */
  const send_info = {
    from: writer_email,
    to: receiver_email,
    subject: subject,
    html: content,
  };

  /** 4) 발송에 필요한 서버 정보를 사용하여 발송객체 생성 */
  const smtp = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP 서버명 : smtp.gmail.com
    port: process.env.SMTP_PORT, // SMTP 포트 : 465
    secure: true, // 보안연결(SSL) 필요
    auth: {
      user: process.env.SMTP_USERNAME, // Gmail 로그인에 사용하는 메일 주소
      pass: process.env.SMTP_PASSWORD, // 앱 비밀번호
    },
  });

  /** 5) 메일발송 요청 */
  let rt = 200;
  let rtMsg = "OK";

  try {
    await smtp.sendMail(send_info);
  } catch (err) {
    rt = 500;
    rtMsg = err.message;
  }

  res.status(rt).send(rtMsg);
});

/** 07-FileUpload.js */
// public/07_upload_single.html
router.route("/upload/single").post((req, res, next) => {
  // name속성이 myphoto인 경우에 대한 업로드를 수행 --> multer객체가 생성되고 설정 내용이 실행됨
  // <input type="file" name="myphoto" />
  const upload = initMulter().single("myphoto");

  upload(req, res, (err) => {
    console.group("request");
    console.debug(req.file);
    console.groupEnd();

    // 에러여부를 확인하여 결과코드와 메시지를 생성한다.
    const {result_code, result_msg} = checkUploadError(err);
    
    // 업로드 결과가 성공이라면 썸네일 생성 함수를 호출한다.
    if (result_code == 200) {
      try {
        createThumbnail(req.file);
      } catch (error) {
        console.error(error);
        result_code = 500;
        result_msg = "썸네일 이미지 생성에 실패했습니다.";
      }
    }

    // 업로드된 파일의 정보와 결과 코드 및 결과 메시지를 조합하여 응답정보를 구성한다.
    const result = {
      rt: result_code,
      rtMsg: result_msg,
      item: req.file,
    };

    res.status(result_code).send(result);
  });
});

// public/07_upload_multi.html
router.route("/upload/multiple").post((req, res, next) => {
  // 업로드 처리시 배열로 설정
  req.file = [];

  // name속성이 myphoto인 경우에 대한 업로드를 수행 --> multer객체가 생성되고 설정 내용이 실행됨
  // <input type="file" name="myphoto" />
  const upload = initMulter().array("myphoto");

  upload(req, res, (err) => {
    console.group("request");
    console.debug(req.file);
    console.groupEnd();

    // 에러여부를 확인하여 결과코드와 메시지를 생성한다.
    const {result_code, result_msg} = checkUploadError(err);
    
    // 업로드 결과가 성공이라면 썸네일 생성 함수를 호출한다.
    if (result_code == 200) {
      try {
        createThumbnailMultiple(req.file);
      } catch (error) {
        console.error(error);
        result_code = 500;
        result_msg = "썸네일 이미지 생성에 실패했습니다.";
      }
    }

    // 업로드된 파일의 정보와 결과 코드 및 결과 메시지를 조합하여 응답정보를 구성한다.
    const result = {
      rt: result_code,
      rtMsg: result_msg,
      item: req.file,
    };

    res.status(result_code).send(result);
  });
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
