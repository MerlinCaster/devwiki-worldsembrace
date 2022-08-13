import React from 'react'

function CardClass(props) {
  return (
    <>
        <a href={props.path} className="flex flex-col items-right p-6 max-w-sm rounded-lg  shadow-md hover:bg-slate-100 bg-slate-700 border-slate-700 hover:bg-slate-600 no-underline">
          
          <div className="flex flex-col justify-between p-4 leading-normal">
            
            <h5 className="flex mb-2 text-2xl font-bold tracking-tight text-white"><img className="flex w-12 mr-3 h-12 md:h-12 md:w-12" src={props.img} alt={props.name}/>{props.name}</h5>
            <p className="font-normal text-slate-400">{props.desc}</p>
          </div>
        </a>
    </>
  )
}

export default CardClass