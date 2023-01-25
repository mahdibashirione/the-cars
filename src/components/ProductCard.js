import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { likeAction, unLikeAction } from "../redux/liked/likedActions";

const ProductCard = ({ data }) => {

  const likeState = useSelector(store => store.liked)
  const dispatch = useDispatch()

  const isLike = likeState.findIndex(car => car.id === data.id)

  return (
    <div className="bg-white dark:bg-zinc-800 shadow flex flex-col items-center rounded-[10px] pt-[19px] p-4 col-span-1 lg:w-auto">
      <div className="w-full flex items-center justify-between">
        <span className="lg:text-xl dark:text-white select-none">{data.name}</span>
        {isLike >= 0 ? <button onClick={() => dispatch(unLikeAction({ id: data.id }))} >
          <FcLike className="text-2xl mb-2" />
        </button> :
          <button onClick={() => dispatch(likeAction({ ...data }))} >
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
          <div className="w-4 lg:w-5 h-4 lg:h-5"><img className="w-full object-cover" src="/icons/Gas.svg" alt="icon-gas-station" /></div>
          <span className="text-gray-500 text-[12px] lg:text-sm">{data.liter}L</span>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="w-4 lg:w-5 h-4 lg:h-5"><img className="w-full object-cover" src="/icons/Manual.svg" alt="icon-Manual" /></div>
          <span className="text-gray-500 text-[12px] lg:text-sm">Manual</span>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="w-4 lg:w-5 h-4 lg:h-5"><img className="w-full object-cover" src="/icons/People.svg" alt="icon-People" /></div>
          <span className="text-gray-500 text-[12px] lg:text-sm">{data.anyPeople}People</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="lg:text-xl select-none flex items-center font-bold dark:text-white">${data.price}/<p className="text-[12px] text-gray-500">day</p></span>
        <Link to={`/rental/${data.name}/${data.id}`} state={{ id: data.id }} className="hover:scale-95 outline-none duration-300 text-[12px] py-3 px-4 rounded lg:text-base text-white bg-blue-500">Rent Now</Link>
      </div>
    </div >
  )
}

export default ProductCard;