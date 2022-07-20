import fs from "fs";
import { join, extname } from "path";
import multer from "multer"; // 업로드 모듈
import thumbnail from "node-thumbnail"; // 썸네일 이미지 생성 모듈

const mkdirs = (target, permission = "0755") => {
  // 경로가 값이 없다면 수행하지 않는다.
  if (target == undefined || target == null) {
    return;
  }

  // 윈도우의 경우 '\'를 '/'로 변환.
  target = target.replaceAll("\\", "/");

  /** node.js 17버전 이상 가능. */
  // --> target = "a/b/b"
  // target = target.replaceAll('\\', '/');

  // 주어진 경로값을 "/" 단위로 자른다.
  // --> target_list = ["a", "b", "c"]
  const target_list = target.split("/");

  // 한 단계씩 생성되는 폴더 깊이를 누적할 변수
  let dir = "";

  // 주어진 경로가 절대경로 형식이라면 경로를 누적할 변수를 "/" 부터 시작한다.
  if (target.substring(0, 1) == "/") {
    dir = "/";
  }

  // 윈도우의 경우 하드디스크 문자열을 구분하기 위해 ":"이 포함되어 잇다.
  if (target_list[0].indexOf(":") > -1) {
    target_list[0] += "/";
  }

  // 잘라낸 배열만큼 순환하면서 디렉토리를 생성
  target_list.map((v, i) => {
    dir = join(dir, v);

    // 현재 폴더를 의미한다면 이번 턴은 중단
    if (v == ".") {
      return;
    }

    // console.debug(dir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.chmodSync(dir, permission);
    }
  });
};

const initMulter = () => {
  /** multer 객체 생성 --> 파일 제한 : 5개, 20M */
  const multipart = multer({
    /* 저장될 디렉토리 경로 및 파일 이름 */
    storage: multer.diskStorage({
      /** 업로드 된 파일이 저장될 디렉토리 설정 */
      // req는 요청정보, file은 최종적으로 업로드된 결과 데이터가 저장되어 있을 객체
      destination: (req, file, callback) => {
        /*
          file 파라미터의 형식은 다음과 같다.
          
          file = {
            fieldname: 'myphoto',
            originalname: '원본파일명.jpg',
            encoding: '7bit',
            mimetype: 'image/jpeg'
          }
      */
        console.group("destination");
        console.debug(file);
        console.groupEnd();

        // 업로드 될 폴더를 생성함
        mkdirs(process.env.UPLOAD_DIR);
        mkdirs(process.env.THUMB_DIR);

        // 업로드 정보에 백엔드의 업로드 파일 저장 폴더 위치를 추가한다.
        // 윈도우 환경을 고려하여 역슬래시를 슬래시로 변경하는 처리 추가.
        file.upload_dir = process.env.UPLOAD_DIR.replace(/\\/gi, "/");
        file.thumb_dir = process.env.THUMB_DIR.replace(/\\/gi, "/");

        // multer 객체에게 업로드 경로를 전달
        callback(null, file.upload_dir);
      },
      /** 업로드 된 파일이 저장될 파일 이름을 결정함 */
      filename: (req, file, callback) => {
        /*
          file 파라미터는 앞 과정을 통해  정보가 확장된 상태

          file = {
            fieldname: 'myphoto',
            originalname: '원본파일명.jpg',
            encoding: '7bit',
            mimetype: 'image/jpeg'
            upload_dir: '업로드 된 파일이 저장될 경로',
            thumb_dir: '썸네일 이미지가 생성될 경로'
          }
      */
        console.group("filename");
        console.debug(file);
        console.groupEnd();

        // 파일의 원본 이름에서 확장자만 추출 --> ex) .png
        const extName = extname(file.originalname).toLowerCase();
        // 파일이 저장될 이름 (현재_시각의_timestamp + 확장자)
        const saveName = new Date().getTime().toString() + extName;

        // 업로드 정보에 백엔드에 업로드 되어 저장된 파일 이름을 추가한다.
        file.savename = saveName;
        // 업로드 된 파일이 저장된 최종 경로를 추가한다.
        file.path = join(file.upload_dir, saveName);
        // 업로드 정보에 파일에 접근할 수 있는 URL값 추가
        file.url = join(process.env.UPLOAD_URL, saveName).replace(/\\/gi, "/");

        // 구성된 최종 업르도 정보를 클라이언트에게 응답결과로 돌려주기 위해 req 객체에게 추가
        if (req.files instanceof Array) {
          req.file.push(file);
        } else {
          req.file = file;
        }

        // 다음 단계로 백엔드상에 저장할 파일 이름을 전달
        callback(null, saveName);
      },
    }),
    /* 용량, 최대 업로드 파일 수 제한 설정 */
    limits: {
      files: parseInt(process.env.UPLOAD_MAX_COUNT),
      fileSize: parseInt(eval(process.env.UPLOAD_MAX_SIZE)),
    },
    /* 업로드 될 파일의 확장자와 최대 용량 제한 */
    fileFilter: (req, file, callback) => {
      console.log("--------테스트");
      // 파일의 확장자를 소문자로 얻기 --> ".png" -> "png"
      const extName = extname(file.originalname).substring(1).toLocaleLowerCase();

      // 확장자 제한이 있을 경우 필터링
      if (process.env.UPLOAD_FILE_FILTER !== undefined) {
        // "png|jpg|gif".indexOf("png")의 처리 결과를 찾지 못했다면?
        if (process.env.UPLOAD_FILE_FILTER.indexOf(extName) == -1) {
          const err = new Error();
          err.result_code = 500;
          err.result_msg = process.env.UPLOAD_FILE_FILTER.replace("|", ", ") + "형식만 업로드 가능합니다.";
          return callback(err);
        }
      }

      callback(null, true);
    },
  });

  return multipart;
};

