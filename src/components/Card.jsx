import React from 'react'

const Card = ({imgURL,title,content}) => {
  
  return (
    <div className="bg-white w-[250px] h-[350px] md:w-[300px]  md:h-[350px] md:shadow-xl flex flex-col items-center hover:scale-105 hover:shadow-xl border-4 rounded-2xl md:border-none  md:hover:scale-110 duration-300">
     
      <img className='w-[60%] pt-0' src={imgURL} alt="card-img" />
        <h1 className="font-bold text-2xl ">{title}</h1>
        <p className="text-center px-3 py-2">{content}</p>

    </div>
  )
}

export default Card
