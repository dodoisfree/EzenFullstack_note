import logger from "./helper/LogHelper.js";
import DBPool from "./helper/DBPool.js";
import { myip, urlFormat } from "./helper/UtilHelper.js";

import path from "path";

import dotenv from "dotenv";
import express from "express";
import useragent from "express-useragent";

// express 생성
const app = express();
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../config.env") });

// client 접속 시 초기화
app.use(useragent.express());

app.use((req, res, next) => {
    logger.debug("클라이언트가 접속했습니다.");

    const beginTime = Date.now();
    const ip =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

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

process.on('SIGINT', () => {
    process.exit();
});
process.on('exit', () => {
    DBPool.close();
    logger.info("-----------Server is close -----------");
});

// Express 추가 설정
//app.use(cors());

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
