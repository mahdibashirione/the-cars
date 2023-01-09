//import { Fi } from ""

import SearchBox from "./SearchBox";


const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="w-full container p-4 flex justify-between items-center flex-wrap gap-y-8">
        {/*logo*/}
        <div className="w-[108px] lg:w-36"><img className="w-full object-cover" src="/images/Logo.svg" alt="origin-logo" /></div>
        <div className="w-1/2 hidden lg:block">
          <SearchBox />
        </div>
        {/*options*/}
        <div className="h-full flex items-center gap-x-5">
          <div className="hidden hover:bg-blue-200 hover:border-blue-200 duration-300 w-11 h-11 lg:flex items-center justify-center rounded-full border-2 cursor-pointer">
            <img src="/icons/Likes.svg" alt="icon-Likes" />
          </div>
          <div className="hidden hover:bg-blue-200 hover:border-blue-200 duration-300 relative w-11 h-11 lg:flex items-center justify-center rounded-full border-2 cursor-pointer">
            <img src="/icons/Notification.svg" alt="icon-Notification" />
            <span className="w-3 h-3 rounded-full bg-red-500 absolute top-0 right-0"></span>
          </div>
          <div className="hidden hover:bg-blue-200 hover:border-blue-200 duration-300 w-11 h-11 lg:flex items-center justify-center rounded-full border-2 cursor-pointer">
            <img src="/icons/Setting.svg" alt="icon-setting" />
          </div>
          <div className="w-7 h-7 lg:w-11 lg:h-11 bg-zinc-900 rounded-full overflow-hidden"></div>
        </div>
        <div className="w-full lg:hidden">
          <SearchBox />
        </div>
      </div>
    </header>
  );
}

export default Header;