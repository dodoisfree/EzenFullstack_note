import logger from "../helper/LogHelper.js";
import express from "express";

export default () => {
  const router = express.Router();

  // public/04_cookie.html
  router
    .post("/cookie", (req, res, next) => {
      // POST로 전달된 파라미터 받기
      /**
      // WebHelper 적용 전
      const msg = req.body.msg;
      /*/
      // WebHelper 적용 후
      const msg = req.post('msg');
      /**/

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

      /**
      // WebHelper 적용 전
      res.status(200).send("ok");
      /*/
      // WebHelper 적용 후
      res.sendResult();
      /**/
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

      /**
      // WebHelper 적용 전
      res.status(200).send(result_data);
      /*/
      // WebHelper 적용 후
      res.sendResult(result_data);
      /**/
    })
    .delete("/cookie", (req, res, next) => {
      // 저장시 domain, path를 설정했다면 삭제시에도 동일한 값을 지정해야 함.
      res.clearCookie("my_msg", { path: "/" });
      res.clearCookie("my_msg_signed", { path: "/" });

      /**
      // WebHelper 적용 전
      res.status(200).send("clear");
      /*/
      // WebHelper 적용 후
      res.sendResult();
      /**/
    });

  return router;
};