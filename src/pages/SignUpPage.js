import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import * as Yup from "yup"
import InputCustom from "../components/common/Input.";
import Processing from "../components/common/Processing";
import WrapperAuth from "../HOC/wrapperAuth";

const SignUpPage = ({ dataFetching, postData }) => {

  const [showPassword, setShowPassword] = useState(false)
  const { loading, error, data } = dataFetching;

  useEffect(() => {
    document.title = "Sign Up"
  }, [])

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
    onSubmit: (value) => postData("/user/register", value),
    validateOnMount: true,
  })

  return (
    <section className="container w-screen h-screen grid grid-cols-1 lg:grid-cols-2 py-4">
      <article className="col-span-1 md:bg-white md:shadow md:dark:bg-zinc-800 p-5 md:rounded-lg lg:rounded-r-none flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="flex flex-col md:flex-row flex-wrap gap-x-4 w-full max-w-[300px] md:max-w-none">
          <div className="w-full md:w-[calc(50%-1rem)]">
            <InputCustom
              label={"Name"}
              id={"name-sign-up"}
              formik={formik}
              placeholder="mahdi"
              name={"name"}
            />
          </div>
          <div className="w-full md:w-[calc(50%-1rem)]">
            <InputCustom
              inputMode="decimal"
              label={"Phone Number"}
              id={"phone-number-sign-up"}
              formik={formik}
              placeholder="09302565157"
              name={"phoneNumber"}
            />
          </div>
          <div className="w-full md:w-[calc(50%-1rem)]">
            <InputCustom
              type="email"
              label={"Email"}
              id={"email-sign-up"}
              formik={formik}
              placeholder="morent@rent.io"
              name={"email"}
            />
          </div>
          <div className="w-full md:w-[calc(50%-1rem)] relative">
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
          <div className="w-full md:w-[calc(50%-1rem)] relative">
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
          <div className="w-full flex justify-center">
            <Button
              style={{ width: "50%", paddingTop: "0.6rem", paddingBottom: "0.6rem", borderRadius: "0.5rem", marginTop: "1rem" }}
              disabled={!formik.isValid}
              variant="contained"
              type="submit"
              color="primary"
            >
              Sign Up
            </Button>
          </div>
          {/* Message Error */}
          {error && <span className="text-sm text-red-500 mt-2 w-full text-center">{error}</span>}
          {/* Link Sign Up Page */}
          <span className="flex justify-center w-full mt-4">
            <Link to="/sign-in" className="text-blue-500 text-sm">Login account</Link>
          </span>
        </form>
      </article>
      <article className="hidden lg:flex flex-col items-center justify-center col-span-1 p-5 text-white bg-gradient-to-tr from-blue-500 to-blue-700  dark:from-blue-500 dark:to-blue-800 shadow md:rounded-r-lg">
        <p className="select-none">coming soon...</p>
      </article>
      <Processing loading={loading} />
    </section>
  );
}

export default WrapperAuth(SignUpPage);