# 통합구현_보고서_천경재

## 【문항1】 페이지 번호와 키워드 검색 기능이 포함된 목록 조회 기능을 갖는 웹 페이지를 구현하고 이에 대한 소스코드와 실행 스크린샷을 제출하시오. Redux Slice, Page 및 관련된 컴포넌트들의 소스코드를 제시 하여야 합니다.

* 페이지
```js
/**
 * @filename    : ProfessorList.js
 * @author      : 천경재 (yocasd2@gamil.com)
 * @description : 목록 조회
*/

import React, { memo, useCallback, useRef } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useQueryString } from "../hooks/useQueryString";
import dayjs from "dayjs";

import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import Table from "../components/Table";

import { useSelector, useDispatch } from "react-redux";
import { getList, deleteItem } from "../slices/ProfessorSlice";

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

    .clickable {
        background-color: #fff;
        color: #000;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: #06f2;
        }
        &:active {
            transform: scale(0.9, 0.9);
        }
    }
`;

const Pagenation = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;

    a {
        color: black;
        padding: 8px 12px;
        text-decoration: none;
        transition: background-color 0.3s;
        margin: 0 5px;

        &.current-page {
            background-color: #116688;
            color: white;
            border-radius: 5px;
        }

        &.disabled {
            color: #ccc;
            cursor: not-allowed;
        }
        &:hover:not(.current-page) {
            background-color: #ddd;
            border-radius: 5px;
        }
    }
`;

const ProfessorList = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(
        (state) => state.ProfessorSlice
    );

    const navigate = useNavigate();

    const { query, rows, page } = useQueryString({
        query: "",
        rows: 10,
        page: 1,
    });
    console.log(query,rows, page);

    const refRowsDropdown = useRef();
    const refTextInput = useRef();

    React.useEffect(() => {
        dispatch(
            getList({
                query: query,
                rows: rows,
                page: page,
            })
        );
        refRowsDropdown.current.value = rows;
        //refTextInput.current.value = query;
    }, [dispatch, query, rows, page]);

    const onSearchSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const dropdown = refRowsDropdown.current;
            const input = refTextInput.current;

            navigate(`/?query=${input.value}&rows=${dropdown.value}`);
        },
        [navigate]
    );

    const onEditClick = useCallback(
        (e) => {
            e.preventDefault();
            const current = e.target;
            const profno = current.dataset.profno;
            navigate(`/professorEdit/${profno}`);
        },
        [navigate]
    );

    const onDeleteClick = useCallback(
        (e) => {
            e.preventDefault();

            const current = e.target;

            if (
                window.confirm(
                    `정말 ${current.dataset.name}(을)를 삭제하시겠습니까?`
                )
            ) {
                dispatch(
                    deleteItem({
                        profno: current.dataset.profno,
                    })
                );
            }
        },
        [dispatch]
    );
    
    return (
        <div>
            <Spinner visible={loading} />

            <ControlContainer onSubmit={onSearchSubmit}>
                <select name="rows" className="controll" onChange={onSearchSubmit} ref={refRowsDropdown}>
                    <option value="10">10개씩 보기</option>
                    <option value="20">20개씩 보기</option>
                    <option value="30">30개씩 보기</option>
                </select>
                <input type="text" className="controll" ref={refTextInput} />
                <button type="submit" className="controll clickable">
                    검색
                </button>
                <NavLink to="professorAdd" className="controll clickable">
                    교수정보 추가하기
                </NavLink>
            </ControlContainer>

            {error ? (
                <ErrorView error={error} />
            ) : (
                data && (
                    <>
                        <Table>
                            <thead>
                                <tr>
                                    <th>교수번호</th>
                                    <th>이름</th>
                                    <th>아이디</th>
                                    <th>직급</th>
                                    <th>급여</th>
                                    <th>입사일</th>
                                    <th>보직수당</th>
                                    <th>학과번호</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.item.length > 0 ? (
                                    data.item.map((item, index) => {
                                        return (
                                            <tr key={item.profno}>
                                                <td>{item.profno}</td>
                                                <td>{item.name}</td>
                                                <td>{item.userid}</td>
                                                <td>{item.position}</td>
                                                <td>{item.sal}</td>
                                                <td>{dayjs(item.hiredate).format('YYYY-MM-DD')}</td>
                                                <td>{item.comm === null ? "없음" : item.comm}</td>
                                                <td>{item.deptno}</td>
                                                <td>
                                                    <button type="button" data-profno={item.profno} onClick={onEditClick}>
                                                        수정하기
                                                    </button>
                                                </td>
                                                <td>
                                                    <button type="bitton" data-profno={item.profno} data-dname={item.profno} onClick={onDeleteClick}>
                                                        삭제하기
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="5" align="center">
                                            검색결과가 없습니다.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>

                        {data && (
                            <Pagenation>
                                {data.pagenation.prevGroupLastPage > 0 ? (
                                    <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagenation.prevGroupLastPage}`}>&laquo;</NavLink></li>
                                ) : (
                                    <li><NavLink to='#' className='disabled'>&laquo;</NavLink></li>
                                )}

                                {(() => {
                                    const li = [];
                                    const start = data.pagenation.groupStart;
                                    const end = data.pagenation.groupEnd + 1;
                                    for (let i = start; i < end; i++) {
                                        if (i === data.pagenation.nowPage) {
                                            li.push(<li key={i}><NavLink to='#' className='current-page'>{i}</NavLink></li>)
                                        } else {
                                            li.push(<li key={i}><NavLink to={`/?query=${query}&rows=${rows}&page=${i}`}>{i}</NavLink></li>)
                                        }
                                    }
                                    
                                    return li;
                                })()}

                                {data.pagenation.nextGroupFirstPage > 0 ? (
                                    <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagenation.nextGroupFirstPage}`}>&raquo;</NavLink></li>
                                ) : (
                                    <li><NavLink to='#' className='disabled'>&raquo;</NavLink></li>
                                )}
                            </Pagenation>
                        )}
                    </>
                )
            )}
        </div>
    );
});

export default ProfessorList;
```