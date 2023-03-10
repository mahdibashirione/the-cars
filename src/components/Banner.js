import { Button } from "@mui/material";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { scale: 0, opacity: 1 },
    visible: {
      scale: 1,
      opacity: 1,
    }
  };

  const image = {
    hidden: { scale: 1, opacity: 0, x: 100 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0
    }
  };

  const BannerCard = ({ detail }) => {
    return (
      <motion.aside initial="hidden" animate="visible" variants={container} className="z-10 relative w-full bg-blue-600 dark:bg-blue-900 min-w-[325px] min-h-full rounded-[10px] overflow-hidden">
        <div className="w-full h-full relative shadow p-4 text-white">
          <motion.span variants={item} className="block w-[70%] xl:w-1/2 lg:text-3xl">{detail.title}</motion.span>
          <motion.span variants={item} className="block w-[80%] xl:w-1/2 text-[12px] lg:text-base mt-3 text-slate-400">{detail.caption}</motion.span>
          <motion.button variants={item} className="md:hover:scale-95 duration-300 block mt-7 lg:mt-10">
            <Link to={detail.url} className="text-sm py-3 px-6 lg:text-base rounded bg-blue-800 dark:bg-blue-700 shadow">Rental Car</Link>
          </motion.button>
          <motion.div variants={image} className="w-full max-w-[150px] md:max-w-[180px] lg:max-w-[250px] xl:max-w-[300px] absolute bottom-4 right-4">
            <img className="w-full object-cover" alt="image-car" src={detail.imageCar} />
          </motion.div>
        </div>
        <motion.div variants={container} initial="hidden" animate="visible" className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"  >
          <motion.div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] dark:from-zinc-800/30 to-[#C4C4C400]" ></motion.div>
          <div className="flex gap-x-2 h-full w-1/3">
            <motion.div variants={item} className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] dark:from-zinc-800/30 to-[#C4C4C400]"></motion.div>
            <motion.div variants={item} className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] dark:from-zinc-800/30 to-[#C4C4C400]"></motion.div>
          </div>
          <motion.div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] dark:from-zinc-800/30 to-[#C4C4C400]"></motion.div>
        </motion.div>
      </motion.aside>
    )
  }

  return (
    <section className="w-full">
      <article className="w-full container flex gap-x-4 lg:gap-x-8 p-6 overflow-x-scroll min-h-[260px] lg:h-[360px]">
        {data.map(banner => <BannerCard key={banner.id} detail={banner} />)}
      </article>
    </section>
  );
}

export default Banner;