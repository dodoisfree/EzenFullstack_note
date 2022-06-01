import React, { useState } from "react";
import ContentCss from "../StyledComponents/ContentCss";
import useAxios from "axios-hooks";
import { Formik } from "formik";
import * as Yup from "yup";

const Content = () => {
  // 국가 목록 불러오기
  const [nationality, setNationality] = useState([]);
  const [{ data }] = useAxios(
    "http://localhost:3001/Nationality",
    { useCache: false }
  );
  React.useEffect(() => {
    setNationality(data);
    //console.log(data);
  }, [data]);

  //   // const id = current.id.value;
  //   // const pw = current.pw.value;
  //   // const name = current.name.value;
  //   // const sex = current.sex.value;
  //   // const birthday = current.birthday.value;
  //   // const email = current.email.value;
  //   // const cellPhone = current.cellPhone.value;
  //   // let json = null;
  //   // console.log(id);
  //   // (async () => {
  //   //   try {
  //   //     const response = await refetch(
  //   //       { url: "http://localhost:3001/Profile",
  //   //         method: "POST",
  //   //         data: {
  //   //           id: id,
  //   //           pw: pw,
  //   //           name: name,
  //   //           sex: sex,
  //   //           birthday: birthday,
  //   //           email: email,
  //   //           cellPhone: cellPhone,
  //   //         }
  //   //       }, { menual: true }
  //   //     );
  //   //     console.log(response.data);
  //   //     json = response.data;
  //   //   } catch (e) {
  //   //     console.log("저장 실패");
  //   //   }

  //   //   // 정삭적으로 저장되어 응답을 받았다면?
  //   //   if (json != null) {
  //   //     window.alert("저장되었습니다.");
  //   //     // 페이지 강제 이동 (window.location.href = URL 기능과 동일함)
  //   //   }
  //   // })();
  // }

  return (
    <ContentCss>
      <Formik
        initialValues={{
          id: "",
          pw: "",
          pwCfm: "",
          name: "",
          birthday: "",
          sex: "",
          email: "",
          cellphone: "",
        }}
        validationSchema={Yup.object({
          id: Yup.string()
            .required("필수 정보입니다.")
            .matches(/^[a-z0-9_-]{5,20}$/,"5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."),
          pw: Yup.string()
            .required("필수 정보입니다.")
            .matches(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,"8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."),
          pwCfm: Yup.string()
          .required("필수 정보입니다.")
          .oneOf([Yup.ref("pw"), null], "비밀번호가 일치하지 않습니다."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <div className="joinArea">
              <div className="privGroup">
                <div className="inputArea">
                  <label htmlFor="id">
                    <h3>아이디</h3>
                  </label>
                  <span className="inputBox">
                    <input id="id" className="field" type="text" name="id" value={formik.values.id} {...formik.getFieldProps('id')} />
                    <span>@naver.com</span>
                  </span>
                  {formik.touched.id ? <span className="alert">{formik.errors.id}</span> : null}
                </div>
                <div className="inputArea">
                  <label htmlFor="pw">
                    <h3>비밀번호</h3>
                  </label>
                  <span className="inputBox">
                    <input id="pw" className="field" type="text" name="pw" value={formik.values.pw} {...formik.getFieldProps('pw')} />
                    {formik.touched.pw ? <span></span>  : 
                     formik.touched.pw ? <span className="notSafe">사용불가</span> : <span className="safe">안전</span>}
                    {formik.touched.pw && formik.touched.pw ? <span className="notSafeImg"></span> : <span className="defaultImg"></span>}
                  </span>
                  {formik.touched.pw ? <span className="alert">{formik.errors.pw}</span> : null}
                  <label htmlFor="pwCfm">
                    <h3>비밀번호 재확인</h3>
                  </label>
                  <span className="inputBox">
                    <input id="pwCfm" className="field" type="text" name="pwCfm" value={formik.values.pwCfm} {...formik.getFieldProps("pwCfm")} />
                    {formik.touched.pwCfm ? <span className="safeImg"></span> : <span className="defaultImg2"></span>}
                  </span>
                  {formik.touched.pwCfm ? <span className="alert">{formik.errors.pwCfm}</span> : null}
                </div>
              </div>

              <div className="privGroup">
                <div className="inputArea">
                  <label htmlFor="name">
                    <h3>이름</h3>
                  </label>
                  <span className="inputBox">
                    <input id="name" className="field" type="text" name="name" />
                  </span>
                  {/* <span className="alert">필수 정보입니다.</span> */}
                </div>
                <div className="inputArea">
                  <label htmlFor="birhday">
                    <h3>생년월일</h3>
                  </label>
                  <div className="bdayIptBox">
                    <span className="inputBox">
                      <input id="birhday" className="field" type="text" placeholder="년(4자)" />
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
                  {/* <span className="alert">
                    태어난 년도 4자리를 정확하게 입력하세요.
                  </span> */}
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
                  {/* <span className="alert">필수 정보입니다.</span> */}
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
                  {/* <span className="alert">이메일 주소를 다시 확인해주세요.</span> */}
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
                    {/* <span className="alert">필수 정보입니다.</span> */}
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
          )}
      </Formik>
    </ContentCss>
  );
};

export default Content;
