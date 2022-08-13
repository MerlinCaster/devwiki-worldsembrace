import React from 'react'
import { StatsData } from '../data/StatsData';
import { GeneralStatsData } from '../data/GeneralStatsData';
import { MitgationStatsData } from '../data/MitgationStatsData';
import { AmplifyStatsData } from '../data/AmplifyStatsData';

function Attrs() {
  return (
    <>
        <div className="h-full grid grid-cols-3 gap-2 p-5">
            <div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-slate-400">
                        <caption className="p-5 text-lg font-semibold text-left text-white bg-slate-900">
                            Character Attributes
                            <p className="mt-1 text-sm font-normal text-slate-400">Esses são os atributos BASE de todos os players</p>
                        </caption>
                        <tbody>
                                <tr className="bg-slate-900 border-slate-700">
                                    <td className="py-4 pl-6">
                                        <div className='flex items-center'><img className=" w-11 h-9 shadow-lg" src={StatsData.str.icon} alt={StatsData.str.name}/></div>
                                    </td>
                                    <th scope="row" className="py-4 pl-3 pr-4 font-medium whitespace-nowrap text-white">
                                        {StatsData.str.name}
                                    </th>
                                    <td className="py-4 px-4">
                                        {StatsData.str.desc}
                                    </td>
                                </tr>
                                <tr className="bg-slate-900 border-slate-700">
                                    <td className="py-4 pl-6">
                                        <div className='flex items-center'><img className=" w-11 h-9 shadow-lg" src={StatsData.dex.icon} alt={StatsData.dex.name}/></div>
                                    </td>
                                    <th scope="row" className="py-4 pl-3 pr-4 font-medium whitespace-nowrap text-white">
                                        {StatsData.dex.name}
                                    </th>
                                    <td className="py-4 px-4">
                                        {StatsData.dex.desc}
                                    </td>
                                </tr>
                                <tr className="bg-slate-900 border-slate-700">
                                    <td className="py-4 pl-6">
                                        <div className='flex items-center'><img className=" w-11 h-9 shadow-lg" src={StatsData.int.icon} alt={StatsData.int.name}/></div>
                                    </td>
                                    <th scope="row" className="py-4 pl-3 pr-4 font-medium whitespace-nowrap text-white">
                                        {StatsData.int.name}
                                    </th>
                                    <td className="py-4 px-4">
                                        {StatsData.int.desc}
                                    </td>
                                </tr>
                                <tr className="bg-slate-900 border-slate-700">
                                    <td className="py-4 pl-6">
                                        <div className='flex items-center'><img className=" w-11 h-9 shadow-lg" src={StatsData.cons.icon} alt={StatsData.cons.name}/></div>
                                    </td>
                                    <th scope="row" className="py-4 pl-3 pr-4 font-medium whitespace-nowrap text-white">
                                        {StatsData.cons.name}
                                    </th>
                                    <td className="py-4 px-4">
                                        {StatsData.cons.desc}
                                    </td>
                                </tr>
                                <tr className="bg-slate-900 border-slate-700">
                                    <td className="py-4 pl-6">
                                        <div className='flex items-center'><img className=" w-11 h-9 shadow-lg" src={StatsData.wis.icon} alt={StatsData.wis.name}/></div>
                                    </td>
                                    <th scope="row" className="py-4 pl-3 pr-4 font-medium whitespace-nowrap text-white">
                                        {StatsData.wis.name}
                                    </th>
                                    <td className="py-4 px-4">
                                        {StatsData.wis.desc}
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='col-span-2'>
                <p className="text-6xl text-white pb-4">Atributos</p>
                <p className="text-base text-white pb-4">Nessa página, abordaremos tanto os atributos básicos do personagem quanto os avançados, adquiridos através de items ou skills passivas</p>
            </div>

        </div>
        <div className="h-full gap-2 p-5">       
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-slate-400">
                    <tbody>
                        {GeneralStatsData.map((item) => {
                            return (
                                <tr className="border-b bg-slate-900 border-slate-700">
                                    <th scope="row" className="py-4 px-6 w-10 font-medium whitespace-nowrap text-white">
                                        {item.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.desc}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="h-full gap-2 p-5">   
            <p className="text-5xl text-white pb-4">Tipos de dano</p>
            <div className='grid grid-cols-2'>
                <div className='col pr-3'>
                    <p className="text-3xl text-white pb-4">Amplificação de dano final</p>
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-slate-400">
                            <tbody>
                                {AmplifyStatsData.map((item) => {
                                    return (
                                        <tr className="border-b bg-slate-900 border-slate-700">
                                            <th scope="row" className="py-4 pl-6 w-24 font-medium whitespace-nowrap text-white flex items-center">
                                                <img className="w-16 h-16 rounded-lg shadow-lg border border-2 border-slate-100" src={item.icon} alt={item.name} />
                                            </th>
                                            <th scope="row" className="py-4 px-6 w-10 font-medium whitespace-nowrap text-white">
                                                {item.name}
                                            </th>
                                            <td className="py-4 px-6">
                                                {item.desc}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col pl-3'>
                    <p className="text-3xl text-white pb-4">Mitigação de dano final</p>
                    <div className="overflow-x-auto relative">
                        <table className="w-full text-sm text-left text-slate-400">
                            <tbody>
                                {MitgationStatsData.map((item) => {
                                    return (
                                        <tr className="border-b bg-slate-900 border-slate-700">
                                            <th scope="row" className="py-4 pl-6 w-24 font-medium whitespace-nowrap text-white flex items-center">
                                                <img className="w-16 h-16 rounded-lg shadow-lg border border-2 border-slate-100" src={item.icon} alt={item.name} />
                                            </th>
                                            <th scope="row" className="py-4 px-6 w-10 font-medium whitespace-nowrap text-white">
                                                {item.name}
                                            </th>
                                            <td className="py-4 px-6">
                                                {item.desc}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Attrs