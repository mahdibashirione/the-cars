import { motion } from "framer-motion";
import InputCustom from "../common/Input.";

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

const StepTwo = ({ formik, steps }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={`flex w-full max-w-[900px] mx-auto select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4 gap-y-1 gap-x-4 flex-wrap`}>
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
    </motion.div>
  )
}

export default StepTwo;