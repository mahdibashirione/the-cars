import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup"
import CheckBox from "../components/common/CheckBox";
import InputCustom from "../components/common/Input.";

const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string("").max(15, "max length 15 elements").required("is valid"),
      phoneNumber: Yup.string("").min(11, "phone number is valid").max(11, "phone number is valid").required("is valid"),
      email: Yup.string("").email("type email is valid").required("is valid"),
      password: Yup.string("").required("is valid"),
      passwordConfirmation: Yup.string("").required("is valid").oneOf([Yup.ref("password"), null], "is not matched password"),
    }),
    onSubmit: (value) => { console.log(value); },
    validateOnMount: true,
  })

  return (
    <section className="container w-full grid grid-cols-1 md:grid-cols-2 md:py-4">
      <article className="col-span-1 md:bg-white md:shadow md:dark:bg-zinc-800 px-5 py-10 md:rounded-l-lg flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full max-w-[300px]">
          <InputCustom
            label={"Name"}
            id={"name-sign-up"}
            formik={formik}
            placeholder="mahdi"
            name={"name"}
          />
          <InputCustom
            inputMode="numerical"
            label={"Phone Number"}
            id={"phone-number-sign-up"}
            formik={formik}
            placeholder="09302565157"
            name={"phoneNumber"}
          />
          <InputCustom
            type="email"
            label={"Email"}
            id={"email-sign-up"}
            formik={formik}
            placeholder="morent@rent.io"
            name={"email"}
          />
          <div className="w-full relative">
            <InputCustom
              type={showPassword ? "text" : "password"}
              label={"Password"}
              id={"password-sign-up"}
              formik={formik}
              placeholder="Morent123@xcd"
              name={"password"}
            />
            {showPassword ? <FiEye onClick={() => setShowPassword(false)} className="text-slate-600 dark:text-slate-800 text-xl absolute top-[45%] right-4 cursor-pointer" />
              : <FiEyeOff onClick={() => setShowPassword(true)} className="text-slate-600 dark:text-slate-800 text-xl absolute top-[43%] right-4 cursor-pointer" />}
          </div>
          <div className="w-full relative">
            <InputCustom
              type={showPassword ? "text" : "password"}
              label={"Password Confirm"}
              id={"password-confirm-sign-up"}
              formik={formik}
              placeholder="Morent123@xcd"
              name={"passwordConfirmation"}
            />
            {showPassword ? <FiEye onClick={() => setShowPassword(false)} className="text-slate-600 dark:text-slate-800 text-xl absolute top-[45%] right-4 cursor-pointer" />
              : <FiEyeOff onClick={() => setShowPassword(true)} className="text-slate-600 dark:text-slate-800 text-xl absolute top-[43%] right-4 cursor-pointer" />}
          </div>
          <Button style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem", borderRadius: "0.5rem", marginTop: "1rem" }} disabled={!formik.isValid} variant="contained" type="submit" color="primary">Sign In</Button>
          <span className="flex justify-center w-full mt-4">
            <Link to="/sign-in" className="text-blue-500 text-sm">Login account</Link>
          </span>
        </form>
      </article>
      <article className="hidden md:flex flex-col justify-center col-span-1 text-white bg-gradient-to-tr from-blue-500 to-blue-700  dark:from-blue-500 dark:to-blue-800 shadow p-5 md:rounded-r-lg">
        <span className="text-xl">Welcome!</span>
        <p className="text-sm text-slate-400">you create new account for bling the car liked</p>
      </article>
    </section>
  );
}

export default SignUpPage;