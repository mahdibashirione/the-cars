import { useFormik } from "formik";
import { motion } from "framer-motion";
import BoxDetailRental from "../components/BoxDetailRental";
import * as Yup from "yup"
import InputCustom from "../components/common/Input.";
import { Button, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { server } from "../server/server";
import { useState, useEffect } from "react";
import RadioCustom from "../components/common/Radio";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from "react-redux";

const RentalPage = () => {

  const steps = ['Confirm Detail', 'Billing Info', 'payment method'];
  const { state } = useLocation()
  const [data, setData] = useState(null)
  const theme = useSelector(store => store.theme)

  useEffect(() => {
    document.title = "Loading..."
    const carDetail = server.find(car => car.id === state.id)
    window.scrollTo({ top: 0 })
    setData(carDetail)
  }, [])

  useEffect(() => {
    data && (document.title = `Rental ${data.name}`)
  }, [data])

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

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

  const formik = useFormik({
    initialValues,
    validationSchema: validation,
    validateOnMount: true,
    onSubmit: value => console.log(value),
  })

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full container px-4 py-4 flex justify-center">
      {data ?
        <Box sx={{ width: '100%', maxWidth: "900px" }}>

          <article className="w-full bg-white dark:bg-zinc-800 shadow rounded-[10px] py-4">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>
                      <span className={`select-none ${activeStep >= index ? "text-blue-500 font-bold" : "text-slate-500 font-normal"}`} >{label}</span>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </article>

          <form onSubmit={formik.handleSubmit} className="w-full pt-2">
            {/* step 1 */}
            {activeStep === 0 && <BoxDetailRental data={data} lengthSteps={steps.length} />}
            {/* step 2 */}
            {activeStep === 1 && <motion.div variants={container} initial="hidden" animate="visible" className={`flex w-full max-w-[900px] mx-auto select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4 gap-y-1 gap-x-4 flex-wrap`}>
              <div variants={item} className="flex w-full items-center justify-between flex-wrap dark:text-white">
                <h2 className="font-bold text-lg w-1/2">Billing Info</h2>
                <span className="text-slate-500 text-sm w-1/2 text-right">Step 2 of {steps.length}</span>
                <p className="text-slate-500 text-sm w-full">Please enter your billing info</p>
              </div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="name" id="name" label="name" placeholder="mahdi one" />
              </motion.div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="address" id="Address" label="Address" placeholder="Tehran,Azadi,P-35" />
              </motion.div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} inputMode="numeric" name="phoneNumber" id="phone-number" label="Phone Number" placeholder="0930 568 7635" />
              </motion.div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="city" id="city" label="Town/City" placeholder="Tehran" />
              </motion.div>
            </motion.div>}
            {/* step 3 */}
            {activeStep === 2 && <motion.div variants={container} initial="hidden" animate="visible" className={`flex w-full max-w-[900px] mx-auto gap-4 flex-wrap select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4`}>
              <div className="flex w-full items-center justify-between flex-wrap dark:text-white">
                <h2 className="font-bold text-lg w-1/2">Payment Method</h2>
                <span className="text-slate-500 text-sm w-1/2 text-right">Step 3 of {steps.length}</span>
                <p className="text-slate-500 text-sm w-full">Please enter your payment method</p>
              </div>
              {/* credit */}
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="cardNumber" id="card-number" label="Card Number" placeholder="card number" />
              </motion.div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="cardHolder" id="card-holder" label="Card Holder" placeholder="card holder" />
              </motion.div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="exprationDate" id="expration-date" label="Expration Date" placeholder="DD/MMYY" />
              </motion.div>
              <motion.div className="w-full md:w-[calc(50%-1rem)]" variants={item}>
                <InputCustom formik={formik} name="cvc" id="cvc" label="Cvc" placeholder="cvc" />
              </motion.div>
            </motion.div>}

            <Box sx={{ width: "100%", maxWidth: "900px", marginRight: "auto", marginLeft: "auto", display: 'flex', justifyContent: 'space-between', pt: 2 }}>
              <Button variant="outlined" style={{ color: "#64748b", borderColor: "#64748b" }} disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }} >
                Back
              </Button>
              <div>
                {activeStep === steps.length - 1 ?
                  <Button disables={!formik.isValid} style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }} fullWidth={"100"} variant={"contained"} color={"primary"} >
                    Finish
                  </Button> :
                  <Button onClick={handleNext} variant="outlined">
                    next
                  </Button>
                }
              </div>
            </Box>
          </form>
        </Box>
        :
        <div className="col-span-full h-[16vh] flex items-center justify-center">
          <CircularProgress />
        </div>
      }
    </section >
  );
}

export default RentalPage;