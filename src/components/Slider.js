import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { server } from "../server/server";
import ProductCard from "./ProductCard";

const Slider = ({ title, byFilter }) => {

  const [data, setData] = useState(false)

  useEffect(() => {
    const carSport = server.filter(car => car.type === byFilter).slice(0, 4)
    setData(carSport)
  }, [])

  const LoadingProductCard = () => {
    return (
      <>
        <div className="bg-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 w-60 min-w-[240px] lg:col-span-1 lg:w-auto mb-8 lg:mb-10">
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="50%" />
            </div>
            <div className="w-1/2 flex items-start justify-end">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="20%" />
            </div>
          </div>
          <div className="w-full lg:my-4 my-2">
            <Skeleton variant="rounded" height={170} width="100%" />
          </div>
          <div className="w-full lg:mb-4 mb-1 flex items-center justify-between">
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <Skeleton variant="rounded" height={40} width="70%" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 w-60 min-w-[240px] lg:col-span-1 lg:w-auto mb-8 lg:mb-10">
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="50%" />
            </div>
            <div className="w-1/2 flex items-start justify-end">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="20%" />
            </div>
          </div>
          <div className="w-full lg:my-4 my-2">
            <Skeleton variant="rounded" height={170} width="100%" />
          </div>
          <div className="w-full lg:mb-4 mb-1 flex items-center justify-between">
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <Skeleton variant="rounded" height={40} width="70%" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 w-60 min-w-[240px] lg:col-span-1 lg:w-auto mb-8 lg:mb-10">
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="50%" />
            </div>
            <div className="w-1/2 flex items-start justify-end">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="20%" />
            </div>
          </div>
          <div className="w-full lg:my-4 my-2">
            <Skeleton variant="rounded" height={170} width="100%" />
          </div>
          <div className="w-full lg:mb-4 mb-1 flex items-center justify-between">
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <Skeleton variant="rounded" height={40} width="70%" />
            </div>
          </div>
        </div>
        <div className="bg-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 w-60 min-w-[240px] lg:col-span-1 lg:w-auto mb-8 lg:mb-10">
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="50%" />
            </div>
            <div className="w-1/2 flex items-start justify-end">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="20%" />
            </div>
          </div>
          <div className="w-full lg:my-4 my-2">
            <Skeleton variant="rounded" height={170} width="100%" />
          </div>
          <div className="w-full lg:mb-4 mb-1 flex items-center justify-between">
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
            <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="25%" />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <Skeleton variant="rounded" height={40} width="70%" />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="w-full">
      <article className="w-full container">
        {/*Title & View All*/}
        <div className="w-full flex items-center justify-between mb-5 lg:mb-[30px] px-6">
          <span className="text-gray-500 text-[14px] lg:text-base select-none">{title}</span>
          <Link to="/" className="text-blue-500 text-[12px] lg:text-base">View All</Link>
        </div>
        {/*Products*/}
        <div className="w-full relative">
          <div className="px-6 pr-24 lg:pr-6 gap-4 overflow-x-scroll grid grid-cols-[260px,260px,260px,260px] xl:grid-cols-4">
            {data ? data.map(car => <ProductCard key={car.id} data={car} />) : <LoadingProductCard />}
          </div>
          <span className="block lg:hidden h-full absolute w-14 z-10 right-0 top-0 bg-gradient-to-l from-[#f6f7f9] dark:from-zinc-900 "></span>
        </div>
      </article>
    </section>
  );
}

export default Slider;