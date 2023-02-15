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

const StepThree = ({ formik, steps }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className={`flex w-full max-w-[900px] mx-auto gap-y-1 gap-x-4 flex-wrap select-none bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4`}>
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
    </motion.div>
  )
}

export default StepThree;