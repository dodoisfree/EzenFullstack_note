import express from "express";
import logger from "../helper/LogHelper.js";
import regexHelper from "../helper/RegexHelper.js";
import { pagenation } from "../helper/UtilHelper.js";
import departmentService from "../services/DepartmentService.js";

const DepartmentController = () => {
    const url = "/department";
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
            const totalCount = await departmentService.getCount(params);
            pageInfo = pagenation(totalCount, page, rows);

            params.offset = pageInfo.offset;
            params.listCount = pageInfo.listCount;
            json = await departmentService.getList(params);
        } catch (err) {
            return next(err);
        }

        res.sendResult({ pagenation: pageInfo, item: json });
    });

    /** 단일행 조회 --> Read(SELECT) */
    router.get(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const deptno = req.get("deptno");

        // 파라미터 유효성 검사
        try {
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 조회
        let json = null;

        try {
            json = await departmentService.getItem({
                deptno: deptno,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    /** 데이터 추가 --> Create(INSERT) */
    router.post("/department", async (req, res, next) => {
        // 파라미터 받기
        const dname = req.post("dname");
        const loc = req.post("loc");
        console.log(dname.length);

        // 유효성 검사
        try {
            regexHelper.value(dname, "학과 이름이 없습니다.");
            regexHelper.maxLength(dname, 20, "학과 이름은 최대 20자 까지 입력 가능합니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await departmentService.addItem({
                dname: dname,
                loc: loc,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    /** 데이터 수정 --> Update(UPDATE) */
    router.put(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const deptno = req.get('deptno');
        const dname = req.put("dname");
        const loc = req.put("loc");

        // 유효성 검사
        try {
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
            regexHelper.value(dname, "학과 이름이 없습니다.");
            regexHelper.maxLength(dname, 20, "학과 이름은 최대 20자 까지 입력 가능합니다.");
        } catch (err) {
            return next(err);
        }

        // 데이터 저장
        let json = null;

        try {
            json = await departmentService.editItem({
                deptno: deptno,
                dname: dname,
                loc: loc,
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    /** 데이터 삭제 --> Delete(DELETE) */
    router.delete(`${url}/:deptno`, async (req, res, next) => {
        // 파라미터 받기
        const deptno = req.get('deptno');
        // 유효성 검사
        try {
            regexHelper.value(deptno, "학과번호가 없습니다.");
            regexHelper.num(deptno, "학과번호가 잘못되었습니다.");
        } catch (err) {
            return next(err);
        }

        try {
            await departmentService.deleteItem({
                deptno: deptno
            });
        } catch (err) {
            return next(err);
        }

        res.sendResult();
    });

    return router;
};

export default DepartmentController;
