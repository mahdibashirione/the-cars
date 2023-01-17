const CheckBox = ({ state, onChange, name, label, id }) => {
  return (
    <div className="relative font-[600] dark:text-white mb-6">
      <input
        className="absolute hidden"
        onClick={onChange}
        id={id}
        name={name}
        type={"checkbox"}
      />
      <label htmlFor={id} className="w-[100px] cursor-pointer select-none flex items-center gap-x-4" >
        <span className={`border-2 w-4 h-4 ring-2 rounded-full dark:ring-offset-zinc-800 ring-offset-2 ${state[name] ? "bg-blue-500 ring-blue-500 border-blue-500" : "ring-gray-300 border-transparent dark:border-zinc-800"}`} ></span>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;