import { useState } from "react";
import { Link } from "react-router-dom";





const Slider = () => {

  const [data, setData] = useState([
    { id: 1, type: "sport", name: "Koenigsegg", liter: "90", anyPeople: "2", price: "99.00" },
    { id: 2, type: "sport", name: "NissanGT-R", liter: "80", anyPeople: "2", price: "80.00" },
    { id: 3, type: "sport", name: "Rolls-Royce", liter: "70", anyPeople: "4", price: "96.00" },
    { id: 4, type: "sport", name: "Koenigsegg", liter: "90", anyPeople: "2", price: "99.00" },
  ])

  const ProductCard = ({ data }) => {
    return (
      <div to="/" className="bg-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 w-60 min-w-[240px] lg:w-[304px] lg:min-w-[304px] mb-8 lg:mb-10">
        <div className="w-full flex items-center justify-between">
          <span className="lg:text-xl">{data.name}</span>
          <button className="w-5"><img className="w-full object-cover" src="/icons/Heart.svg" alt="icon-like" /></button>
        </div>
        <span className="block w-full text-[12px] lg:text-sm text-gray-500 mt-1">Sport</span>
        <div className="w-full max-w-[220px] h-24 mt-8 lg:mt-16"><img className="w-full object-cover" alt={`photo-${data.name}`} src={`/images/${data.name}.svg`} /></div>
        <div className="w-full flex lg:mt-4 items-center justify-between select-none mb-7 lg:mb-5">
          <div className="flex items-center gap-x-1">
            <div className="w-4 lg:w-6 h-4 lg:h-6"><img className="w-full object-cover" src="/icons/Gas.svg" alt="icon-gas-station" /></div>
            <span className="text-gray-500 text-[12px] lg:text-sm">{data.liter}L</span>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="w-4 lg:w-6 h-4 lg:h-6"><img className="w-full object-cover" src="/icons/Manual.svg" alt="icon-Manual" /></div>
            <span className="text-gray-500 text-[12px] lg:text-sm">Manual</span>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="w-4 lg:w-6 h-4 lg:h-6"><img className="w-full object-cover" src="/icons/People.svg" alt="icon-People" /></div>
            <span className="text-gray-500 text-[12px] lg:text-sm">{data.anyPeople}People</span>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <span className="lg:text-xl flex items-center font-bold">${data.price}/<p className="text-[12px] text-gray-500">day</p></span>
          </div>
          <Link to="/" className="hover:scale-95 outline-none duration-300 text-[12px] py-3 px-4 rounded lg:text-base text-white bg-blue-500">Rent Now</Link>
        </div>
      </div>
    )
  }

  return (
    <section className="w-full">
      <article className="w-full container">
        {/*Title & View All*/}
        <div className="w-full flex items-center justify-between mb-5 lg:mb-[30px] px-6">
          <span className="text-gray-500 text-[14px] lg:text-base select-none">Popular Car</span>
          <Link to="/" className="text-blue-500 text-[12px] lg:text-base">View All</Link>
        </div>
        {/*Products*/}
        <div className="w-full relative">
          <div className="px-6 flex gap-x-4 overflow-x-scroll">
            {data.map(car => <ProductCard key={car.id} data={car} />)}
          </div>
          <span className="block lg:hidden h-full absolute w-28 z-10 right-0 top-0 bg-gradient-to-l from-white"></span>
        </div>
      </article>
    </section>
  );
}

export default Slider;