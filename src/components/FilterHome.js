import { FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useTheme } from "../context/theme/ThemeProvider";
import { useEffect, useState } from "react";

const FilterHome = () => {

  const [value, setValue] = useState({
    pickLocation: "",
    pickDate: "",
    pickTime: "",

    dropLocation: "",
    dropDate: "",
    dropTime: "",
  })

  let theme = useTheme()

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleRevers = () => {
    let pickLocation = value.pickLocation;
    let pickDate = value.pickDate;
    let pickTime = value.pickTime;

    setValue({
      pickLocation: value.dropLocation,
      pickDate: value.dropDate,
      pickTime: value.dropTime,

      dropLocation: pickLocation,
      dropDate: pickDate,
      dropTime: pickTime,
    })

  }

  return (
    <section className="w-full">
      <div className="relative w-full container flex flex-col md:flex-row justify-between items-center px-4 py-8 lg:pb-[42px] gap-8">
        {/*Pick-Up*/}
        <div className="w-full shadow bg-white dark:bg-zinc-800 rounded-[10px] p-7 lg:px-12">
          <div className="w-full mb-6"><FormControlLabel defaultValue={"true"} className="font-[600] dark:text-white" value="pickUp" control={<Radio />} label="Pick-Up" /></div>
          <div className="flex gap-x-4 text-gray-500">
            <FormControl className="w-1/3">
              <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="pickLocation">Location</label>
              <Select
                variant="standard"
                style={theme === "dark" ? { color: "#dedede" } : { color: "#f0f00" }}
                size="small"
                id="pickLocation"
                name="pickLocation"
                value={value.pickLocation}
                onChange={handleChange}
                className="text-slate-400"
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-1/3">
              <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="pickDate">Date</label>
              <Select
                variant="standard"
                style={theme === "dark" ? { color: "#dedede" } : { color: "#f0f00" }}
                size="small"
                id="pickDate"
                name="pickDate"
                value={value.pickDate}
                onChange={handleChange}
                className="text-slate-400"
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-1/3">
              <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="pickTime">Time</label>
              <Select
                variant="standard"
                style={theme === "dark" ? { color: "#dedede" } : { color: "#f0f00" }}
                size="small"
                id="pickTime"
                name="pickTime"
                value={value.pickTime}
                onChange={handleChange}
                className="text-slate-400"
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/*BTN Revers*/}
        <button onClick={handleRevers} className="hover:scale-95 duration-300 md:static absolute p-4 rounded-[10px] md:translate-x-0 md:translate-y-0 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2 bg-blue-500">
          <img className="w-6 h-6 min-w-[24px] min-h-[24px]" src="/icons/Swap.svg" alt="icon-swap" />
        </button>
        {/*Drop-Off*/}
        <div className="w-full shadow bg-white dark:bg-zinc-800 rounded-[10px] p-7 lg:px-12">
          <div className="w-full mb-6"> <FormControlLabel className="text-slate-400" defaultValue={true} value="DropOff" control={<Radio />} label="Drop-Off" /></div>
          <div className="flex gap-x-4 text-gray-500">
            <FormControl className="w-1/3">
              <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="dropLocation">Location</label>
              <Select
                variant="standard"
                style={theme === "dark" ? { color: "#dedede" } : { color: "#f0f00" }}
                size="small"
                id="dropLocation"
                name="dropLocation"
                value={value.dropLocation}
                onChange={handleChange}
                className="text-slate-400"
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-1/3">
              <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="dropDate">Date</label>
              <Select
                variant="standard"
                style={theme === "dark" ? { color: "#dedede" } : { color: "#f0f00" }}
                size="small"
                id="dropDate"
                name="dropDate"
                value={value.dropDate}
                onChange={handleChange}
                className="text-slate-400"
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="w-1/3">
              <label className="font-bold text-slate-800 dark:text-slate-200" htmlFor="dropTime">Time</label>
              <Select
                variant="standard"
                style={theme === "dark" ? { color: "#dedede" } : { color: "#f0f00" }}
                size="small"
                id="dropTime"
                name="dropTime"
                value={value.dropTime}
                onChange={handleChange}
                className="text-slate-400"
              >
                <MenuItem value={""}>none</MenuItem>
                <MenuItem value={"ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </section >
  );
}

export default FilterHome;