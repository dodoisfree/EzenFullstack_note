/**
 * @filename    : ProfessorItem.js
 * @author      : 천경재 (yocasd2@gamil.com)
 * @description : 단일 항목 상세 페이지
 * 
*/

import React, { memo } from "react";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import TableEx from "../components/TableEx";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getItem } from "../slices/ProfessorSlice";
import styled from "styled-components";

const ItemCSS = styled(TableEx)`
p {
    padding-left: 15px;
    font-size: 18px;
}
`;

const ProfessorItem = memo(() => {
    const { profno } = useParams();

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(
        (state) => state.ProfessorSlice
    );

    console.log(data);
    React.useEffect(() => {
        dispatch(
            getItem({
                profno: profno,
            })
        );
    }, [dispatch, profno]);

    return (
        <>
            <Spinner visible={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <div>
                    <h2>항목 상세보기</h2>
                    <ItemCSS>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>교수번호</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.profno}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td className="inputWrapper">
                                    <p>{data && data.item.name}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>아이디</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.userid}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.position}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>급여</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.sal}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.hiredate}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>보직수당</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.comm}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className="inputWrapper">
                                <p>{data && data.item.deptno}</p>
                                </td>
                            </tr>
                        </tbody>
                    </ItemCSS>
                </div>
            )}
        </>
    );
});

export default ProfessorItem;
