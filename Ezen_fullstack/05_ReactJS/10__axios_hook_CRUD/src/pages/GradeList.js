import React from "react";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Spinner from "../components/Spinner";
import Table from "../components/Table";

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #06f2;
  }
`;

const GradeList = () => {
  /** 화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */
  const [grade, setGrade] = React.useState([]);

  /** 백엔드로부터 데이터 불러오기 - 자체 캐시기능 방지함 */
  const [{ data, loading1, error }] = useAxios("http://localhost:3001/grade", {
    useCache: false,
  });

  /** axios-hook에 의해 생선된 상태값인 data가 변경되었을 때(ajax 로딩이 완료되었을 때) 실행될 hook */
  //  data는 setData가 없어서 직접 수정 불가.
  React.useEffect(() => {
    // ajax의 결과를 화면에 표시하기 위한 상태값에 복사한다.
    setGrade(data);
  }, [data]);

  /** 백엔드로부터 데이터 삭제하기 - 자체 캐시기능 방지, 삭제 버튼 이벤트에 의해 호출되어야 하므로 메뉴얼(수동) 실행 모드 */
  const [{ loading2 }, sendDelete] = useAxios(
    {
      method: "DELETE",
    },
    {
      useCache: false,
      manual: true,
    }
  );

  /** 삭제 버튼 클릭시 호출될 이벤트 핸들러 */
  const onDeleteClick = (e) => {
    e.preventDefault();

    // 이벤트가 발생한 대상을 가져옴 --> 삭제하기 링크
    const current = e.target;

    // 클릭된 링크에 숨겨져 있는 일련번화와 학생이름 가져오기
    const id = parseInt(current.dataset.id);

    const name = current.dataset.name;

    // 삭제 확인
    if (window.confirm(`정말 ${name}학생의 성적을 삭제하시겠습니까?`)) {
      // 백엔드에 삭제 요청하기 -> 입력, 수정, 삭제는 async~await 문법으로 처리해야 한다.
      (async () => {
        let json = null;
        try {
          const response = await sendDelete({
            method: "DELETE",
            url: `http://localhost:3001/grade/${id}`,
          });

          json = response.data;
        } catch {
          console.error(e);
          window.alert(e);
        }

        // 삭제 결과가 정상이라면?
        if (json != null) {
          // 화면에 출력중인 데이터에서 동일한 일련번호를 갖는 항목을 제외한 나머지를 추려낸다.
          // --> 삭제된 항목 제거
          setGrade((grade) => grade.filter((v) => v.id !== id));
        }
      })();
    }
  };

  return (
    <div>
      <Spinner visible={loading1 || loading2} />

      <LinkContainer>
        <TopLink to="add">성적 추가하기</TopLink>
      </LinkContainer>

      {error ? (
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th rowSpan={2}>No.</th>
              <th rowSpan={2}>이름</th>
              <th rowSpan={2}>학년</th>
              <th rowSpan={2}>성별</th>
              <th colSpan={4}>과목별 점수</th>
              <th colSpan={2}>집계</th>
              <th colSpan={2} rowSpan={2}>
                수정/삭제
              </th>
            </tr>
            <tr>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
              <th>총점</th>
              <th>평균</th>
            </tr>
          </thead>
          <tbody>
            {grade &&
              grade.map(({ id, name, level, sex, kor, eng, math, sin }, i) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{level}</td>
                    <td>{sex}</td>
                    <td>{kor}</td>
                    <td>{eng}</td>
                    <td>{math}</td>
                    <td>{sin}</td>
                    <td>{kor + eng + math + sin}</td>
                    <td>{(kor + eng + math + sin) / 4}</td>
                    <td>
                      <NavLink to={`edit/${id}`}>수정하기</NavLink>
                    </td>
                    <td>
                      <a
                        href="#!"
                        data-id={id}
                        data-name={name}
                        onClick={onDeleteClick}
                      >
                        삭제하기
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default GradeList;
