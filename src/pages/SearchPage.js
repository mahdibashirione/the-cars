import { FiFilter } from "react-icons/fi"
import ProductCard from "../components/ProductCard";
import { server } from "../server/server";
import useFetch from "../Hook/useFetch";
import Accordion from "../components/common/Accordion";

const SearchPage = () => {

  const data = server;

  const options = {
    sort: [
      { title: "Expensive", value: "Expensive" },
      { title: "Inexpensive", value: "Inexpensive" },
      { title: "Popular", value: "Popular" },
      { title: "Best Seller", value: "Best Seller" },
    ],
    type: [
      { title: "sport", value: "sport" },
      { title: "classic", value: "classic" },
    ],
    people: [
      { title: "2 any", value: "2 any" },
      { title: "3 any", value: "3 any" },
      { title: "4 any", value: "4 any" },
      { title: "8 any", value: "8 any" },
    ],
  }

  return (
    <section className="w-full container grid grid-cols-1 grid-rows-[60px,1fr] md:grid-cols-6 lg:grid-cols-12 gap-3 md:py-4">
      <article className="md:hidden flex gap-x-3 col-span-1 row-span-1 px-4 pt-2">
        <button className="w-1/2 h-full flex items-center justify-center gap-4 bg-white dark:bg-zinc-800 shadow rounded-lg">
          <span className="text-bold select-none text-slate-500">Filter</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6.5H16" stroke="#3b82f6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6.5H2" stroke="#3b82f6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z" stroke="#3b82f6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 17.5H18" stroke="#3b82f6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8 17.5H2" stroke="#3b82f6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z" stroke="#3b82f6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button className="w-1/2 h-full flex items-center justify-center gap-4 bg-white dark:bg-zinc-800 shadow rounded-lg">
          <span className="text-bold select-none text-slate-500">Sort</span>
          <FiFilter className="text-2xl text-blue-500" />
        </button>
      </article>

      {/* Filter */}
      <article className="hidden bg-transparent md:block md:col-span-2 md:row-span-2 lg:col-span-3 xl:col-span-2">
        <div className="w-full sticky top-5 bg-white shadow rounded-[10px] dark:bg-zinc-800 overflow-hidden">
          <Accordion title={"Type"} description={options.type} />
          <Accordion title={"People"} description={options.people} />
        </div>
      </article>
      {/* Sort */}
      <article className="hidden md:flex col-span-1 whitespace-nowrap row-span-1 md:col-span-4 lg:col-span-9 xl:col-span-10 text-sm lg:text-base">
        <ul className="min-w-full h-full overflow-x-scroll px-4 text-slate-400 flex items-center justify-end gap-x-2 md:bg-white md:dark:bg-zinc-800 rounded-lg md:shadow">
          {options.sort.map(item => {
            return (
              <li
                key={item.title + "-" + "sort"}
                //onClick={e => setData({ ...data, sort: item.value })}
                className={`${data.sort === item.value ? "border-blue-500 text-blue-500" : "border-slate-400"} select-none bg-white dark:bg-zinc-800 duration-300 border rounded-full md:rounded-none md:border-0 py-1.5 px-3 cursor-pointer`}>
                {item.title}
              </li>
            )
          })}
          {/* iconSort */}
          <li className="bg-white dark:bg-zinc-800 rounded-lg p-3 shadow md:shadow-none"><FiFilter className="text-2xl text-blue-500" /></li>
        </ul>
      </article>
      {/* Products */}
      <article className="col-span-1 row-span-2 md:col-span-4 lg:col-span-9 xl:col-span-10 px-4 md:px-0 bg-transparent">
        <div className="w-full h-full gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-lg">
          {data && data.map(car => <ProductCard key={car.id} data={car} />)}
          {data && data.map(car => <ProductCard key={car.id} data={car} />)}
          {data && data.map(car => <ProductCard key={car.id} data={car} />)}
          {data && data.map(car => <ProductCard key={car.id} data={car} />)}
        </div>
      </article>
    </section>
  );
}

export default SearchPage;