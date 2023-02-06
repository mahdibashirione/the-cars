import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../server/server";
import ProductCard from "./ProductCard";
import WrapperNotification from "../HOC/wrapperNotification";
import SkelectProductCard from "./skeletLoading/SkeletProductCard";

const Slider = ({ title, byFilter, error, success }) => {

  const [data, setData] = useState(false)

  useEffect(() => {
    const carSport = server.filter(car => car.type === byFilter).slice(0, 4)
    setData(carSport)
  }, [])

  return (
    <section className="w-full">
      <article className="w-full container">
        {/*Title & View All*/}
        <div className="w-full flex items-center justify-between mb-5 lg:mb-[30px] px-6">
          <span className="text-gray-500 text-[14px] lg:text-base select-none">{title}</span>
          <Link to="/" className="text-blue-500 text-[12px] lg:text-base">View All</Link>
        </div>
        {/*Products*/}
        <div className="w-full relative pb-8">
          <div className="px-6 pr-24 lg:pr-6 gap-4 overflow-x-scroll grid grid-cols-[260px,260px,260px,260px] xl:grid-cols-4">
            {data ? data.map(car => <ProductCard handleError={error} handleSuccess={success} key={car.id} data={car} />) : <SkelectProductCard />}
          </div>
          <span className="block lg:hidden h-full absolute w-14 z-10 right-0 top-0 bg-gradient-to-l from-[#f6f7f9] dark:from-zinc-900 "></span>
        </div>
      </article>
    </section>
  );
}

export default WrapperNotification(Slider);