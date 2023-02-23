import { FormControl, MenuItem, Select } from "@mui/material";

const CustomSelect = (props) => {
  const { options, name, id, handleChange, value, label } = props;

  return (
    <FormControl className="w-full">
      <label
        htmlFor={id + "_" + name}
        className="font-bold text-slate-800 dark:text-slate-200"
      >
        {label}
      </label>
      <Select
        variant="standard"
        size="small"
        id={id + "_" + name}
        name={id + "_" + name}
        value={value}
        onChange={handleChange}
        className="text-slate-500 dark:text-slate-400 pb-2 px-1 dark:before:border-b-slate-400 dark:hover:before:border-b-slate-700"
      >
        {options.map((item, index) => (
          <MenuItem name={id + "_" + item} key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
