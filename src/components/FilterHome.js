import { Select, MenuItem, FormControl } from "@mui/material";
import { useState } from "react";
import CheckBox from "./common/CheckBox";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const FilterHome = () => {

  const [value, setValue] = useState({
    pickToggle: false,
    dropToggle: false,

    pickLocation: "",
    pickDate: "",
    pickTime: "",

    dropLocation: "",
    dropDate: "",
    dropTime: "",
  })

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleRevers = () => {
    let pickLocation = value.pickLocation;
    let pickDate = value.pickDate;
    let pickTime = value.pickTime;

    setValue({
      pickToggle: value.pickToggle,
      dropToggle: value.dropToggle,

      pickLocation: value.dropLocation,
      pickDate: value.dropDate,
      pickTime: value.dropTime,

      dropLocation: pickLocation,
      dropDate: pickDate,
      dropTime: pickTime,
    })
  }

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
    <section className="w-full">
      <div className="relative w-full container flex flex-col md:flex-row justify-between items-center px-4 py-8 lg:pb-[42px] gap-8">
        {/*Pick-Up*/}
        <motion.div variants={container} initial="hidden" animate="visible" className="w-full shadow bg-white dark:bg-zinc-800 rounded-[10px] p-7 lg:px-12">
          <motion.div variants={item}>
            <CheckBox
              state={value}
              onChange={(e) => setValue({ ...value, [e.target.name]: !value.pickToggle })}
              name="pickToggle"
              id="PickUp"
              label="Pick-Up"
            />
          </motion.div>
          <div className={`${value.pickToggle ? "opacity-100" : "opacity-50"} flex gap-x-4 text-gray-500`}>
            {/* Location */}
            <motion.div variants={item} className="w-1/3">
              <FormControl className="w-full">
                <label htmlFor="pickLocation" className="font-bold text-slate-800 dark:text-white">Location</label>
                <Select
                  variant="standard"
                  size="small"
                  id="pickLocation"
                  name="pickLocation"
                  value={value.pickLocation}
                  onChange={handleChange}
                  className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
                >
                  <MenuItem value={"Tehran"}>Tehran</MenuItem>
                  <MenuItem value={"Kerman"}>Kerman</MenuItem>
                  <MenuItem value={"Karaj"}>Karaj</MenuItem>
                  <MenuItem value={"Shiraz"}>Shiraz</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
            {/* Date */}
            <motion.div variants={item} className="w-1/3">
              <FormControl className="w-full">
                <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="pickDate">Date</label>
                <Select
                  variant="standard"
                  size="small"
                  id="pickDate"
                  name="pickDate"
                  value={value.pickDate}
                  onChange={handleChange}
                  className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
                >
                  <MenuItem value={"1401/06/23"}>1401/06/23</MenuItem>
                  <MenuItem value={"1401/10/10"}>1401/10/10</MenuItem>
                  <MenuItem value={"1402/01/1"}>1402/01/1</MenuItem>
                  <MenuItem value={"1402/5/23"}>1402/5/23</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
            {/* Time */}
            <motion.div variants={item} className="w-1/3">
              <FormControl className="w-full">
                <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="pickTime">Time</label>
                <Select
                  variant="standard"
                  size="small"
                  id="pickTime"
                  name="pickTime"
                  value={value.pickTime}
                  onChange={handleChange}
                  className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
                >
                  <MenuItem value={"9:30"}>9:30</MenuItem>
                  <MenuItem value={"12:00"}>12:00</MenuItem>
                  <MenuItem value={"15:20"}>15:20</MenuItem>
                  <MenuItem value={"20:00"}>20:00</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
          </div>
        </motion.div>
        {/*BTN Revers*/}
        <button onClick={handleRevers} className="md:hover:scale-95 duration-300 md:static absolute p-4 rounded-[10px] md:translate-x-0 md:translate-y-0 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 bg-blue-500">
          <img className="w-6 h-6 min-w-[24px] min-h-[24px] md:rotate-90" src="/icons/Swap.svg" alt="icon-swap" />
        </button>
        {/*Drop-Off*/}
        <motion.div variants={container} initial="hidden" animate="visible" className="w-full shadow bg-white dark:bg-zinc-800 rounded-[10px] p-7 lg:px-12">
          <motion.div variants={item}>
            <CheckBox
              state={value}
              onChange={(e) => setValue({ ...value, [e.target.name]: !value.dropToggle })}
              name="dropToggle"
              id="DropOff"
              label="Drop-Off"
            />
          </motion.div>
          <div className={`${value.dropToggle ? "opacity-100" : "opacity-50"} flex gap-x-4 text-gray-500`}>
            {/* location */}
            <motion.div variants={item} className="w-1/3">
              <FormControl className="w-full">
                <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="dropLocation">Location</label>
                <Select
                  variant="standard"
                  size="small"
                  id="dropLocation"
                  name="dropLocation"
                  value={value.dropLocation}
                  onChange={handleChange}
                  className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
                >
                  <MenuItem value={"Tehran"}>Tehran</MenuItem>
                  <MenuItem value={"Kerman"}>Kerman</MenuItem>
                  <MenuItem value={"Karaj"}>Karaj</MenuItem>
                  <MenuItem value={"Shiraz"}>Shiraz</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
            {/* Date */}
            <motion.div variants={item} className="w-1/3">
              <FormControl className="w-full">
                <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="dropDate">Date</label>
                <Select
                  variant="standard"
                  size="small"
                  id="dropDate"
                  name="dropDate"
                  value={value.dropDate}
                  onChange={handleChange}
                  className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
                >
                  <MenuItem value={"1401/06/23"}>1401/06/23</MenuItem>
                  <MenuItem value={"1401/10/10"}>1401/10/10</MenuItem>
                  <MenuItem value={"1402/01/1"}>1402/01/1</MenuItem>
                  <MenuItem value={"1402/5/23"}>1402/5/23</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
            {/* Time */}
            <motion.div variants={item} className="w-1/3">
              <FormControl className="w-full">
                <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="dropTime">Time</label>
                <Select
                  variant="standard"
                  size="small"
                  id="dropTime"
                  name="dropTime"
                  value={value.dropTime}
                  onChange={handleChange}
                  className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
                >
                  <MenuItem value={"9:30"}>9:30</MenuItem>
                  <MenuItem value={"12:00"}>12:00</MenuItem>
                  <MenuItem value={"15:20"}>15:20</MenuItem>
                  <MenuItem value={"20:00"}>20:00</MenuItem>
                </Select>
              </FormControl>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section >
  );
}

export default FilterHome;