import React, { memo, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getList, getItem, postItem, putItem, deleteItem } from "./slices/DepartmentSlice";

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, error, loading } = useSelector(
        (store) => store.DepartmentSlice
    );

    useEffect(() => {
        dispatch(getList({query: 'MVC', page: 2, rows: 5}));
        //dispatch(getItem({deptno: 226}));
        //dispatch(postItem({dname: "React.js", loc: '1403호'}));
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
