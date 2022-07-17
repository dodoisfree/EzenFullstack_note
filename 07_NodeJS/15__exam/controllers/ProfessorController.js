import express from "express";
import regexHelper from "../helper/RegexHelper.js";
import { pagenation } from "../helper/UtilHelper.js";
import professorService from "../services/ProfessorService.js";

const ProfessorController = () => {
    const url = "/professor";
    const router = express.Router();

    /** 전체 목록 조회 --> Read(SELECT) */
    router.get(url, async (req, res, next) => {
        // 검색어 파라미터
        const query = req.get('query');
        // 페이지 번호 파라미터 (기본값은 1)
        const page = req.get('page', 1);
        // 한 페이지에 보여질 목록 수 받기 (기본값은 10)
        const rows = req.get('rows', 10);

        const params = {};
        if (query) {
            params.dname = query;
            params.loc = query;
        }

        // 데이터 조회 결과가 저장될 빈 변수
        let json = null;
        let pageInfo = null;

        try {
            // 전체 데이터 수 얻기
            const totalCount = await professorService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await professorService.getList(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({ pagenation: pageInfo, item: json });
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`${url}/:profno`, async (req, res, next) => {
        // 파라미터 받기
        const profno = req.get("profno");

        // 파라미터 유효성 검사
        try {
            regexHelper.value(profno, "교수번호가 없습니다.");
            regexHelper.num(profno, "교수번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await professorService.getItem({
                profno: profno,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post("/professor", async (req, res, next) => {
        // 파라미터 받기
        const name = req.post("name");
        const userid = req.post("userid");
        const position = req.post("position");
        const sal = req.post("sal");
        const hiredate = req.post("hiredate");
        const comm = req.post("comm");
        const deptno = req.post("deptno");
        console.log(name.length);

        // 유효성 검사
        try {
            regexHelper.value(name, "이름이 없습니다.");
            regexHelper.maxLength(name, 20, "이름은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(userid, "아이디가 없습니다.");
            regexHelper.maxLength(userid, 20, "아이디는 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(position, "직급이 없습니다.");
            regexHelper.maxLength(position, 20, "직급은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(sal, "급여가 없습니다.");
            regexHelper.maxLength(sal, 20, "급여는 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(hiredate, "입사일이 없습니다.");
            regexHelper.maxLength(hiredate, 20, "입사일은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(comm, "보직수당 없습니다.");
            regexHelper.maxLength(comm, 20, "보직수당은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.maxLength(deptno, 20, "학과번호는 최대 3자 까지 입력 가능합니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await professorService.addItem({
                name: name,
                userid: userid,
                position: position,
                sal: sal,
                hiredate: hiredate,
                comm: comm,
                deptno: deptno
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    /** 데이터 수정 --> Update(UPDATE) */
    router.put(`${url}/:profno`, async (req, res, next) => {
        // 파라미터 받기
        const profno = req.get('profno');
        const name = req.put("name");
        const userid = req.put("userid");
        const position = req.put("position");
        const sal = req.put("sal");
        const hiredate = req.put("hiredate");
        const comm = req.put("comm");
        const deptno = req.put("deptno");

        // 유효성 검사
        try {
            regexHelper.value(profno, "교수번호가 없습니다.");
            regexHelper.num(profno, "교수번호가 잘못되었습니다.");
            regexHelper.value(name, "이름이 없습니다.");
            regexHelper.maxLength(name, 20, "이름은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(userid, "아이디가 없습니다.");
            regexHelper.maxLength(userid, 20, "아이디는 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(position, "직급이 없습니다.");
            regexHelper.maxLength(position, 20, "직급은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(sal, "연봉이 없습니다.");
            regexHelper.maxLength(sal, 20, "연봉은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(hiredate, "입사일이 없습니다.");
            regexHelper.maxLength(hiredate, 20, "입사일은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(comm, "보직수당 없습니다.");
            regexHelper.maxLength(comm, 20, "보직수당은 최대 20자 까지 입력 가능합니다.");
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.maxLength(deptno, 20, "학과번호는 최대 3자 까지 입력 가능합니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await professorService.editItem({
                profno: profno,
                name: name,
                userid: userid,
                position: position,
                sal: sal,
                hiredate: hiredate,
                comm: comm,
                deptno: deptno
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`${url}/:profno`, async (req, res, next) => {
        // 파라미터 받기
        const profno = req.get('profno');
        // 유효성 검사
        try {
            regexHelper.value(profno, "교수번호가 없습니다.");
            regexHelper.num(profno, "교수번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        try {
            await professorService.deleteItem({
                profno: profno
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult();
    });

    return router;
};

export default ProfessorController;
