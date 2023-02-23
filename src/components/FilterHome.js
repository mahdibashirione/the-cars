import { MenuItem, FormControl } from "@mui/material";
import { useState } from "react";
import CheckBox from "./common/CheckBox";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import CustomSelect from "./common/Select";

const FilterHome = () => {
  const [value, setValue] = useState({
    pickUp: false,
    dropOff: false,
    pickUp: {
      location_pickUp: "",
      date_pickUp: "",
      time_pickUp: "",
    },
    dropOff: {
      location_dropOff: "",
      date_dropOff: "",
      time_dropOff: "",
    },
  });

  const handleRevers = () => {
    const pickUpCopy = { ...value.pickUp };
    setValue({ ...value, pickUp: { ...value.dropOff }, dropOff: pickUpCopy });
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const handleChange = (e, item) => {
    setValue({
      ...value,
      [item]: { ...value[item], [e.target.name]: e.target.value },
    });
  };

  return (
    <section className="w-full">
      <div className="relative w-full container flex flex-col md:flex-row justify-between items-center px-4 py-8 lg:pb-[42px] gap-8">
        {/*Pick-Up*/}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full shadow bg-white dark:bg-zinc-800 rounded-[10px] p-7 lg:px-12"
        >
          <CheckBox
            state={value}
            onChange={(e) =>
              setValue({ ...value, [e.target.name]: !value.pickUp })
            }
            name="pickUp"
            id="PickUp"
            label="Pick-Up"
          />
          <div
            className={`${
              value.pickUp ? "opacity-100" : "opacity-50"
            } flex gap-x-4 text-gray-500`}
          >
            {/* Location */}
            <motion.div variants={item} className="w-1/3">
              <CustomSelect
                handleChange={(e) => handleChange(e, "pickUp")}
                name="pickUp"
                id="location"
                label="Location"
                options={["Tehran", "Karaj", "Shiraz", "Mashad"]}
                value={value.pickUp.location_pickUp}
              />
            </motion.div>
            {/* Date */}
            <motion.div variants={item} className="w-1/3">
              <CustomSelect
                handleChange={(e) => handleChange(e, "pickUp")}
                name="pickUp"
                id="date"
                label="Date"
                options={["sunday", "munday", "tusday"]}
                value={value.pickUp.date_pickUp}
              />
            </motion.div>
            {/* Time */}
            <motion.div variants={item} className="w-1/3">
              <CustomSelect
                handleChange={(e) => handleChange(e, "pickUp")}
                name="pickUp"
                id="time"
                label="Time"
                options={["15:00", "20:00", "10:00", "8:00"]}
                value={value.pickUp.time_pickUp}
              />
            </motion.div>
          </div>
        </motion.div>
        {/*BTN Revers*/}
        <button
          onClick={handleRevers}
          className="md:hover:scale-95 duration-300 md:static absolute p-4 rounded-[10px] md:translate-x-0 md:translate-y-0 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 bg-blue-500"
        >
          <img
            className="w-6 h-6 min-w-[24px] min-h-[24px] md:rotate-90"
            src="/icons/Swap.svg"
            alt="icon-swap"
          />
        </button>
        {/*Drop-Off*/}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full shadow bg-white dark:bg-zinc-800 rounded-[10px] p-7 lg:px-12"
        >
          <CheckBox
            state={value}
            onChange={(e) =>
              setValue({ ...value, [e.target.name]: !value.dropOff })
            }
            name="dropOff"
            id="DropOff"
            label="Drop-Off"
          />
          <div
            className={`${
              value.dropOff ? "opacity-100" : "opacity-50"
            } flex gap-x-4 text-gray-500`}
          >
            {/* Location */}
            <motion.div variants={item} className="w-1/3">
              <CustomSelect
                handleChange={(e) => handleChange(e, "dropOff")}
                name="dropOff"
                id="location"
                label="Location"
                options={["Tehran", "Karaj", "Shiraz", "Mashad"]}
                value={value.dropOff.location_pickUp}
              />
            </motion.div>
            {/* Date */}
            <motion.div variants={item} className="w-1/3">
              <CustomSelect
                handleChange={(e) => handleChange(e, "dropOff")}
                name="dropOff"
                id="date"
                label="Date"
                options={["sunday", "munday", "tusday"]}
                value={value.dropOff.date_pickUp}
              />
            </motion.div>
            {/* Time */}
            <motion.div variants={item} className="w-1/3">
              <CustomSelect
                handleChange={(e) => handleChange(e, "dropOff")}
                name="dropOff"
                id="time"
                label="Time"
                options={["15:00", "20:00", "10:00", "8:00"]}
                value={value.dropOff.time_pickUp}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FilterHome;
