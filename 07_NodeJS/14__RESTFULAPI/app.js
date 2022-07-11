/*-------------------------------------------------------------------------------
 | (1) 모듈참조
 --------------------------------------------------------------------------------*/
/** 직접 구현한 모듈 */
import logger from "./helper/LogHelper.js";
import { myip, urlFormat } from "./helper/UtilHelper.js";
import WebHelper from "./helper/WebHelper.js";
import DBPool from "./helper/DBPool.js";
/** 내장모듈 */
import url from "url";
import path from "path";
/** 설치가 필요한 모듈 */
import dotenv from "dotenv";
import express from "express";
import useragent from "express-useragent";
import serveStatic from "serve-static";
import serveFavicon from "serve-favicon";
import bodyParser from "body-parser";
import MethodOverride from "method-override";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import cors from "cors";
/** 예외처리 관련 클래스 */
import PageNotFoundException from "./exceptions/PageNotFoundException.js";
/** URL을 라우팅하는 모듈 참조 */
import SetupController from "./controllers/SetupController.js";
import GetParamsController from "./controllers/GetParamsController.js";
import PostPutDeleteController from "./controllers/PostPutDeleteController.js";
import CookieController from "./controllers/CookieController.js";
import SessionController from "./controllers/SessionController.js";
import SendMailController from "./controllers/SendMailController.js";
import FileUploadController from "./controllers/FileUploadController.js";
import ApiTest from "./controllers/ApiTest.js";
import DepartmentController from "./controllers/DepartmentController.js";

/*-------------------------------------------------------------------------------
 | (2) Express 객체 생성
 --------------------------------------------------------------------------------*/
const app = express();
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../config.env") });

/*-------------------------------------------------------------------------------
 | (3) 클라리언트의 접속시 초기화
 --------------------------------------------------------------------------------*/
app.use(useragent.express());

app.use((req, res, next) => {
  logger.debug("클라이언트가 접속했습니다.");

  const beginTime = Date.now();
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

  logger.debug(
    `[client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} / (${req.useragent.version}) / ${req.useragent.platform}`
  );
 
  const current_url = urlFormat({
    protocol: req.protocol,
    host: req.get("host"),
    port: req.port,
    pathname: req.originalUrl,
  });

  logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

  res.on("finish", () => {
    const endTime = Date.now();
    const time = endTime - beginTime;
    logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
    logger.debug("--------------------------------------------------------");
  });

  next();
});

// Ctrl+C를 눌렀을때의 이벤트
process.on('SIGINT', () => {
  process.exit();
});

// 프로그램이 종료될 때의 이벤트
process.on('exit', () => {
  DBPool.close();
  logger.info("-----------Server is close -----------");
});
/*-------------------------------------------------------------------------------
 | (4) Express 객체의 추가 설정
 --------------------------------------------------------------------------------*/
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(MethodOverride("X-HTTP-Method"));
app.use(MethodOverride("X-HTTP-Method-Override"));
app.use(MethodOverride("X-Method-Override"));
app.use(MethodOverride("_method"));
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));
app.use(expressSession({ secret: process.env.SESSION_ENCRYPT_KEY, resave: false, saveUninitialized: false, }));
app.use("/", serveStatic(process.env.PUBLIC_PATH));
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));
app.use(serveFavicon(process.env.FAVICON_PATH));
app.use(WebHelper());

/*-------------------------------------------------------------------------------
 | (5) 각 URL별 백엔드 기능 정의
 --------------------------------------------------------------------------------*/
app.use(SetupController());
app.use(GetParamsController());
app.use(PostPutDeleteController());
app.use(CookieController());
app.use(SessionController());
app.use(SendMailController());
app.use(FileUploadController());
app.use(ApiTest());
app.use(DepartmentController());

/** 컨트롤러에서 에러 발생시 'next(에러객체)`를 호출 했을 때 동작할 처리 */
app.use((err, req, res, next) => res.sendError(err));

/** 앞에서 정의하지 않은 기타 URL에 대한 일괄 처리 (무조건 맨 마지막에 정의해야 함) */
app.use("*", (req, res, next) => res.sendError(new PageNotFoundException()));

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
