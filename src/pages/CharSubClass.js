import React from 'react'
import { useParams } from 'react-router-dom'
import { KnightData } from '../data/KnightData';
import { HunterData } from '../data/HunterData';
import Skills from '../components/Skills';

function CharSubClass() {
  let { handle } = useParams();
  let subClassProps = KnightData;
  console.log(subClassProps)
  switch (handle) {
    case 'knight':
      subClassProps = KnightData;
      break;
    case 'hunter':
      subClassProps = HunterData;
      break;
    default:
  }
  return (
    <>
      <div className="h-full grid grid-cols-3 gap-2 p-5">
        <div className='col-span-2'>
          <p className="text-6xl text-white pb-4">{subClassProps.name}</p>
          <p className="text-base text-white pb-4">{subClassProps.descMain}</p>
          <p className="text-base text-white pb-4">{subClassProps.descSec}</p>
        </div>
        <div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs uppercase bg-slate-700 text-slate-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Pros
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {subClassProps.pros.map((item) => {
                        return (
                          <tr className="bg-slate-900 border-slate-700">
                              <th scope="row" className="py-2 px-6 font-medium whitespace-nowrap text-white">
                                {item}
                              </th>
                          </tr>
                        )
                    })}
                </tbody>
            </table>
            <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs uppercase bg-slate-700 text-slate-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Cons
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {subClassProps.cons.map((item) => {
                        return (
                          <tr className="bg-slate-900 border-slate-700">
                              <th scope="row" className="py-2 px-6 font-medium whitespace-nowrap text-white">
                                {item}
                              </th>
                          </tr>
                        )
                    })}
                </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=' gap-2 p-5'>
        <p className="text-5xl text-white pb-4">Referencias</p>
        <div class="flex flex-row">
          <img class="object-cover h-96 w-96 m-2" src={subClassProps.ref1}/>
          <img class="object-cover h-96 w-96 m-2" src={subClassProps.ref2}/>
          <img class="object-cover h-96 w-96 m-2" src={subClassProps.ref3}/>
          <img class="object-cover h-96 w-96 m-2" src={subClassProps.ref4}/>
        </div>
      </div>
      
      <div className=' gap-2 p-5'>
        <p className="text-5xl text-white pb-4">Habilidades</p>
        <Skills 
            skillclass={subClassProps.skills}
        />
      </div>
    </>
  )
}

export default CharSubClass