import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom"

const NotFoundPage = () => {

  useEffect(() => {
    document.title = "Not Found"
  }, [])

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-primary relative bg-gradient-to-b z-10 py-[150px] from-white via-blue-500 to-white dark:from-zinc-800 dark:via-blue-900 dark:to-zinc-800 ">
      <motion.div variants={container} initial="hidden" animate="visible" className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center select-none">
              <motion.h2 variants={item} className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]" >
                404
              </motion.h2>
              <motion.h4 variants={item} className="mb-3 text-[22px] font-semibold leading-tight text-white">
                Oops! That page can’t be found
              </motion.h4>
              <motion.p variants={item} className="mb-8 text-lg text-white">
                The page you are looking for it maybe deleted
              </motion.p>
              <Link to="/">
                <motion.span variants={item} className="md:hover:scale-105 duration-200 inline-block rounded-lg border border-white px-8 py-3 text-center text-base text-zinc-800 bg-white shadow" >
                  Go To Home
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={container} initial="hidden" animate="visible" className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"  >
        <motion.div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] dark:from-zinc-800 to-[#C4C4C400]" ></motion.div>
        <div className="flex h-full w-1/3">
          <motion.div variants={item} className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] dark:from-zinc-800 to-[#C4C4C400]"></motion.div>
          <motion.div variants={item} className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] dark:from-zinc-800 to-[#C4C4C400]"></motion.div>
        </div>
        <motion.div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] dark:from-zinc-800 to-[#C4C4C400]"></motion.div>
      </motion.div>
    </section>
  )
}

export default NotFoundPage;