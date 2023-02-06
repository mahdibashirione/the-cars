import { Skeleton } from "@mui/material";

const SkelectProductCard = () => {
  return (
    <aside className="w-full flex justify-between">
      <div className="w-1/2">
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
        <Skeleton variant="text" sx={{ fontSize: '0.8rem' }} width="50%" />
      </div>
      <div className="w-1/2 flex items-start justify-end">
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="20%" />
      </div>
    </aside>
  );
}

export default SkelectProductCard;