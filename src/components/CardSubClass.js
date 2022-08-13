import React from 'react'

function CardSubClass(props) {

  return (
    <>
        <a href={props.path} className="flex flex-col items-start rounded-lg shadow-md md:flex-row md:max-w-xl border-slate-700 bg-slate-900 hover:bg-slate-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.img} alt={props.name}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.name}</h5>
                <p className="mb-3 font-normal text-slate-400">{props.desc}</p>
            </div>
        </a>
    </>
  )
}

export default CardSubClass