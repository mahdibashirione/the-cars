import { useState } from "react";

const Gallery = ({ images }) => {

  const [photo, setPhoto] = useState(images)
  const [indexViewPhoto, setIndexViewPhoto] = useState(0);

  const handleViewPhoto = (value) => {
    setIndexViewPhoto(value)
  }

  return (
    <div className="w-full md:h-[] gap-y-2 md:gap-y-4 flex flex-col justify-between max-w-[400px] md:max-w-none">
      <div className="w-full cursor-pointer h-56 max-h-[14rem] md:h-full md:max-h-[13rem] lg:max-h-[17rem] xl:max-h-[16.5rem] bg-white dark:bg-zinc-800 shadow overflow-hidden rounded-[10px] flex items-center justify-center">
        <img className="w-full h-full object-cover" alt="image-car" src={images[indexViewPhoto].src} />
      </div>
      <div className="w-full min-h-[4rem] lg:min-h-[5rem] gap-x-4 flex items-center justify-between">
        {images.map((image, index) => {
          return (
            <div key={image.id} onClick={() => handleViewPhoto(index)} className={`overflow-hidden w-full cursor-pointer ${indexViewPhoto === index ? "ring-4" : "ring-0"} ring-offset-2 dark:ring-offset-zinc-900 max-w-[110px] dark:bg-zinc-800 mt-2 md:mt-0 h-16 lg:h-20 rounded-lg bg-zinc-500 shadow`}>
              <img className="w-full h-full object-cover" alt="image-car" src={image.src} />
            </div>
          )
        }).slice(0, 3)}
      </div>
    </div>
  );
}

export default Gallery;