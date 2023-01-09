const Gallery = () => {
  return (
    <div className="w-full md:h-full flex flex-col justify-between max-w-[400px] md:max-w-none">
      <div className="w-full h-56 md:h-52 lg:h-[270px] xl:h-60 bg-white overflow-hidden rounded-[10px] flex items-center justify-center p-6">
        <img className="w-full object-cover" alt="image-car" src="/images/NissanGT-R.svg" />
      </div>
      <div className="w-full gap-x-4 flex items-center justify-between">
        <div className="w-full flex items-center justify-center mt-2 md:mt-0 h-16 lg:h-20 xl:h-20 rounded-lg bg-white overflow-hidden p-1">
          <img className="w-full object-cover" alt="image-car" src="/images/NissanGT-R.svg" />
        </div>
        <div className="w-full flex items-center justify-center mt-2 md:mt-0 h-16 lg:h-20 xl:h-20 rounded-lg bg-white overflow-hidden p-1">
          <img className="w-full object-cover" alt="image-car" src="/images/NissanGT-R.svg" />
        </div>
        <div className="w-full flex items-center justify-center mt-2 md:mt-0 h-16 lg:h-20 xl:h-20 rounded-lg bg-white overflow-hidden p-1">
          <img className="w-full object-cover" alt="image-car" src="/images/NissanGT-R.svg" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;