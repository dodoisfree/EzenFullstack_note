/** (1) 모듈참조 */
import fs from 'fs';

/** (2) 필요한 변수 생성 */
// --> 중간 폴더가 존재하지 않을 경우 에러
var target = './docs/docs/docs';

if (!fs.existsSync(target)) {
  (async () => {
    try {
      await fs.promises.mkdir(target);
      await fs.promises.chmod(target, '0777');
      console.debug("디렉토리 생성 완료");
    } catch (e) {
      console.debug("디렉토리 생성 에러");
      console.debug(e);
    }
  })();
  console.log('%s 폴더의 생성을 요청했습니다.', target);
} else {
  (async () => {
    try {
      await fs.promises.rmdir(target);
      console.debug("디렉토리 삭제 완료");
    } catch (e) {
      console.debug("디렉토리 삭제 에러");
      console.debug(e);
    }
  })();
  console.log('%s 폴더의 삭제를 요청했습니다.', target);
}