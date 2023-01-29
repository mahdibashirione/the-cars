import { FiCheck } from "react-icons/fi";

const CheckBox = ({ state, onChange, name, label, id }) => {
  return (
    <div className="relative dark:text-white mb-6">
      <input
        className="absolute hidden"
        onClick={onChange}
        id={id}
        name={name}
        type={"checkbox"}
      />
      <label htmlFor={id} className="whitespace-nowrap text-sm cursor-pointer select-none flex items-center gap-x-3" >
        <span className={`border-2 w-4 h-4 flex items-center justify-center ring-2 rounded dark:ring-offset-zinc-800 ring-offset-2 ${state[name] ? "bg-blue-500 ring-blue-500 border-blue-500" : "ring-gray-300 border-transparent dark:border-zinc-800"}`}>
          {state[name] && <FiCheck className="text-white" />}
        </span>
        {label}
      </label>
    </div>
  );
}

export default CheckBox;