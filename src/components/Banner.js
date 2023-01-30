import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

  const [data, setData] = useState([
    {
      id: 1,
      title: "The Best Platform for Car Rental",
      caption: "Ease of doing a car rental safely and reliably. Of course at a low price.",
      url: "/",
      imageCar: "/images/Koenigsegg.svg",
      background: "/images/banner1.jpg"
    },
    {
      id: 2,
      title: "Easy way to rent a car at a low price",
      caption: "Providing cheap car rental services and safe and comfortable facilities.",
      url: "/",
      imageCar: "/images/NissanGT-R.svg",
      background: "/images/banner2.jpg"
    },
  ])

  const BannerCard = ({ detail }) => {
    return (
      <aside className="w-full bg-blue-600 dark:bg-blue-900  min-w-[325px] min-h-full rounded-[10px] overflow-hidden">
        <div className="w-full h-full relative shadow p-4 text-white">
          <span className="block w-[70%] xl:w-1/2 lg:text-3xl">{detail.title}</span>
          <span className="block w-[80%] xl:w-1/2 text-[12px] lg:text-base mt-3 text-slate-400">{detail.caption}</span>
          <button className="md:hover:scale-95 duration-300 block mt-7 lg:mt-10">
            <Link to={detail.url} className="text-sm py-3 px-6 lg:text-base rounded bg-blue-500 shadow">Rental Car</Link>
          </button>
          <div className="w-full max-w-[150px] md:max-w-[180px] lg:max-w-[250px] xl:max-w-[300px] absolute bottom-4 right-4">
            <img className="w-full object-cover" alt="image-car" src={detail.imageCar} />
          </div>
        </div>
      </aside>
    )
  }

  return (
    <section className="w-full">
      <article className="w-full container flex gap-x-4 lg:gap-x-8 p-6 overflow-x-scroll min-h-[240px] lg:h-[360px]">
        {data.map(banner => <BannerCard key={banner.id} detail={banner} />)}
      </article>
    </section>
  );
}

export default Banner;