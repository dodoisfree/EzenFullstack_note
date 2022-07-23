import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import TableEx from "../components/TableEx";
import regexHelper from "../libs/RegexHelper";

import { useSelector, useDispatch } from "react-redux";
import { putItem } from "../slices/ProfessorSlice";

const ProfessorEdit = memo(() => {
    /** Path 파라미터에 포함된 id값 획득하기 */
    const {profno} = useParams();

    /** 데이터 수정 후 목록 페에지로 강제 이동하기 위한 함수 생성 */
    const navigate = useNavigate();

    /** 리덕스 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.ProfessorSlice);
    const [origin, setOrigin] = useState({
        name: '',
        userid: '',
        position: '',
        sal: '',
        hiredate: '',
        comm: '',
        deptno: '',
    })

    /** 페이지가 열림과 동시에 id값에 대한 데이터를 조회하여 리덕스 상태값에 반영한다. */
    useEffect(() => {
        const index = data && data.item.findIndex(e => e.profno === parseInt(profno));
        //console.log(data);
        setOrigin({
            name: data.item[index].name,
            userid: data.item[index].userid,
            position: data.item[index].position,
            sal: data.item[index].sal,
            hiredate: dayjs(data.item[index].hiredate).format('YYYY-MM-DD'),
            comm: data.item[index].comm,
            deptno: data.item[index].deptno,
        });
    }, [data, profno]);

    /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
    const onSubmit = React.useCallback((e) => {
        e.preventDefault();

        // 이벤트가 발생한 폼 객체
        const current = e.target;
        const time = ' 00:00:00';

        // 입력값에 대한 유효성 검사
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

        // 리덕스를 통한 데이터 저장 요청. --> 처리가 완료된 후 목록 페이지로 강제 이동한다.
        dispatch(putItem({
            profno: profno,
            name: current.name.value,
            userid: current.userid.value,
            position: current.name.position,
            sal: current.userid.sal,
            hiredate: current.name.hiredate,
            comm: current.userid.comm,
            deptno: current.userid.deptno,
        })).then(() => {
            navigate("/");
        });

    }, [dispatch, profno, navigate]);

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
                                <th>이름</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="name" defaultValue={origin.name}/>
                                </td>
                            </tr>
                            <tr>
                                <th>아이디</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="userid" defaultValue={origin.userid} />
                                </td>
                            </tr>
                            <tr>
                                <th>직급</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="position" defaultValue={origin.position} />
                                </td>
                            </tr>
                            <tr>
                                <th>급여</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="sal" defaultValue={origin.sal} />
                                </td>
                            </tr>
                            <tr>
                                <th>입사일</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="hiredate" defaultValue={origin.hiredate} />
                                </td>
                            </tr>
                            <tr>
                                <th>보직수당</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="comm" defaultValue={origin.comm} />
                                </td>
                            </tr>
                            <tr>
                                <th>학과번호</th>
                                <td className="inputWrapper">
                                    <input className="field" type="text" name="deptno" defaultValue={origin.deptno} />
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

export default ProfessorEdit;
