
const RadioFilter = ({ value, name, id, label, state, onChange }) => {

  return (
    <div className="w-full relative flex items-center gap-x-1">
      <input
        onChange={onChange}
        type="radio"
        name={name}
        id={id}
        value={value}
        defaultChecked={state[name] === value}
        className="absolute top-0 right-0 hidden"
      />
      <label htmlFor={id} className="dark:text-white flex items-center text-sm gap-x-2 cursor-pointer">
        <span className={`${state[name] === value ? "border-white dark:border-zinc-700 bg-blue-500 ring-2" : "bg-transparent border-slate-400"} block w-3 h-3 border-2 rounded-full`}></span>
        {label}
      </label>
    </div>
  )
}
export default RadioFilter;