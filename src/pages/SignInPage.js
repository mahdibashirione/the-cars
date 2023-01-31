import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup"
import CheckBox from "../components/common/CheckBox";
import InputCustom from "../components/common/Input.";

const SignInPage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string("").email("type email is valid").required("is valid"),
      password: Yup.string("").required("is valid"),
    }),
    onSubmit: (value) => { console.log(value); },
    validateOnMount: true,
  })

  return (
    <section className="container w-full h-screen grid grid-cols-1 md:grid-cols-2 md:py-10">
      <article className="col-span-1 md:bg-white md:shadow md:dark:bg-zinc-800 px-5 py-20 md:rounded-l-lg flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full max-w-[300px]">
          <InputCustom
            type="email"
            label={"Email"}
            id={"email-sign-in"}
            formik={formik}
            placeholder="morent@rent.io"
            name={"email"}
          />
          <div className="w-full relative">
            <InputCustom
              type={showPassword ? "text" : "password"}
              label={"Password"}
              id={"password-sign-in"}
              formik={formik}
              placeholder="Morent123@xcd"
              name={"password"}
            />
            {showPassword ? <FiEye onClick={() => setShowPassword(false)} className="text-slate-600 dark:text-slate-800 text-xl absolute top-[45%] right-4 cursor-pointer" />
              : <FiEyeOff onClick={() => setShowPassword(true)} className="text-slate-600 dark:text-slate-800 text-xl absolute top-[45%] right-4 cursor-pointer" />}
          </div>
          <Button style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem", borderRadius: "0.5rem", marginTop: "1rem" }} disabled={!formik.isValid} variant="contained" type="submit" color="primary">Sign In</Button>
          <span className="flex justify-center w-full mt-4">
            <Link to="/sign-up" className="text-blue-500 text-sm">Create new account</Link>
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

export default SignInPage;