import React from 'react'
import GalleryImages from '../components/GalleryImages'
const Gallery = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-gray-800 to-blue-900">
    <div className="  max-w-[1240px] mx-auto mt-0">
    <h1 className="text-6xl text-[#ffffff] font-bold tracking-tighter pt-8 text-center">Event gallery</h1>

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
