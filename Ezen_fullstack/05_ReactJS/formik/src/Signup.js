import React, { memo } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = memo(() => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "글자의 수는 최대 15개 입니다.")
        .required("필수 입력."),
      lastName: Yup.string()
        .max(20, "글자의 수는 최대 15개 입니다.")
        .required("필수 입력."),
      email: Yup.string()
        .email("이메일 형식이 틀립니다.")
        .required("필수 입력."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
      </div>
      <div className="input-container">
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
});

export default Signup;
