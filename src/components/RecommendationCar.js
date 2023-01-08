import { Link } from "react-router-dom";
import { useState } from "react";





const RecommendationCar = () => {


  const [data, setData] = useState([
    { id: 1, type: "sport", name: "Koenigsegg", liter: "90", anyPeople: "2", price: "99.00" },
    { id: 2, type: "sport", name: "NissanGT-R", liter: "80", anyPeople: "2", price: "80.00" },
    { id: 3, type: "sport", name: "Rolls-Royce", liter: "70", anyPeople: "4", price: "96.00" },
    { id: 4, type: "sport", name: "Koenigsegg", liter: "90", anyPeople: "2", price: "99.00" },
  ])

  const ProductCard = ({ data }) => {
    return (
      <div to="/" className="bg-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 col-span-1">
        <div className="w-full flex items-center justify-between">
          <span className="lg:text-xl">{data.name}</span>
          <button className="w-5"><img className="w-full object-cover" src="/icons/Heart.svg" alt="icon-like" /></button>
        </div>
        <span className="block w-full text-[12px] lg:text-sm text-gray-500 mt-1">{data.type}</span>
        <div className="w-full flex lg:flex-col">
          {/*Image Car*/}
          <div className="w-full flex items-center justify-center">
            <div className="w-full max-w-[220px] h-24 mt-8 lg:mt-16"><img className="w-full object-cover" alt={`photo-${data.name}`} src={`/images/${data.name}.svg`} /></div>
          </div>
          {/*Detail Car*/}
          <div className="lg:w-full w-1/4 flex flex-col lg:flex-row lg:mt-4 lg:items-center justify-between select-none mb-7 lg:mb-5">
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
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <span className="lg:text-xl flex items-center font-bold">${data.price}/<p className="text-[12px] text-gray-500">day</p></span>
          </div>
          <Link to="/" className="hover:scale-95 outline-none duration-300 text-[12px] py-3 px-4 rounded lg:text-base text-white bg-blue-500">
            Rent Now
          </Link>
        </div>
      </div>
    )
  }



  return (
    <section className="w-full">
      <div className="w-full container">
        <span className="px-6 text-gray-500 text-[14px] lg:text-base select-none">Recommendation Car</span>
        <div className="w-full grid gap-4 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 pt-5">
          {data.map(car => <ProductCard key={car.id} data={car} />)}
        </div>
        {/*BTN Show More Cars*/}
        <div className="w-full py-12 lg:py-16 flex justify-center">
          <Link to="/" className="bg-blue-500 text-white hover:scale-95 duration-300 text-sm lg:text-base py-2.5 px-4 lg:px-5 rounded">Show more car</Link>
        </div>
      </div>
    </section>
  );
}

export default RecommendationCar;