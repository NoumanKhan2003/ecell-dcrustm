import React from 'react'

const Card = ({imgURL,title,content}) => {
  
  return (
    <div  className="bg-white mb-5 w-[16rem]  h-[22rem]    md:w-[14rem] md:h-[20rem] lg:w-[16rem]  lg:h-[22rem]   flex flex-col items-center hover:scale-105 hover:shadow-lg border  border-gray-300 rounded-2xl   md:hover:scale-102 duration-300 overflow-hidden">
     
      <img className='w-[60%]  p-4   ' src={imgURL} alt="card-img" />
        <h1 className="font-bold text-[1.1rem] text-[#000000] ">{title}</h1>
        <p className="text-center text-[0.9rem] text-gray-700 px-3 py-2">{content}</p>

    </div>
  )
}

export default Card
