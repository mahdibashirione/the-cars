import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {

  const navigate = useNavigate()
  const [search, setSearch] = useState(null)

  const handleSubmit = () => {
    search && navigate(`/search?name=${search}`)
  }

  useEffect(() => {
    setSearch(null)
  }, [])

  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-[400px] border border-gray-300 dark:border-zinc-600 rounded-[10px] lj flex gap-x-4 px-4">
      <img src="/icons/Search.svg" alt="icon-search" />
      <input onChange={e => setSearch(e.target.value)} type="text" placeholder="search something here" className="dark:text-slate-400 py-3 outline-none w-full bg-transparent" />
    </form>
  );
}

export default SearchBox;