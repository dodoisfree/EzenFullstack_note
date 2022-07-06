import logger from "../helper/LogHelper.js";
import express from "express";
import {
  initMulter,
  checkUploadError,
  createThumbnail,
  createThumbnailMultiple,
} from "../helper/FileHelper.js";
import MultipartException from "../exceptions/MultipartException.js";

export default () => {
  const router = express.Router();

  router.route("/upload/single").post((req, res, next) => {
    const upload = initMulter().single("myphoto");

    upload(req, res, (err) => {
      // 에러가 존재한다면 예외처리 수행
      if (err) {
        return next(new MultipartException(err));
      }

      // 업로드 결과가 성공이라면 썸네일 생성 함수를 호출한다.
      try {
        createThumbnail(req.file);
      } catch (error) {
        return next(error);
      }
      // 준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
      res.sendResult(req.file);
    });
  });

  // public/07_upload_multi.html
  router.route("/upload/multiple").post((req, res, next) => {
    // 업로드 처리시 배열로 설정
    req.file = [];
    const upload = initMulter().array("myphoto");

    upload(req, res, (err) => {
      // 에러가 존재한다면 예외처리 수행
      if (err) {
        return next(new MultipartException(err));
      }

      // 업로드 결과가 성공이라면 썸네일 생성 함수를 호출한다.
      try {
        createThumbnailMultiple(req.file);
      } catch (error) {
        return next(error);
      }

      // 준비한 결과값 변수를 활용하여 클라이언트에게 응답을 보냄
      res.sendResult(req.file);
    });
  });

  return router;
};