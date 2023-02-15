import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const WrapperStepper = (ComponentRapped, steps) => {
  const NewComponents = (props) => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" })
    };

    return (
      <Box sx={{ width: '100%', maxWidth: "900px", marginRight: "auto", marginLeft: "auto" }}>
        <article className="w-full pt-4 px-4">
          <div className="w-full bg-white dark:bg-zinc-800 shadow rounded-[10px] py-4">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>
                      <span className={`select-none ${activeStep >= index ? "text-blue-500 font-bold" : "text-slate-500 font-normal"} text-sm md:text-base`} >{label}</span>
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        </article>
        <ComponentRapped
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
          {...props}
        />
      </Box >
    );

  }
  return NewComponents;
}

export default WrapperStepper;