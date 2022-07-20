import logger from "../helper/LogHelper.js";
import express from "express";

export default () => {
  const router = express.Router();

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

  return router;
};