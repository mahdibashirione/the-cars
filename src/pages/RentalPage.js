const RentalPage = () => {
  return (
    <section className="w-full container grid grid- grid-cols-1 md:grid-cols-5 xl:grid-cols-12 gap-4 p-4">

      <article className="col-span-1 md:col-span-2 xl:col-span-4 md:min-h-full">
        <div className="bg-white md:sticky md:top-4 select-none w-full dark:text-white dark:bg-zinc-800 shadow p-4 rounded-[10px]">
          <span className="md:text-lg">Rental Summery</span>
          <p className="text-slate-500 text-sm mt-2 mb-6">
            Price may change depending on the length of the
            rental and the price of your rental car.
          </p>
          <div className="w-full flex items-center gap-x-2 mb-6">
            <div className="w-1/3 h-20 flex items-center justify-center rounded-md shadow bg-blue-500">
              <img className="w-full object-cover" alt="NissanGT-R" src="/images/NissanGT-R.svg" />
            </div>
            <div className="w-2/3 flex flex-col">
              <span className="text-xl font-bold">NissanGT-R</span>
              <div className="w-full h-3 mt-2 flex items-center overflow-hidden gap-x-2">
                <img className="w-1/3 md:w-1/2 lg:w-1/3 object-cover" alt="6Stars" src="https://freesvg.org/img/16231558095-star-rating.png" />
                <span className="text-sm text-gray-500">440+ Reviewer</span>
              </div>
            </div>
          </div>
          <div className="w-full border-t dark:border-slate-500 pt-6 flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Subtotal</span>
              <span className="text-sm ">$80.00</span>
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
                <span className="font-bold text-xl">$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="col-span-1 md:col-span-3 h-screen xl:col-span-8 bg-white dark:bg-zinc-800 rounded-[10px] shadow p-4"></article>

    </section>
  );
}

export default RentalPage;