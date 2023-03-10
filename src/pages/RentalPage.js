import { useFormik } from "formik";
import * as Yup from "yup"
import { Button, CircularProgress, form } from "@mui/material";
import { useLocation } from "react-router-dom";
import { server } from "../server/server";
import { useState, useEffect } from "react";
import StepTwo from "../components/StepRental/StepTwo"
import Box from '@mui/material/Box';
import StepThree from "../components/StepRental/StepThree";
import StepFour from "../components/StepRental/StepFour";
import StepOne from "../components/StepRental/StepOne";
import WrapperStepper from "../HOC/wrapperStepper";
import Processing from "../components/common/Processing"
import http from "../services/httpServices"

const steps = ['Confirm Detail', 'Billing Info', 'payment method', 'Confirm Data'];

const RentalPage = ({ handleNext, handleBack, activeStep }) => {

  const { state } = useLocation()
  const [data, setData] = useState(null)


  const [dataPost, setDataPost] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = "Loading..."
    const carDetail = server.find(car => car.id === state.id)
    window.scrollTo({ top: 0 })
    setData(carDetail)
  }, [])

  useEffect(() => {
    data && (document.title = `Rental ${data.name}`)
  }, [data])

  const initialValues = {
    name: "",
    cardHolder: "",
    phoneNumber: "",
    city: "",
    cardNumber: "",
    cardHolder: "",
    exprationDate: "",
    cvc: "",
  }

  const onSubmit = async (value) => {
    setError(null)
    setLoading(true)
    try {
      const { data } = await http.Post("/register", JSON.stringify(value))
      setDataPost(data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string("").required('Required'),
    address: Yup.string("").max(25, "max length 25 elements").required('Required'),
    phoneNumber: Yup.string("").min(11, "max length 11 elements").max(11, "max length 11 elements").required('Required'),
    city: Yup.string("").required('Required'),
    cardNumber: Yup.string("").required('Required'),
    cardHolder: Yup.string("").required('Required'),
    exprationDate: Yup.string("").required('Required'),
    cvc: Yup.string("").required('Required'),
  })

  const formik = useFormik({ initialValues, validationSchema, validateOnMount: true, onSubmit, },)

  return (
    <section className="w-full container px-4 py-2 flex justify-center">
      {/* {error && <p>{error}</p>} */}
      {data ?
        <form onSubmit={formik.handleSubmit} className="w-full">
          {/* step 1 */}
          {activeStep === 0 && <StepOne data={data} steps={steps} />}
          {/* step 2 */}
          {activeStep === 1 && <StepTwo formik={formik} steps={steps} />}
          {/* step 3 */}
          {activeStep === 2 && <StepThree formik={formik} steps={steps} />}
          {/* step 4 */}
          {activeStep === 3 && <StepFour formik={formik} steps={steps} />}

          <Box sx={{ width: "100%", maxWidth: "900px", marginRight: "auto", marginLeft: "auto", display: 'flex', justifyContent: 'space-between', alignItems: "center", pt: 3, pb: 3 }}>
            <Button variant="outlined" style={{ color: "#64748b", borderColor: "#64748b" }} disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }} >
              Back
            </Button>
            {!formik.isValid && activeStep === 3 && <p className="text-red-500 select-none">filed in required</p>}
            {error && activeStep === 3 && <p className="mb-2 text-red-500 select-none w-full text-center">{error.message}</p>}
            {activeStep === steps.length - 1 ?
              <Button
                disabled={!formik.isValid}
                style={{ paddingTop: "0.45rem", paddingBottom: "0.45rem", color: "#fff" }}
                variant={"contained"}
                color={"primary"}
                type="submit"
              >
                Finish
              </Button> :
              <Button
                onClick={handleNext}
                variant="outlined">
                Next
              </Button>}
          </Box>
        </form>
        :
        <div className="col-span-full h-[16vh] flex items-center justify-center">
          <CircularProgress />
        </div>
      }
      <Processing loading={loading} />
    </section >
  );
}

export default WrapperStepper(RentalPage, steps);