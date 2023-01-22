import { ErrorMessage } from "formik";

const InputCustom = ({ type = "text", inputMode = "text", id, name, label, placeholder, formik }) => {


  return (
    <div className="flex flex-col w-full md:w-[calc(50%-1.25rem)]">
      <label
        htmlFor={id}
        className="dark:text-white mb-2"
      >
        {label}
      </label>
      <input
        inputMode={inputMode}
        name={name}
        {...formik.getFieldProps(name)}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${formik.touched[name] && formik.errors[name] && "ring-4 ring-red-400"} outline-none w-full bg-gray-200
         dark:bg-zinc-700 shadow text-slate-600 dark:text-slate-400 px-4 py-3 rounded-lg focus:ring-4`}
      />
      {formik.touched[name] && formik.errors[name] && <span className="text-red-500 text-[12px] mt-1">{formik.errors[name]}</span>}
    </div>
  );
}

export default InputCustom;