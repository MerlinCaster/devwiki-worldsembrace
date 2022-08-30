import React from 'react'
import { useParams } from 'react-router-dom'
import { WarriorData } from '../data/WarriorData';
import { RangerData } from '../data/RangerData';
import CardSubClass from '../components/CardSubClass';

function CharClass() {
  let { handle } = useParams();
  let classProps = WarriorData;
  console.log(classProps)
  switch (handle) {
    case 'warrior':
      classProps = WarriorData;
      break;
    case 'ranger':
      classProps = RangerData;
      break;
    default:
  }

  return (
    <>
      <div className="h-full grid grid-cols-3 gap-2 p-5">
        <div className='col-span-2'>
          <p className="text-6xl text-white pb-4">{classProps.name}</p>
          <p className="text-base text-white pb-4">{classProps.descMain}</p>
          <p className="text-base text-white pb-4">{classProps.descSec}</p>
        </div>
        <div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-slate-400">
                <caption className="p-5 text-lg font-semibold text-left text-white bg-slate-900">
                    Attributes
                    <p className="mt-1 text-sm font-normal text-slate-400">Esses são os atributos inicias da classe e suas devidas progressões por level.</p>
                </caption>
                <thead className="text-xs uppercase bg-slate-700 text-slate-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Attr
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Level 1
                        </th>
                        <th scope="col" className="py-3 px-6">
                            P/Level
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {classProps.attrs.map((item, index) => {
                        return (
                          <tr className="bg-slate-900 border-slate-700">
                              <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-white">
                                {item.name}
                              </th>
                              <td className="py-4 px-6">
                                {item.lvlone}
                              </td>
                              <td className="py-4 px-6">
                                {item.plvl}
                              </td>
                          </tr>
                        )
                    })}
                </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="h-full p-5">
        <p className="text-4xl text-white pb-4">Sub Classes</p>
        <p className="text-base text-white pb-4">The concept of subclass is</p>
      </div>
      <div className="h-full grid grid-cols-4 gap-4 p-5">
          {classProps.subClasses.map((item, index) => {
              return (
                <div>
                  <CardSubClass 
                      name={item.name}
                      desc={item.desc}
                      img={item.img}
                      path={item.path}
                  />
                </div>
              )
          })}
      </div>
    </>
  )
}

export default CharClass