import express from "express";

export default () => {
  const router = express.Router();

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

  return router;
};