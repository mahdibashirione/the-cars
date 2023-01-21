import { Form, useFormik } from "formik";
import BoxDetailRental from "../components/BoxDetailRental";
import * as Yup from "yup"
import InputCustom from "../components/common/Input.";
import { Button, FormControl } from "@mui/material";

const RentalPage = () => {

  const initialValues = {
    name: "",
    address: "",
    phoneNumber: "",
    city: "",
  }

  const validation = Yup.object().shape({
    name: Yup.string("").required('Required'),
    address: Yup.string("").max(25, "max length 25 elements").required('Required'),
    phoneNumber: Yup.number("number valid").max(11, "max length 11 elements").required('Required'),
    city: Yup.string("").required('Required'),
  })

  const onSubmit = (value) => {
    console.log(value)
  }

  const formik = useFormik({ initialValues, validationSchema: validation, onSubmit, validateOnMount: true, })

  return (
    <section className="w-full container grid grid- grid-cols-1 md:grid-cols-5 xl:grid-cols-12 gap-4 p-4">
      <article className="col-span-1 md:col-span-2 xl:col-span-4 md:min-h-full"><BoxDetailRental /></article>

      <article className="col-span-1 md:col-span-3 h-screen xl:col-span-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4 flex gap-5 flex-wrap">
            <InputCustom formik={formik} name="name" id="name" label="name" placeholder="mahdi one" />
            <InputCustom formik={formik} name="address" id="Address" label="Address" placeholder="Tehran,Azadi,P-35" />
            <InputCustom formik={formik} name="phoneNumber" id="phone-number" label="Phone Number" placeholder="0930 568 7635" />
            <InputCustom formik={formik} name="city" id="city" label="Town/City" placeholder="Tehran" />
          </div>
          <Button
            type="submit"
            fullWidth={"100"}
            variant={"contained"}
            color={"primary"}
            style={{ marginTop: "1rem", paddingTop: "0.7rem", paddingBottom: "0.7rem" }}
          >
            submit</Button>
        </form>
      </article>

    </section>
  );
}

export default RentalPage;