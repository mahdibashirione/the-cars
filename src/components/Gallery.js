const Gallery = ({ images }) => {
  return (
    <div className="w-full md:h-[] gap-y-2 md:gap-y-4 flex flex-col justify-between max-w-[400px] md:max-w-none">
      <div className="w-full h-56 md:h-full bg-white shadow overflow-hidden rounded-[10px] flex items-center justify-center p-6">
        <img className="w-full object-cover" alt="image-car" src={images[0].src} />
      </div>
      <div className="w-full min-h-[4rem] lg:min-h-[5rem] gap-x-4 flex items-center justify-between overflow-x-scroll">
        {images.map(image => {
          return (
            <div key={image.id} className="w-full max-w-[110px] flex items-center justify-center mt-2 md:mt-0 h-16 lg:h-20 rounded-lg bg-zinc-500 shadow overflow-hidden p-1">
              <img className="w-full object-cover" alt="image-car" src={image.src} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Gallery;