import React, { memo, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
    getList,
    // getItem,
    // postItem,
    // putItem,
    // deleteItem,
} from "./slices/ProfessorSlice";

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(
        (store) => store.ProfessorSlice
    );

    useEffect(() => {
        dispatch(getList({ query: "너", page: 2, rows: 5 }));
        //dispatch(getItem({deptno: 226}));
        //dispatch(postItem({ name: "네임", userid: "userid", position: "직급", sal: 200, hiredate: "2022-07-18 00:00:00", comm: "", deptno: 201 }));
        //dispatch(putItem({deptno: 237, dname: "React.js_수정", loc: '1403호호'}));
        //dispatch(deleteItem({deptno: 237}));
    }, [dispatch]);

    return loading ? (
        "loading..."
    ) : error ? (
        JSON.stringify(error)
    ) : (
        <>{JSON.stringify(data)}</>
    );
});

export default Test;
