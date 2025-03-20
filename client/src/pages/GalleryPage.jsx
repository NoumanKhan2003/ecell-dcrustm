import React,{useEffect} from "react";
import GalleryImages from "../components/GalleryImages";
const Gallery = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full mt-14 h-full bg-gradient-to-r from-[#cfe1f6] to-[#77b7ff]">
      <div className="  max-w-[1240px]  mx-auto mt-0 pt-5">
        <h1 className="md:text-6xl  text-[2.5rem] text-[#232393] font-bold font-grotesk tracking-tighter text-center p-2 md:p-0">
          {" "}
          Events Snapshots
        </h1>

        <div className=" px-4 md:px-2 columns-1 sm:columns-2 lg:columns-3 py-6 gap-4">
          {GalleryImages.map((src, index) => (
            <div key={index} className="mb-4 break-inside-avoid ">
              <img
                src={src}
                alt="Events-img"
                loading="lazy"
                className="w-full   object-contain rounded-lg  hover:scale-105 cursor-pointer  duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
