import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState(null)

  const handleSubmit = () => {
    search && navigate(`/search/name=${search}`)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[492px] lg:border dark:border-zinc-900 lg:rounded-full lj flex gap-x-4">
      <div className="w-full border dark:border-zinc-900 lg:border-0 rounded-[10px] py-[14px] px-6 cursor-pointer flex items-center gap-x-2">
        <img src="/icons/Search.svg" alt="icon-search" />
        <input onChange={e => setSearch(e.target.value)} type="text" placeholder="search something here" className="dark:text-slate-400 outline-none w-full bg-transparent" />
      </div>
      <div className="border dark:border-zinc-900 lg:border-0 rounded-[10px] p-3 lg:pr-6 flex items-center">
        <span className="w-6 cursor-pointer">
          <img className="w-full object-cover" src="/icons/filter.svg" alt="icon-filter" />
        </span>
      </div>
    </form>
  );
}

export default SearchBox;