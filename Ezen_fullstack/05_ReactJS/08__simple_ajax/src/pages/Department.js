import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

const Department = () => {
  // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);

  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [department, setDepartment] = useState([]);

  // 검색 키워드
  const [keyword, setKeyword] = useState("");

  // 삭제할 항목에 대한 id값을 저장하기 위한 상태값
  const [dropId, setDropId] = useState(-1);

  /** 목록표시 & 검색 */
  /** 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook */
  useEffect(() => {
    // Ajax 로딩 시작을 알림
    setLoading(true);

    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get("http://localhost:3001/department", {
            // 검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
            params: keyword ? { dname: keyword } : null,
          });

          // 일반 상태값 업데이트
          // setDepartment(response.data);
          // 함수형 업데이트
          setDepartment(department => response.data);
          console.log(response.data);
        } catch (e) {
          console.error(e);
          alert("Ajax 연동 실패");
        } finally {
          // Ajax 로딩 종료를 알림
          setLoading(false);
        }
      })();
    }, 500);
  }, [keyword]);

  /** 검색어 입력 요소에 연결할 참조 변수 */
  const myKeywordInput = React.useRef();

  /** 검색 버튼에 대한 클릭 이벤트 */
  const onButtonClick = React.useCallback((e) => {
    setKeyword(myKeywordInput.current.value);
  }, []);

  /** 추가 */
  /** form 에서 submit이벤트가 발생할 때 호출될 이벤트 핸들러. */
  const onDepartmentSave = React.useCallback((e) => {
    // 페이지 강제 이동을 차단
    e.preventDefault();

    // <form> 안에 있는 입력 요소의 값 추출
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log("학과명: %s, 위치: %s", dname, loc);

    // Ajax 로딩 시작을 알림
    setLoading(true);

    setTimeout(() => {
      (async () => {
        // 결과를 저장하기 위한 객체
        let json;
        try {
          // POST 방식으로 전송할 파라미터 정의
          const response = await axios.post(
            "http://localhost:3001/department",
            {
              dname: dname,
              loc: loc,
            }
          );
          console.log(response);

          // 응답 결과는 한 건의 JSON 객체 --> {id: ?, dname: ?, loc: ?}
          json = response.data;
        } catch (err) {
          console.error(err);
          alert("데이터 저장에 실패했습니다.");
        } finally {
          setLoading(false);
        }

        if (json != null) {
          // 기존의 상태값과 배열간 병합을 처리하기 위해 응답결과를 배열로 묶음.
          console.log("묶기전" + json);
          const addArr = [json];
          // 배열 병합 결과로 상태값을 갱신함
          // setDepartment(department.concat(addArr));
          // 성능향상을 위해 상태값을 함수형 업데이트로 처리함
          // --> 상태값을 파라미터로 받는 콜백에서 상태값 갱신 결과를 리턴
          setDepartment(department => department.concat(addArr));
        }
      })();
    }, 500);
  }, []);

  /** 삭제 */
  /** 삭제하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러 */
  const onDeleteClick = (e) => {
    // 클릭된 자기 자신
    const current = e.currentTarget;
    // 클릭된 자신에게 숨어 있는 data-id값을 추출
    const id = parseInt(current.dataset.id);
    // 삭제 대상임을 알림
    setDropId(id);
  };

  /** dropId가 변경되었을 때 실행할 hook */
  useEffect(() => {
    if (dropId > -1) {
      // id가 일치하지 않는 항목만 filter로 걸러내어 상태값 갱신함
      // setDepartment(department.filter((v, i) => v.id !== dropId));
      // 성능 향상을 위해 상태값을 함수형 업데이트로 처리함
      // --> 상태값을 파라미터로 받는 콜백에서 상태값 갱신 결과를 리턴
      setDepartment(department => department.filter((v, i) => v.id !== dropId));

      setTimeout(() => {
        // 백엔드 데이터가 삭제되었음을 알린다.
        (async () => {
          // Ajax를 통한 데이터 삭제 요청
          try {
            await axios.delete(`http://localhost:3001/department/${dropId}`);
          } catch (e) {
            console.error(e);
            alert("Ajax 연동 실패");
          } finally {
            // Ajax 로딩 종료를 알림
            setLoading(false);
          }
        })();
      }, 500);
      
      // 상태변수를 되돌린다.
      setDropId(-1);
    }
  
  }, [dropId]);

  return (
    <div>
      <Spinner visible={loading} />
      <h2>학과 목록</h2>
      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname">학과 : </label>
          <input type="text" name="dname" id="dname" />
        </div>
        <div>
          <label htmlFor="loc">위치 : </label>
          <input type="text" name="loc" id="loc" />
        </div>
        <button type="submit">저장하기</button>
      </form>

      <form>
        <input type="text" name="keyword" ref={myKeywordInput} />
        <button type="button" onClick={onButtonClick}>
          검색
        </button>
      </form>

      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {department.length > 0 ? (
            department.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.dname}</td>
                  <td>{item.loc}</td>
                  <td>
                    <button type='button' data-id={item.id} onClick={onDeleteClick}>
                      삭제하기
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" align="center">
                검색결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(Department);
