import { Link } from "react-router-dom";

const DetailCar = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-4 lg:mb-9">
        <h2 className="text-xl lg:text-2xl font-bold select-none">NissanGT-68</h2>
        <button className="w-5 h-5"><img className="w-full object-cover" src="/icons/Heart.svg" alt="icon-like" /></button>
      </div>
      <p className="text-sm lg:text-base text-gray-500 select-none">
        NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
      </p>
      <div className="w-full  gap-y-8 flex flex-wrap mt-4 lg:mt-8 select-none">
        <div className="w-1/2 pr-4 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Type Car</span>
          <p className="text-[12px] lg:text-sm text-gray-500">Sport</p>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Capacity</span>
          <p className="text-[12px] lg:text-sm text-gray-500">2 Person</p>
        </div>
        <div className="w-1/2 pr-4 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Steering</span>
          <p className="text-[12px] lg:text-sm text-gray-500">Manual</p>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Gasoline</span>
          <p className="text-[12px] lg:text-sm text-gray-500">70L</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6 lg:mt-8">
        <div>
          <span className="lg:text-xl flex items-center font-bold">$99.00/<p className="text-[12px] text-gray-500">day</p></span>
        </div>
        <Link to="/" className="hover:scale-95 outline-none duration-300 text-[12px] py-3 px-4 rounded lg:text-base text-white bg-blue-500">Rent Now</Link>
      </div>
    </div>
  );
}

export default DetailCar;