import React from 'react'

const Card = ({imgURL,title,content}) => {
  
  return (
    <div  className="bg-white w-[16rem]  h-[22rem]    md:w-[14rem] md:h-[20rem] lg:w-[16rem]  lg:h-[22rem]   flex flex-col items-center hover:scale-105 hover:shadow-lg border  border-gray-300 rounded-2xl   md:hover:scale-102 duration-300 ">
     
      <img className='w-[60%]    pt-0' src={imgURL} alt="card-img" />
        <h1 className="font-bold text-3xl text-[#144c8b] ">{title}</h1>
        <p className="text-center text-black px-3 py-2">{content}</p>

    </div>
  )
}

export default Card
