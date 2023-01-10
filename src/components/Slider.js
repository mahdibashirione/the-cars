import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { useLike, useLikeDispatch } from "../context/likes/LikesProvider";
import { server } from "../server/server";





const Slider = ({ title, byFilter }) => {

  const [data, setData] = useState(false)
  const likeState = useLike()
  const likeDispatch = useLikeDispatch()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const carSport = server.filter(car => car.type === byFilter).slice(0, 4)
    setData(carSport)
  }, [])

  const ProductCard = ({ data }) => {
    const isLike = likeState.findIndex(car => car.id === data.id)

    return (
      <div className="bg-white dark:bg-zinc-800 shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 w-60 min-w-[240px] lg:col-span-1 lg:w-auto mb-8 lg:mb-10">
        <div className="w-full flex items-center justify-between">
          <span className="lg:text-xl dark:text-white">{data.name}</span>
          {isLike >= 0 ? <button onClick={() => likeDispatch({ type: "Un_Like", payload: data })} >
            <FcLike className="text-2xl mb-2" />
          </button> :
            <button onClick={() => likeDispatch({ type: "Like", payload: data })} >
              <FiHeart className="text-2xl text-gray-400 mb-2" />
            </button>}
        </div>
        <span className="block w-full text-[12px] lg:text-sm text-gray-500 mt-1">Sport</span>
        <Link to={`/car/${data.name}/${data.id}`} state={{ id: data.id, name: data.name }}
          className="w-full flex items-center max-w-[220px] h-40 lg:h-48">
          <img className="w-full justify-center object-cover" alt={`photo-${data.name}`} src={data.images[0].src} />
        </Link>
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
            <span className="lg:text-xl flex items-center font-bold dark:text-white">${data.price}/<p className="text-[12px] text-gray-500">day</p></span>
          </div>
          <Link to="/" className="hover:scale-95 outline-none duration-300 text-[12px] py-3 px-4 rounded lg:text-base text-white bg-blue-500">Rent Now</Link>
        </div>
      </div >
    )
  }

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
          <div className="px-6 pr-24 lg:pr-6 flex gap-x-4 overflow-x-scroll lg:grid lg:grid-cols-4">
            {data ? data.map(car => <ProductCard key={car.id} data={car} />) : <LoadingProductCard />}
          </div>
          <span className="block lg:hidden h-full absolute w-28 z-10 right-0 top-0 bg-gradient-to-l from-[#f6f7f9] dark:from-zinc-900"></span>
        </div>
      </article>
    </section>
  );
}

export default Slider;