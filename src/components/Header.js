import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BtnDarkMode from "./BtnDarkMode";
import BTNProfile from "./BTNProfile";
import SearchBox from "./SearchBox";


const Header = () => {

  const likeState = useSelector(store => store.liked)

  return (
    <header className="w-full bg-white dark:bg-zinc-800">
      <div className="w-full container p-4 flex justify-between items-center flex-wrap gap-y-4">
        {/*logo*/}
        <div className="w-[108px] lg:w-36"><img className="w-full object-cover" src="/images/Logo.svg" alt="origin-logo" /></div>
        <div className="w-1/2 hidden lg:block">
          <SearchBox />
        </div>
        {/*options*/}
        <div className="h-full flex items-center gap-x-2">
          <BtnDarkMode />
          <Link to="/likes" className="relative md:dark:hover:bg-blue-800/10 p-2 duration-300 w-14 lg:w-14 h-9 flex items-center justify-center rounded">
            <img src="/icons/Likes.svg" alt="icon-Likes" />
            {likeState.length > 0 ? <span className="bg-red-500 top-0.5 right-2 rounded-full text-[12px] w-4 h-4 flex items-center justify-center absolute text-white ">{likeState.length}</span>
              : <span className="bg-red-500 top-1.5 right-3 w-2 h-2 rounded-full absolute"></span>}
          </Link>
          <BTNProfile />
        </div>
        <div className="w-full lg:hidden">
          <SearchBox />
        </div>
      </div>
    </header >
  );
}

export default Header;