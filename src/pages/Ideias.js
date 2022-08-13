import React from 'react'
import { IdeiasData } from '../data/IdeiasData';

function Ideias() {
  return (
    <>
        <div className="h-full gap-2 p-5">
                <p className="text-6xl text-white pb-4">Ideias Avulsas</p>
                <p className="text-base text-white pb-4">Local para fazer uma documentação rapida, sem muitos detalhes, de algumas ideias que vamos tendo. Sem precisar passar por muita validação ou teste prático</p>
            <div class="grid grid-cols-3 gap-4">
                {IdeiasData.map((item) => {
                        return (
                            <div class="block p-6 rounded-lg border shadow-md bg-slate-900 border-slate-700 hover:bg-slate-800">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{item.name}</h5>
                                <p class="font-normal text-slate-400 pb-6 pt-2">{item.desc}</p>
                                <img className="shadow-lg border border-2 border-slate-100" src={item.ref1}/>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    </>
  )
}

export default Ideias