import { Rating } from "@mui/material";

const BoxDetailRental = ({ data, lengthSteps }) => {
  return (
    <div className="bg-white max-w-[420px] lg:max-w-[900px] mx-auto lg:flex-row flex flex-col select-none w-full dark:text-white dark:bg-zinc-800 shadow p-4 rounded-[10px]">
      <div className="w-full flex flex-col justify-between lg:w-1/2">
        <div>
          <span className="md:text-lg flex items-center justify-between w-full lg:pr-4">
            Rental Summery
            <p className="text-slate-500 text-sm">Step 1 of {lengthSteps}</p>
          </span>
          <p className="text-slate-500 text-sm mt-2 mb-6">
            Price may change depending on the length of the
            rental and the price of your rental car.
          </p>
        </div>
        <div className="w-full flex items-center gap-x-2 mb-6 lg:mb-0">
          <div className="w-1/3 lg:w-1/3 h-20 flex items-center justify-center rounded-md shadow bg-blue-500">
            <img className="w-full object-cover" alt={data.name} src={data.images[0].src} />
          </div>
          <div className="w-2/3 flex flex-col">
            <span className="text-lg lg:text-xl font-bold">{data.name}</span>
            <div className="w-full mt-2 flex items-center overflow-hidden gap-x-2">
              <Rating name={`rating-${data.name}`} defaultValue={data.rating} readOnly size="small" />
              <span className="text-sm text-gray-500">440+ Reviewer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l lg:pl-4 dark:border-slate-500 pt-6 flex flex-col gap-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">Subtotal</span>
          <span className="text-sm ">${data.price}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">Tax</span>
          <span className="text-sm ">$0</span>
        </div>
        <div className="flex justify-between items-center px-4 py-2.5 rounded-lg bg-gray-200 dark:bg-zinc-700">
          <span className="text-sm text-slate-500">Apply promo code</span>
          <span className="text-sm ">Apply now</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold">Total Rental Price</span>
            <span className="text-sm text-slate-500">Overall price and includes rental discount</span>
          </div>
          <div className="h-full flex justify-center items-center">
            <span className="font-bold text-xl">${data.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxDetailRental;