import express from "express";
import departmentService from "../services/DepartmentService.js";

const DepartmentController = () => {
    const url = "/department";
    const router = express.Router();

    router.get(url, async (req, res, next) => {

        let json = null;

        try {
            json = await departmentService.getDeptno();
        } catch (err) {
            return next(err);
        }

        res.sendResult({ item: json });
    });

    return router;
};

export default DepartmentController;
