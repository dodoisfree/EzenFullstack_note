import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import TableEx from "../components/TableEx";

import regexHelper from "../libs/RegexHelper";

import { useSelector, useDispatch } from "react-redux";
import { postItem } from "../slices/ProfessorSlice";
import dayjs from "dayjs";

const ProfessorAdd = memo(() => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.ProfessorSlice);
    const [today] = React.useState(dayjs().format('YYYY-MM-DD'));
    
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        const current = e.target;
        const time = ' 00:00:00';

        try {
            regexHelper.value(current.name.value, "이름을 입력해주세요.");
            regexHelper.minLength(current.name.value, 2, "이름은 최소 2글자 이상부터 입력 가능합니다.");
            regexHelper.maxLength(current.name.value, 20, "이름은 최대 20글자 까지 입력 가능합니다.");
            regexHelper.kor(current.name.value, "이름은 한글로만 입력 가능합니다.");
    
            regexHelper.value(current.userid.value, "아이디를 입력해주세요.");
            regexHelper.minLength(current.userid.value, 2, "아이디는 최소 2글자 이상부터 입력 가능합니다.");
            regexHelper.maxLength(current.userid.value, 20, "아이디는 최대 20글자 까지 입력 가능합니다.");
            regexHelper.engNum(current.userid.value, "아이디는 영문과 숫자로만 입력 가능합니다.");
    
            regexHelper.value(current.position.value, "직급을 입력해주세요.");
            regexHelper.minLength(current.position.value, 2, "직급은 최소 2글자 이상부터 입력 가능합니다.");
            regexHelper.maxLength(current.position.value, 20, "직급은 최대 20자 까지 입력 가능합니다.");
            regexHelper.kor(current.position.value, "직급은 한글로만 입력 가능합니다.");
                
            regexHelper.value(current.sal.value, "급여를 입력해주세요.");
            regexHelper.minLength(current.sal.value, 2, "급여는 최소 2글자 이상부터 입력 가능합니다.");
            regexHelper.maxLength(current.sal.value, 20, "급여는 최대 20자 까지 입력 가능합니다.");
            regexHelper.num(current.sal.value, "급여는 숫자로만 입력 가능합니다.");

            regexHelper.value(current.hiredate.value, "입사일을 입력해주세요.");
            regexHelper.date(current.hiredate.value+time, "입사일은 YYYY-MM-DD 형식에 맞게 입력해주세요.");

            regexHelper.nullNum(current.comm.value, "보직수당은 미입력 또는 숫자로만 입력 가능합니다.");
            regexHelper.value(current.deptno.value, "학과번호를 입력해주세요.");
            regexHelper.num(current.deptno.value, "학과번호는 숫자로만 입력 가능합니다.");
        } catch (e) {
            window.alert(e.message);
            e.field.focus();
            return;
        }

        dispatch(postItem({
                name: current.name.value,
                userid: current.userid.value,
                position: current.position.value,
                sal: current.sal.value,
                hiredate: current.hiredate.value+time,
                comm: current.comm.value,
                deptno: current.deptno.value,
        })).then(() => {
            navigate("/");
        });

    }, [dispatch, navigate]);

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
                                <th>* 이름</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="name" />
                                </td>
                            </tr>
                            <tr>
                                <th>* 아이디</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="userid" />
                                </td>
                            </tr>
                            <tr>
                                <th>* 직급</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="position" />
                                </td>
                            </tr>
                            <tr>
                                <th>* 급여</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="sal" />
                                </td>
                            </tr>
                            <tr>
                                <th>* 입사일</th>
                                <td className="inputWrapper">
                                    <input className="field" type="date" name="hiredate" max={today}/>
                                </td>
                            </tr>
                            <tr>
                                <th>보직수당</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="comm" />
                                </td>
                            </tr>
                            <tr>
                                <th>* 학과번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="deptno" />
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

export default ProfessorAdd;
