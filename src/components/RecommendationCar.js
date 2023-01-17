import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { server } from "../server/server";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { useLike, useLikeDispatch } from "../context/likes/LikesProvider";

const RecommendationCar = () => {

  const [data, setData] = useState(false)
  const likeState = useLike()
  const likeDispatch = useLikeDispatch()

  useEffect(() => {
    setData(server)
  }, [])

  const ProductCard = ({ data }) => {

    const isLike = likeState.findIndex(car => car.id === data.id)

    return (
      <div className="bg-white dark:bg-zinc-800 dark:text-white shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 col-span-1">
        <div className="w-full flex items-center justify-between">
          <span className="lg:text-xl">{data.name}</span>
          {isLike >= 0 ? <button onClick={() => likeDispatch({ type: "Un_Like", payload: data })} >
            <FcLike className="text-2xl mb-2" />
          </button> :
            <button onClick={() => likeDispatch({ type: "Like", payload: data })} >
              <FiHeart className="text-2xl text-gray-400 mb-2" />
            </button>}
        </div>
        <span className="block w-full text-[12px] lg:text-sm text-gray-500 mt-1">{data.type}</span>
        <div className="w-full flex lg:flex-col">
          {/*Image Car*/}
          <Link to={`/car/${data.name}/${data.id}`} state={{ name: data.name, id: data.id }} className="w-full flex items-center justify-center">
            <div className="w-full max-w-[220px] h-24 mt-8 lg:mt-16"><img className="w-full object-cover" alt={`photo-${data.name}`} src={data.images[0].src} /></div>
          </Link>
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
          {data && data.map(car => <ProductCard key={car.id} data={car} />)}
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