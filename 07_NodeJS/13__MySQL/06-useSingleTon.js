// 모듈 참조를 통해 하나의 singleton객체를 전달받음
import DBPool from './helper/DBPool.js';

(async () => {
  // 커넥션을 임대하는 메서드가 async이므로 이 메서드를 호출할 때도 비동기가 적용되어야 한다.
  const dbcon = await DBPool.getConnection();

  // 임의의 SQL문 수행함
  const sql = "SELECT * FROM student";
  const [result1] = await dbcon.query(sql);
  console.log(result1);

  // 임대한 커넥션을 반납함
  dbcon.release();

  // DBConnectionPool을 종료 --> 백엔드 프로그램 자체가 종료될 경우 수행
  DBPool.close();
})();