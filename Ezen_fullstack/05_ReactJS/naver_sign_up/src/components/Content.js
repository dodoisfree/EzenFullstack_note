import React from "react";
import ContentCss from "../StyledComponents/ContentCss";
import regexHelper from "../libs/RegexHelper";
import useAxios from "axios-hooks";

const Content = () => {
  // 국가 목록 불러오기
  const [nationality, setNationality] = React.useState([]);
  const [{ data }] = useAxios(
    "http://localhost:3001/Nationality",
    { useCache: false }
  );
  React.useEffect(() => {
    setNationality(data);
    //console.log(data);
  }, [data]);



  // 회원가입
  const onSubmit = (e) => {
    const current = e.target;
    
    // 정규식 검사
    try {
      regexHelper.value(current.id, '필수 입력정보입니다.');
      regexHelper.value(current.pw, '필수 입력정보입니다.');
      regexHelper.value(current.pwCfm, '필수 입력정보입니다.');
      
    } catch (e) {
      window.alert(e.message);
      console.log(0);
      e.field.focus();
      return;
    }

    // const id = current.id.value;
    // const pw = current.pw.value;
    // const name = current.name.value;
    // const sex = current.sex.value;
    // const birthday = current.birthday.value;
    // const email = current.email.value;
    // const cellPhone = current.cellPhone.value;
    // let json = null;
    // console.log(id);
    // (async () => {
    //   try {
    //     const response = await refetch(
    //       { url: "http://localhost:3001/Profile",
    //         method: "POST",
    //         data: {
    //           id: id,
    //           pw: pw,
    //           name: name,
    //           sex: sex,
    //           birthday: birthday,
    //           email: email,
    //           cellPhone: cellPhone,
    //         }
    //       }, { menual: true }
    //     );
    //     console.log(response.data);
    //     json = response.data;
    //   } catch (e) {
    //     console.log("저장 실패");
    //   }

    //   // 정삭적으로 저장되어 응답을 받았다면?
    //   if (json != null) {
    //     window.alert("저장되었습니다.");
    //     // 페이지 강제 이동 (window.location.href = URL 기능과 동일함)
    //   }
    // })();
  }

  const [alretId, setAlretID] = React.useState(Boolean);
  const [names, setNames] = React.useState('');

  const onChange = (e) => {
    const inptValue = e.target.value;
    const name = e.target.name;
    setNames(name);
    console.log(alretId);
    name === 'id' ? setAlretID(true) : setAlretID(false);
  };


  return (
    <ContentCss>
      <form onSubmit={onSubmit}>
        <div className="joinArea">
          <div className="privGroup">
            <div className="inputArea">
              <label htmlFor="id">
                <h3>아이디</h3>
              </label>
              <span className="inputBox">
                <input id="id" className="field" type="text" name="id" onChange={onChange} />
                <span>@naver.com</span>
              </span>
              {names ? alretId && <span className="alert">필수 정보입니다.</span>: null}
            </div>
            <div className="inputArea">
              <label htmlFor="pw">
                <h3>비밀번호</h3>
              </label>
              <span className="inputBox">
                <input id="pw" className="field" type="text" name="pw" onChange={onChange} />
                <span className="risk">안전</span>
              </span>
              {alretId && <span className="alert">필수 정보입니다.</span>}
              <label htmlFor="pwCnfm">
                <h3>비밀번호 재확인</h3>
              </label>
              <span className="inputBox">
                <input id="pwCnfm" className="field" type="text" name="pwCnfm" onChange={onChange} />
              </span>
              {alretId === 3 && <span className="alert">필수 정보입니다.</span>}
            </div>
          </div>

          <div className="privGroup">
            <div className="inputArea">
              <label htmlFor="name">
                <h3>이름</h3>
              </label>
              <span className="inputBox">
                <input id="name" className="field" type="text" name="name" onChange={onChange} />
              </span>
              {alretId === 4 && <span className="alert">필수 정보입니다.</span>}
            </div>
            <div className="inputArea">
              <label htmlFor="birhday">
                <h3>생년월일</h3>
              </label>
              <div className="bdayIptBox">
                <span className="inputBox">
                  <input id="birhday" className="field" type="text" placeholder="년(4자)" onChange={onChange}/>
                </span>
                <span className="inputBox">
                  <select className="field">
                    <option value="">월</option>
                    {[...new Array(0 + 12)].map((v, i) => (
                      <option key={i} value={1 + i}>
                        {1 + i}
                      </option>
                    ))}
                  </select>
                </span>
                <span className="inputBox">
                  <input className="field" type="text" placeholder="일" />
                </span>
              </div>
              {alretId === 5 && <span className="alert">
                태어난 년도 4자리를 정확하게 입력하세요.
              </span>}
            </div>
            <div className="inputArea">
              <label htmlFor="sex">
                <h3>성별</h3>
              </label>
              <span className="inputBox">
                <select id="sex" className="field" type="text">
                  <option value="">성별</option>
                  <option value="male">남자</option>
                  <option value="female">여자</option>
                  <option value="unchecked">선택안함</option>
                </select>
              </span>
              <span className="alert">필수 정보입니다.</span>
            </div>
            <div className="inputArea">
              <label htmlFor="email">
                <h3>
                  본인 확인 이메일<span>(선택)</span>
                </h3>
              </label>
              <span className="inputBox">
                <input id="email" className="field" type="text" placeholder="선택입력" />
              </span>
              <span className="alert">이메일 주소를 다시 확인해주세요.</span>
            </div>
          </div>

          <div className="privGroup">
            <div className="inputArea">
              <label htmlFor="cellPhone">
                <h3>휴대전화</h3>
              </label>
              <div className="ctryBox">
                <span className="inputBox">
                  <select className="field">
                    <option value="+82">대한민국 +82</option>
                    {nationality && nationality.map(({ country, ncode }, i) => <option key={i} value={ncode}>{country} {ncode}</option>)}
                  </select>
                </span>
                <span className="sendCellIptBox">
                  <span className="inputBox">
                    <input id="cellPhone" className="field" type="text" placeholder="전화번호 입력" />
                  </span>
                  <span className="inputBox">
                    <input className="sendCellBtn" type="button" value="인증번호 받기" />
                  </span>
                </span>
                <span className="inputBox">
                  <input className="field" type="text" placeholder="인증번호 입력하세요" disabled />
                </span>
                <span className="alert">필수 정보입니다.</span>
              </div>
            </div>
          </div>

          <div className="btnArea">
            <button type="submit">
              <span>가입하기</span>
            </button>
          </div>
        </div>
      </form>
    </ContentCss>
  );
};

export default Content;
