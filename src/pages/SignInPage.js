import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup"
import CheckBox from "../components/common/CheckBox";
import InputCustom from "../components/common/Input.";

const SignInPage = () => {

  const [state, setState] = useState({ showPassword: false, })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string("").email("type email is valid").required("is valid"),
    }),
    onSubmit: (value) => { console.log(value); },
    validateOnMount: true,
  })

  return (
    <section className="container w-full grid grid-cols-1 md:grid-cols-2 md:p-5">
      <article className="col-span-1 md:bg-white md:shadow md:dark:bg-zinc-800 p-5 md:rounded-l-lg flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 w-full max-w-[300px]">
          <InputCustom
            type="email"
            label={"Email"}
            id={"email-sign-in"}
            formik={formik}
            placeholder="morent@rent.io"
            name={"email"}
          />
          <InputCustom
            type={state.showPassword ? "text" : "password"}
            label={"Password"}
            id={"password-sign-in"}
            formik={formik}
            placeholder="Morent123@xcd"
            name={"password"}
          />
          <CheckBox
            label="shaw password"
            id="show-password"
            state={state}
            name="showPassword"
            onChange={() => setState({ ...state, showPassword: !state.showPassword })}
          />
          <Button style={{ paddingTop: "0.6rem", paddingBottom: "0.6rem", borderRadius: "0.5rem" }} disabled={!formik.isValid} variant="contained" type="submit" color="primary">Sign In</Button>
        </form>
      </article>
      <article className="hidden md:flex flex-col col-span-1 text-white bg-blue-500 dark:bg-blue-600 p-5 md:rounded-r-lg">
        <span className="text-xl">Welcome!</span>
        <p className="text-sm text-slate-400">you create new account for bling the car liked</p>
      </article>
    </section>
  );
}

export default SignInPage;