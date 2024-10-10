import React from 'react'
import GalleryImages from '../components/GalleryImages'
const Gallery = () => {
  return (
    <div className="w-full mt-14 h-full bg-gradient-to-r from-[#144c8b] to-[#0069e2]">
    <div className="  max-w-[1240px]  mx-auto mt-0 pt-10">
    <h1 className="md:text-6xl  text-[2.5rem] text-[#ffffff] font-bold font-grotesk tracking-tighter md:pt-8 text-center p-4 md:p-0"> Events Snapshots</h1>

         <div className=" px-4 md:px-0 columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
          {
            GalleryImages.map((src, index)=>(
              <div key={index} className="mb-4 break-inside-avoid ">
                <img src={src} alt="Events-img"  className="w-full object-cover rounded-lg  hover:scale-105 cursor-pointer  duration-500 ease-in-out"/>
              </div>
            ))
            }
         </div>
    </div></div>
  )
}

export default Gallery
