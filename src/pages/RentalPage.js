import { Form, useFormik } from "formik";
import BoxDetailRental from "../components/BoxDetailRental";
import * as Yup from "yup"
import InputCustom from "../components/common/Input.";
import { Button, CircularProgress, FormControl } from "@mui/material";
import { useLocation } from "react-router-dom";
import { server } from "../server/server";
import { useState, useEffect } from "react";
import RadioCustom from "../components/common/Radio";


const RentalPage = () => {

  const { state } = useLocation()
  const [data, setData] = useState(null)


  useEffect(() => {
    const carDetail = server.find(car => car.id === state.id)
    setData(carDetail)
  }, [])


  const initialValues = {
    name: "",
    address: "",
    phoneNumber: "",
    city: "",
    cardNumber: "",
    cardHolder: "",
    exprationDate: "",
    cvc: "",
    paymentCard: "creditCard",
  }

  const validation = Yup.object().shape({
    name: Yup.string("").required('Required'),
    address: Yup.string("").max(25, "max length 25 elements").required('Required'),
    phoneNumber: Yup.string("").min(11, "max length 11 elements").max(11, "max length 11 elements").required('Required'),
    city: Yup.string("").required('Required'),
    cardNumber: Yup.string("").required('Required'),
    cardHolder: Yup.string("").required('Required'),
    exprationDate: Yup.string("").required('Required'),
    cvc: Yup.string("").required('Required'),
    paymentCard: Yup.string("").required('Required'),
  })

  const onSubmit = (value) => {
    console.log(value)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit,
    validateOnMount: true,
  })

  return (
    <section className="w-full container grid grid- grid-cols-1 md:grid-cols-5 xl:grid-cols-12 gap-4 p-4">
      {data ? <>
        <article className="col-span-1 md:col-span-2 xl:col-span-4 md:min-h-full">
          <BoxDetailRental data={data} />
        </article>
        <article className="col-span-1 md:col-span-3 xl:col-span-8">
          <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
            {/* Billing Info */}
            <div className="w-full select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4 flex gap-5 flex-wrap">
              <div className="flex w-full items-center justify-between flex-wrap dark:text-white">
                <h2 className="font-bold text-lg w-1/2">Billing Info</h2>
                <span className="text-slate-500 text-sm w-1/2 text-right">Step 1 of 4</span>
                <p className="text-slate-500 text-sm w-full">Please enter your billing info</p>
              </div>
              <InputCustom formik={formik} name="name" id="name" label="name" placeholder="mahdi one" />
              <InputCustom formik={formik} name="address" id="Address" label="Address" placeholder="Tehran,Azadi,P-35" />
              <InputCustom formik={formik} inputMode="numeric" name="phoneNumber" id="phone-number" label="Phone Number" placeholder="0930 568 7635" />
              <InputCustom formik={formik} name="city" id="city" label="Town/City" placeholder="Tehran" />
            </div>
            {/* payment method*/}
            <div className="w-full flex gap-5 flex-wrap select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4">
              <div className="flex w-full items-center justify-between flex-wrap dark:text-white">
                <h2 className="font-bold text-lg w-1/2">Payment Method</h2>
                <span className="text-slate-500 text-sm w-1/2 text-right">Step 3 of 4</span>
                <p className="text-slate-500 text-sm w-full">Please enter your payment method</p>
              </div>
              {/* credit */}
              <div className="w-full flex gap-5 flex-wrap p-4 bg-gray-100 shadow dark:bg-zinc-600 rounded-lg">
                <RadioCustom name="paymentCard" formik={formik} value="creditCard" defaultValue="creditCard" label="Credit Card" id="credit-card" />
                <InputCustom formik={formik} name="cardNumber" id="card-number" label="Card Number" placeholder="card number" />
                <InputCustom formik={formik} name="cardHolder" id="card-holder" label="Card Holder" placeholder="card holder" />
                <InputCustom formik={formik} name="exprationDate" id="expration-date" label="Expration Date" placeholder="DD/MMYY" />
                <InputCustom formik={formik} name="cvc" id="cvc" label="Cvc" placeholder="cvc" />
              </div>
              {/* paypal */}
              <div className="w-full dark:text-white flex justify-between items-center bg-gray-100 shadow dark:bg-zinc-600 p-3 rounded-lg">
                <RadioCustom name="paymentCard" formik={formik} value="payPal" label="PayPal" id="paypal-card" />
                <img className="w-full max-w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnTzKjz4vE2f53REztpMtp4NyfKbdRYH1fg&usqp=CAU" alt="paypal" />
              </div>
              {/* bitcoin */}
              <div className="w-full dark:text-white flex justify-between items-center bg-gray-100 shadow dark:bg-zinc-600 p-3 rounded-lg">
                <RadioCustom name="paymentCard" formik={formik} value="bitcoin" label="Bitcoin" id="bitcoin-card" />
                <img className="w-full max-w-[100px]" src="data:image/png;base64,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" alt="paypal" />
              </div>
            </div>
            {/* BTN Submit */}
            <Button
              disabled={!formik.isValid}
              type="submit"
              fullWidth={"100"}
              variant={"contained"}
              color={"primary"}
              style={{ paddingTop: "0.7rem", paddingBottom: "0.7rem" }}
            >
              submit</Button>
          </form>
        </article></>
        : <div className="col-span-full h-[16vh] flex items-center justify-center"> <CircularProgress /> </div>}
    </section>
  );
}

export default RentalPage;