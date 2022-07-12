import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import TableEx from "../components/TableEx";
import regexHelper from "../libs/RegexHelper";

import { useSelector, useDispatch } from "react-redux";
import { postItem } from "../slices/DepartmentSlice";

const DepartmentEdit = memo(() => {
    /** Path 파라미터에 포함된 id값 획득하기 */
    const {deptno} = useParams();

    /** 데이터 수정 후 목록 페에지로 강제 이동하기 위한 함수 생성 */
    const navigate = useNavigate();

    /** 리덕스 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.DepartmentSlice);
    const [origin, setOrigin] = useState({
        dname: '',
        loc: '',
    })

    /** 페이지가 열림과 동시에 id값에 대한 데이터를 조회하여 리덕스 상태값에 반영한다. */
    useEffect(() => {
        const index = data.item.findIndex(e => e.deptno === parseInt(deptno));

        setOrigin({
            dname: data.item[index].dname,
            loc: data.item[index].loc
        });
    }, [dispatch, data, deptno]);

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.target;

        // 입력값에 대한 유효성 검사
        try {
            regexHelper.value(current.dname, "학과이름을 입력하세요.");
            regexHelper.minLength(current.dname, 2, "학과이름은 최소 2글자 이상 입력해야 합니다.");
            regexHelper.maxLength(current.dname, 20, "학과이름은 최대 20글자 까지 입력 가능합니다.");

            regexHelper.value(current.loc, "학과위치를 입력하세요.");
            regexHelper.minLength(current.loc, 2, "학과위치은 최소 2글자 이상 입력해야 합니다.");
            regexHelper.maxLength(current.loc, 20, "학과위치은 최대 20글자 까지 입력 가능합니다.");
        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        // 리덕스를 통한 데이터 저장 요청. --> 처리가 완료된 후 목록 페이지로 강제 이동한다.
        dispatch(postItem({
            deptno: deptno,
            dname: current.dname.value,
            loc: current.loc.value,
        })).then(() => {
            navigate("/");
        });

    }, [dispatch, deptno, navigate]);
    return (
        <>
            <Spinner visible={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <form onSubmit={onSubmit}>
                    <TableEx>
                        <colgroup>
                            <col width="120" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>학과이름</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="dname" />
                                </td>
                            </tr>
                            <tr>
                                <th>학과위치</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="loc" />
                                </td>
                            </tr>
                        </tbody>
                    </TableEx>

                    <div style={{ textAlign: "center" }}>
                        <button type="submit">저장하기</button>
                    </div>
                </form>
            )}
        </>
    );
});

export default DepartmentEdit;
