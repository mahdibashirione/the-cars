import { Skeleton } from "@mui/material";

const SkelectProductCard = () => {
  return (
    <div className="animate-pulse col-span-1 w-full max-w-[280px] md:max-w-full mx-auto bg-slate-500/20 dark:bg-slate-500/10 rounded-[10px] p-3">
      <div className="min-w-full flex items-center justify-between mb-3">
        <span className="w-32 h-5 mx-auto bg-gray-500/20 block rounded mr-12"></span>
        <span className="w-10 h-4 mx-auto bg-gray-500/20 block rounded"></span>
      </div>
      <span className="w-full h-[150px] mx-auto bg-gray-500/20 block rounded"></span>
      <div className="flex gap-4 mt-3">
        <span className="w-full h-4 mx-auto bg-gray-500/20 block rounded"></span>
        <span className="w-full h-4 mx-auto bg-gray-500/20 block rounded"></span>
        <span className="w-full h-4 mx-auto bg-gray-500/20 block rounded"></span>
      </div>
      <div className="w-full flex items-center justify-between mt-6">
        <span className="w-20 h-5 mx-auto bg-gray-500/20 block rounded-full mr-12"></span>
        <span className="w-24 h-12 mx-auto bg-gray-500/20 block rounded"></span>
      </div>
    </div>
  );
}

export default SkelectProductCard;