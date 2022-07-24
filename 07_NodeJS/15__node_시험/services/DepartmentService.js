import mybatisMapper from "mybatis-mapper";
import DBPool from "../helper/DBPool.js";
import RuntimeException from "../exceptions/RuntimeException.js";

class DepartmentService {
    /** 생성자 - Mapper파일을 로드한다 */
    constructor() {
        // mapper의 위치는 이 소스 파일이 아닌 프로젝트 root를 기준으로 상대경로
        mybatisMapper.createMapper([
            "./mappers/DepartmentMapper.xml",
        ]);
    }

    /** 목록 데이터를 조회한다 */
    async getDeptno(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();

            let sql = mybatisMapper.getStatement("DepartmentMapper", "deptnoList", params);
            let [result] = await dbcon.query(sql);

            if (result.length === 0) {
                throw new RuntimeException("조회된 데이터가 없습니다.");
            }

            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) {
                dbcon.release();
            }
        }

        return data;
    }
}

export default new DepartmentService();
