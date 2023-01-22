const RadioCustom = ({ name, id, formik, value, defaultValue = false, label }) => {
  return (
    <div className="w-full relative flex items-center gap-x-1">
      <input
        type="radio"
        name={name}
        id={id}
        {...formik.getFieldProps(name)}
        value={value}
        defaultChecked={formik.values[name] == defaultValue}
        className="absolute top-0 right-0 hidden"
      />
      <label htmlFor={id} className="dark:text-white flex items-center gap-x-2 cursor-pointer">
        <span className={`${formik.values[name] === value ? "border-white dark:border-zinc-700 bg-blue-500 ring-2" : "bg-transparent border-slate-400"} block w-4 h-4 border-2 rounded-full`}></span>
        {label}
      </label>
      {formik.touched[name] && formik.errors[name]
        && <span className="text-red-500 text-[12px] mt-1">{formik.errors[name]}</span>}
    </div>
  );
}

export default RadioCustom;