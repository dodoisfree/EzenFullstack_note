import React, { memo, useState, useCallback } from 'react';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slices/DepartmentSlice';

const ControlContainer = styled.form`
    position: sticky;
    top: 0;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 10px 0;

    .controll {
        margin-right: 5px;
        display: inline-block;
        font-size: 16px;
        padding: 7px 10px 5px 10px;
        border: 1px solid #ccc;
    }
`;

const DepartmentList = memo(() => {
    /** 리덕스 관련 초기화 */
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.DepartmentSlice);

    /** 백엔드에 전달할 파라미터 상태값 */
    // 목록 수
    const [rows, setRows] = useState(10);

    /** 페이지 마운트와 동시에 실행되는 hook -> 리덕스를 통해 목록을 조회한다. */
    React.useEffect(() => {
        dispatch(getList({
            rows: rows
        }));
    }, [dispatch, rows]);

    /** 목록 수 변경 이벤트 */
    const onRowsChange = useCallback(e => {
        e.preventDefault();
        setRows(parseInt(e.currentTarget.value));
    }, []);
    
    return (
        <div>
            <Spinner visible={loading} />

            <ControlContainer>
                <select name='rows' className='controll' defaultValue={rows} onChange={onRowsChange}>
                    <option value='10'>10개씩 보기</option>
                    <option value='20'>20개씩 보기</option>
                    <option value='30'>30개씩 보기</option>
                </select>
            </ControlContainer>

            {error ? (
                <ErrorView error={error} />
            ) : data && (
                <Table>
                    <thead>
                        <tr>
                            <th>학과번호</th>
                            <th>학과명</th>
                            <th>학과위치</th>
                            <th>수정</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.item.length > 0 ? (
                            data.item.map((item, index) => {
                                return (
                                    <tr key={item.deptno}>
                                        {/* 데이터를 텍스트로 출력 */}
                                        <td>{item.deptno}</td>
                                        <td>{item.dname}</td>
                                        <td>{item.loc}</td>
                                        <td>
                                            <button type='button' data-deptno={item.deptno}>
                                                수정하기
                                            </button>
                                        </td>
                                        <td>
                                            <button type='bitton' data-deptno={item.deptno} data-dname={item.dname}>
                                                삭제하기
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan='5' align='center'>
                                    검색결과가 없습니다.
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </Table>
            )}
        </div>
    );
});

export default DepartmentList;