const checkUploadError = (err) => {
  // 결과코드와 결과 메시지 변수
  let result_code = 200;
  let result_msg = "ok";

  /** 에러 객체가 존재한다면? */
  if (err) {
    if (err instanceof multer.MulterError) {
      switch (err.code) {
        case "LIMIT_FILE_COUNT":
          err.result_code = 500;
          err.result_msg = "업로드 가능한 파일 수를 초과했습니다.";
          break;
        case "LIMIT_FILE_SIZE":
          err.result_code = 500;
          err.result_msg = "업로드 가능한 파일 용량을 초과했습니다.";
          break;
        default:
          err.result_code = 500;
          err.result_msg = "알 수 없는 에러가 발생했습니다.";
          break;
      }
    }
    logger.error(err);
    result_code = err.result_code;
    result_msg = err.result_msg;
  }

  return {
    result_code: result_code,
    result_msg: result_msg,
  };
};

const createThumbnail = file => {
  // 환경설정 파일에서 썸네일 이미지 크기를 가져온 후 정수 배열로 변환한다.
  const size = process.env.THUMB_SIZE.split("|").map((v, i) => parseInt(v));

  size.map( async (v, i) => {
    // 생성될 썸네일 파일의 옵션과 파일 이름을 생성
    const thumb_options = {
      source: file.path, // 썸네일을 생성할 원본 경로
      destination: process.env.THUMB_DIR, // 썸네일이 생성될 경로
      width: v, // 썸네일의 크기(기본값 800),
      prefix: 'thumb_',
      suffix: '_' + v + 'w',
      override: true,
    };

    // 생성될 썸네일 파일의 이름을 예상
    const basename = file.savename;
    const filename = basename.substring(0, basename.lastIndexOf('.'));
    const thumbname = thumb_options.prefix + filename + thumb_options.suffix + extname(basename);

    // 프론트엔드에게 전송될 정보에 'thumbnail' 이라는 프로퍼티가 없다면 빈 json 형태로 생성
    if (!file.hasOwnProperty('thumbnail')) {
      file.thumbnail = {};
    }

    // 썸네일 정보 width를 key로 갖는 json 형태로 추가하기 위해 key 이름 생성
    const key = v + 'w';
    file.thumbnail[key] = `${process.env.THUMB_URL}/${thumbname}`;

    try {
      await thumbnail.thumb(thumb_options);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
};

const createThumbnailMultiple = files => {
  files.map((v, i) => createThumbnail(v));
};

export { mkdirs, initMulter, checkUploadError, createThumbnail, createThumbnailMultiple };
