import { Form, useFormik } from "formik";
import BoxDetailRental from "../components/BoxDetailRental";
import * as Yup from "yup"
import InputCustom from "../components/common/Input.";
import { Button, CircularProgress, FormControl } from "@mui/material";
import { useLocation } from "react-router-dom";
import { server } from "../server/server";
import { useState, useEffect } from "react";


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
  })

  const onSubmit = (value) => {
    console.log(value)
  }

  const formik = useFormik({ initialValues, validationSchema: validation, onSubmit, validateOnMount: true, })

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
              <InputCustom formik={formik} name="phoneNumber" id="phone-number" label="Phone Number" placeholder="0930 568 7635" />
              <InputCustom formik={formik} name="city" id="city" label="Town/City" placeholder="Tehran" />
            </div>
            {/* payment method*/}
            <div className="w-full select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4 flex gap-5 flex-wrap">
              <div className="flex w-full items-center justify-between flex-wrap dark:text-white">
                <h2 className="font-bold text-lg w-1/2">Payment Method</h2>
                <span className="text-slate-500 text-sm w-1/2 text-right">Step 3 of 4</span>
                <p className="text-slate-500 text-sm w-full">Please enter your payment method</p>
              </div>
              {/* credit */}
              <div className="w-full flex items-center gap-x-2">
                <input defaultChecked={true} type="radio" name="payment" id="Credit-payment" className="cursor-pointer" />
                <label htmlFor="Credit-payment">Credit Card</label>
              </div>
              <InputCustom formik={formik} name="cardNumber" id="card-number" label="Card Number" placeholder="card number" />
              <InputCustom formik={formik} name="cardHolder" id="card-holder" label="Card Holder" placeholder="card holder" />
              <InputCustom formik={formik} name="exprationDate" id="expration-date" label="Expration Date" placeholder="DD/MMYY" />
              <InputCustom formik={formik} name="cvc" id="cvc" label="Cvc" placeholder="cvc" />
              {/* paypal */}
              <div className="w-full dark:text-white flex justify-between items-center bg-gray-200 dark:bg-zinc-700 p-3 rounded-lg">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <input type="radio" name="payment" id="paypal-payment" />
                  <label htmlFor="paypal-payment">PayPal</label>
                </div>
                <img className="w-full max-w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnTzKjz4vE2f53REztpMtp4NyfKbdRYH1fg&usqp=CAU" alt="paypal" />
              </div>
              {/* bitcoin */}
              <div className="w-full dark:text-white flex justify-between items-center bg-gray-200 dark:bg-zinc-700 p-3 rounded-lg">
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <input type="radio" name="payment" id="bitcoin-payment" />
                  <label htmlFor="bitcoin-payment">Bitcoin</label>
                </div>
                <img className="w-full max-w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnTzKjz4vE2f53REztpMtp4NyfKbdRYH1fg&usqp=CAU" alt="paypal" />
              </div>
            </div>
            {/* BTN Submit */}
            <Button
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