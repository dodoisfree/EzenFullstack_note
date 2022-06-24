/** (1) 모듈참조 */
import fs from "fs";

/** (2) 필요한 변수 생성 */
const target = "./output_await.txt"; // 저장할 파일의 경로
const content = "hello World"; // 저장할 내용
const isExists = fs.existsSync(target); // 파일의 존재 여부 검사

/** (3) 파일을 비동기식으로 파일 쓰기, 삭제 */
if (!isExists) {
  (async () => {
    try {
      // 성공시에 아무런 결과도 반환하지 않으므로 리턴받지 않음.
      await fs.promises.writeFile(target, content);
      await fs.promises.chmod(target, '0766');
      console.debug("저장완료");
    } catch (err) {
      console.error("에러발생");
      console.error(err);
    }
  })();
  console.log(target + "의 파일 저장을 요청 했습니다.");
} else {
  /** (4) 파일이 존재할 경우 파일 삭제 */
  (async () => {
    try {
      await fs.promises.unlink(target);
      console.debug("삭제완료");
    } catch (err) {
      console.error("에러발생");
      console.error(err);
    }
  })();
  console.log(target + "의 파일 삭제를 요청 했습니다.");
}
