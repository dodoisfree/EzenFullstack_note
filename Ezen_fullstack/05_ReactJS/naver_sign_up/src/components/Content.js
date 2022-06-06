import React, { useState } from "react";
import ContentCss from "../StyledComponents/ContentCss";
import useAxios from "axios-hooks";
import { useFormik } from "formik";
import * as Yup from "yup";

const Content = () => {
  // 국가 목록 불러오기
  const [nationality, setNationality] = useState([]);
  const [{ data }] = useAxios("http://localhost:3001/Nationality", {
    useCache: false,
  });
  React.useEffect(() => {
    setNationality(data);
  }, [data]);

  const formik = useFormik({
    initialValues: {
      id: "",
      pw: "",
      pwCfm: "",
      name: "",
      year: "",
      month: "",
      day: "",
      sex: "",
      email: "",
      cellphone: "",
    },
    onBlur: (values) => {
      console.log(values.pw);
    },
    validationSchema: Yup.object({
      id: Yup.string()
        .required(["필수 정보입니다."])
        .matches(/^[a-z0-9_-]{5,20}$/, "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다."),
      pw: Yup.string()
        .required("필수 정보입니다.")
        .matches(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/, "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요."),
      pwCfm: Yup.string()
        .required("필수 정보입니다.")
        .oneOf([Yup.ref("pw"), null], "비밀번호가 일치하지 않습니다."),
      name: Yup.string()
      // .required("필수 정보입니다.")
      // .matches(/^[a-zA-Z가-힣0-9]*$/, "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)"),
      .matches(/^\d([1-9]|1[012])$/, "태어난 월을 선택하세요."),
      year: Yup.string()
      .required("태어난 년도 4자리를 정확하게 입력하세요.")
      .matches(/^\d{4}$/, "태어난 년도 4자리를 정확하게 입력하세요."),
      month: Yup.string()
      .required("태어난 월을 선택하세요.")
      .matches(/^\d([1-9]|1[012])$/, "태어난 월을 선택하세요."),
      day: Yup.string()
      .required("태어난 일(날짜) 2자리를 정확하게 입력하세요.")
      .matches(/^\d([1-9]|1[012])$/, "태어난 일(날짜) 2자리를 정확하게 입력하세요."),
    }),
    onSubmit: (values) => {
      console.log(values.pw);
    },
  });

  return (
    <ContentCss>
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
                    {formik.touched.pw ? (formik.errors.pw ? <span className="notSafe">사용불가</span> : <span className="safe">안전</span>) : <span></span>}
                    {formik.touched.pw ? (formik.errors.pw ? <span className="notSafeImg"></span> : <span className="safeImg"></span>) : <span className="defaultImg"></span>}
                  </span>
                  {formik.touched.pw ? <span className="alert">{formik.errors.pw}</span> : null}
                  <label htmlFor="pwCfm">
                    <h3>비밀번호 재확인</h3>
                  </label>
                  <span className="inputBox">
                    <input id="pwCfm" className="field" type="text" name="pwCfm" value={formik.values.pwCfm} {...formik.getFieldProps("pwCfm")} />
                    {formik.touched.pwCfm ? (formik.errors.pwCfm ? <span className="defaultImg2"></span> : <span className="safeImg"></span>) : <span className="defaultImg2"></span>}
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
                    <input id="name" className="field" type="text" name="name" value={formik.values.name} {...formik.getFieldProps("name")}/>
                  </span>
                  {formik.touched.name ? <span className="alert">{formik.errors.name}</span> : null}
                </div>
                <div className="inputArea">
                  <label htmlFor="birhday">
                    <h3>생년월일</h3>
                  </label>
                  <div className="bdayIptBox">
                    <span className="inputBox">
                      <input id="year" className="field" type="text" name="year" placeholder="년(4자)" {...formik.getFieldProps("year")} />
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
                      <input className="field" type="text" name="month" placeholder="일" value={formik.values.month} {...formik.getFieldProps("month")} />
                    </span>
                  </div>
                  {formik.touched.year ? (formik.errors.year ? <span className="alert">{formik.errors.year}</span> : <span className="alert">{formik.errors.month}</span>) :
                  formik.touched.month ? (formik.errors.month ? <span className="alert">{formik.errors.month}</span> : <span className="alert">{formik.errors.day}</span>) : null }
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
    </ContentCss>
  );
};

export default Content;
