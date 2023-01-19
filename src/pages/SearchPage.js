import { useEffect, useState } from "react";
import { FiChevronDown, FiFilter } from "react-icons/fi"
import ProductCard from "../components/ProductCard";
import { server } from "../server/server";

const SearchPage = () => {

  const [cars, setCars] = useState(null)
  const [data, setData] = useState({
    sort: "Best Seller",
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

  return (
    <section className="w-full container grid grid-cols-1 grid-rows-[60px,1fr] md:grid-cols-6 lg:grid-cols-12 gap-3 md:py-4">
      {/* Filter */}
      <article className="hidden min-h-full md:block col-span-1 md:row-span-full md:col-span-2 lg:col-span-3">
        <div className="text-slate-400 w-full md:sticky top-4 p-4 flex flex-col gap-y-4 md:bg-white md:dark:bg-zinc-800 rounded-lg md:shadow">
          <div className="w-full flex flex-col gap-y-1">
            <span className="text-blue-500 select-none mb-1 flex justify-between w-full">Type<FiChevronDown className="text-xl" /></span>
            <span className="cursor-pointer text-sm pl-2">sport</span>
            <span className="cursor-pointer text-sm pl-2">classic</span>
            <span className="cursor-pointer text-sm pl-2">sport</span>
            <span className="cursor-pointer text-sm pl-2">classic</span>
          </div>
          <div className="w-full flex flex-col gap-y-1">
            <span className="text-blue-500 select-none mb-1 flex justify-between w-full">people<FiChevronDown className="text-xl" /></span>
            <span className="cursor-pointer text-sm pl-2">2 any</span>
            <span className="cursor-pointer text-sm pl-2">3 any</span>
            <span className="cursor-pointer text-sm pl-2">4 any</span>
            <span className="cursor-pointer text-sm pl-2">8 any</span>
          </div>
        </div>
      </article>

      {/* Sort */}
      <article className="col-span-1 whitespace-nowrap row-span-1 md:col-span-4 lg:col-span-9 text-sm lg:text-base">
        <ul className="min-w-full h-full overflow-x-scroll px-4 text-slate-400 flex items-center justify-end gap-x-2 md:bg-white md:dark:bg-zinc-800 rounded-lg md:shadow">
          {sortOptions.map(item => {
            return (
              <li
                onClick={e => setData({ ...data, sort: item.value })}
                className={`${data.sort === item.value ? "border-blue-500 text-blue-500" : "border-slate-400"} bg-white dark:bg-zinc-800 duration-300 border rounded-full md:rounded-none md:border-0 py-1.5 px-3 cursor-pointer`}>
                {item.title}
              </li>
            )
          })}
          {/* iconSort */}
          <li className="bg-white dark:bg-zinc-800 rounded-lg p-3 shadow md:shadow-none"><FiFilter className="text-2xl text-blue-500" /></li>
        </ul>
      </article>

      {/* Products */}
      <article className="col-span-1 row-span-2 md:col-span-4 lg:col-span-9 px-4 md:px-0 bg-transparent">
        <div className="w-full h-full gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-lg">
          {cars ? cars.map(car => <ProductCard key={car.id} data={car} />) : "Loading..."}
        </div>
      </article>
    </section>
  );
}

export default SearchPage;