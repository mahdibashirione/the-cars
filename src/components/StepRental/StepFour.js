import { motion } from "framer-motion";

const StepFour = ({ formik, steps }) => {
  return (
    <motion.div className="w-full select-none gap-y-4 flex flex-wrap bg-white shadow dark:bg-zinc-800 rounded-[10px] p-4 md:pb-16">
      <div className="flex w-full items-center justify-between flex-wrap dark:text-white md:mb-8">
        <h2 className="font-bold text-lg w-1/2">Conform Your Data</h2>
        <span className="text-slate-500 text-sm w-1/2 text-right">Step 4 of {steps.length}</span>
        <p className="text-slate-500 text-sm w-full">Please enter your Data</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Name:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.name}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Address:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.address}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Phone Number:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.phoneNumber}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">City:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.city}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Card Number:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.cardNumber}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Card Holder:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.cardHolder}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Expration Date:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.exprationDate}</p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center gap-x-1">
        <span className="text-sm md:text-base text-slate-400">Cvc:</span>
        <p className="text-slate-800 md:text-lg dark:text-white">{formik.values.cvc}</p>
      </div>
    </motion.div>
  );
}

export default StepFour;