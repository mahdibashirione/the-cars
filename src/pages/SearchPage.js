import { Backdrop, backdropClasses } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi"
import ProductCard from "../components/ProductCard";
import { server } from "../server/server";

const SearchPage = () => {

  const filter = useRef()
  const backDrop = useRef()
  const [openFilter, setOpenFilter] = useState(false)
  const [cars, setCars] = useState(null)
  const [data, setData] = useState({
    sort: "Best Seller",
    type: "sport",
    people: "8 any",
  })

  const sortOptions = [
    { title: "Expensive", value: "Expensive" },
    { title: "Inexpensive", value: "Inexpensive" },
    { title: "Popular", value: "Popular" },
    { title: "Best Seller", value: "Best Seller" },
  ]

  useEffect(() => {
    setCars(server)
  }, [])

  const handleSelectedFilter = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleFilterMobile = () => {
    const filterClasses = [...filter.current.classList]

    if (filterClasses.includes("top-[calc(100%-55px)]")) {
      filter.current.classList.replace("top-[calc(100%-55px)]", "bottom-0")
      backDrop.current.classList.replace("top-full", "top-0")
      setOpenFilter(true)

    } else {
      filter.current.classList.replace("bottom-0", "top-[calc(100%-55px)]")
      backDrop.current.classList.replace("top-0", "top-full")
      setOpenFilter(false)
    }
  }

  return (
    <section className="w-full container grid grid-cols-1 grid-rows-[60px,1fr] md:grid-cols-6 lg:grid-cols-12 gap-3 md:py-4">
      {/* bakDrop */}
      <span ref={backDrop} className="fixed top-full md:hidden h-full duration-300 w-full z-[5] bg-zinc-800/70"></span>

      {/* Filter */}
      <article ref={filter} className="fixed z-10 top-[calc(100%-55px)] border-t-2 border-blue-500 duration-300 w-full rounded-t-xl md:border-t-0 md:rounded-none md:min-h-full bg-white md:block md:bg-transparent md:static md:row-span-full md:col-span-2 lg:col-span-3 xl:col-span-2">
        <div className="text-slate-400 w-full md:sticky top-4 p-4 flex flex-col gap-y-4 md:bg-white md:dark:bg-zinc-800 rounded-lg md:shadow">
          <div className="w-full md:hidden flex justify-center items-center ">
            <button onClick={handleFilterMobile} className={`${openFilter === true ? "text-red-500" : "text-blue-500"} flex justify-center items-center gap-x-1`}>
              {openFilter === true ? "close" : "more"} Filter
              <FiChevronUp className={`text-xl duration-300 ${openFilter === true ? "rotate-180" : "rotate-0"}`} />
            </button>
          </div>
          {/* type */}
          <div className="w-full flex flex-col gap-y-1">
            <span className="text-blue-500 select-none mb-1 flex justify-between w-full">Type<FiChevronDown className="text-xl" /></span>
            <button onClick={e => handleSelectedFilter(e)} name="type" value="sport" className={`${data.type === "sport" && "text-green-500"} text-left cursor-pointer text-sm pl-2`}>sport</button>
            <button onClick={e => handleSelectedFilter(e)} name="type" value="classic" className={`${data.type === "classic" && "text-green-500"} text-left cursor-pointer text-sm pl-2`}>classic</button>
          </div>
          {/* people */}
          <div className="w-full flex flex-col gap-y-1">
            <span className="text-blue-500 select-none mb-1 flex justify-between w-full">people<FiChevronDown className="text-xl" /></span>
            <button onClick={e => handleSelectedFilter(e)} name="people" value="2 any" className={`${data.people === "2 any" && "text-green-500"} text-left cursor-pointer text-sm pl-2`}>2 any</button>
            <button onClick={e => handleSelectedFilter(e)} name="people" value="3 any" className={`${data.people === "3 any" && "text-green-500"} text-left cursor-pointer text-sm pl-2`}>3 any</button>
            <button onClick={e => handleSelectedFilter(e)} name="people" value="4 any" className={`${data.people === "4 any" && "text-green-500"} text-left cursor-pointer text-sm pl-2`}>4 any</button>
            <button onClick={e => handleSelectedFilter(e)} name="people" value="8 any" className={`${data.people === "8 any" && "text-green-500"} text-left cursor-pointer text-sm pl-2`}>8 any</button>
          </div>
        </div>
      </article>

      {/* Sort */}
      <article className="col-span-1 whitespace-nowrap row-span-1 md:col-span-4 lg:col-span-9 xl:col-span-10 text-sm lg:text-base">
        <ul className="min-w-full h-full overflow-x-scroll px-4 text-slate-400 flex items-center justify-end gap-x-2 md:bg-white md:dark:bg-zinc-800 rounded-lg md:shadow">
          {sortOptions.map(item => {
            return (
              <li
                onClick={e => setData({ ...data, sort: item.value })}
                className={`${data.sort === item.value ? "border-green-500 text-green-500" : "border-slate-400"} select-none bg-white dark:bg-zinc-800 duration-300 border rounded-full md:rounded-none md:border-0 py-1.5 px-3 cursor-pointer`}>
                {item.title}
              </li>
            )
          })}
          {/* iconSort */}
          <li className="bg-white dark:bg-zinc-800 rounded-lg p-3 shadow md:shadow-none"><FiFilter className="text-2xl text-blue-500" /></li>
        </ul>
      </article>

      {/* Products */}
      <article className="col-span-1 row-span-2 md:col-span-4 lg:col-span-9 px-4 md:px-0 xl:col-span-10 bg-transparent">
        <div className="w-full h-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-lg">
          {cars ? cars.map(car => <ProductCard key={car.id} data={car} />) : "Loading..."}
          {cars ? cars.map(car => <ProductCard key={car.id} data={car} />) : "Loading..."}
        </div>
      </article>
    </section>
  );
}

export default SearchPage;