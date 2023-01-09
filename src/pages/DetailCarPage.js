import DetailCar from "../components/DetailCar";
import Gallery from "../components/Gallery";
import { FiChevronDown } from "react-icons/fi"


const DetailCarPage = () => {
  return (
    <section className="w-full">
      <div className="w-full container p-5">
        <article className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 xl:w-1/3 flex justify-center"><Gallery /></div>
          <div className="w-full md:w-1/2 xl:w-2/3 bg-white rounded-[10px] p-4 lg:p-5"><DetailCar /></div>
        </article>
        <article className="w-full p-4 lg:p-6 bg-white rounded-[10px] mb-8 lg:mb-10 mt-8">
          {/*Title*/}
          <div className="w-full flex items-center gap-x-4 select-none">
            <h2 className="font-bold lg:text-xl">Reviews</h2>
            <span className="bg-blue-500 text-white text-sm lg:text-base py-1 rounded px-4">13</span>
          </div>
          {/*Users*/}

          {/*BTN Show All*/}
          <button className="text-sm lg:text-base mt-5 text-gray-400 mx-auto flex gap-x-2 items-center justify-center">
            Show All
            <FiChevronDown className="text-lg" />
          </button>
        </article>
      </div>
    </section>
  );
}

export default DetailCarPage;