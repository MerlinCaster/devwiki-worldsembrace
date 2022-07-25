import React from 'react'
import { SidebarData } from '../data/SidebarData';


function Sidebar() {
  return (
    <>
        <div className="">
            <ul className="space-y-2">
                {SidebarData.map((item, index) => {
                    return (
                        <li>
                            <a href={item.path} className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
                            <p className="flex font-bold ml-3"><span className="text-2xl mr-2">{item.icon}</span>{item.name}</p>
                            </a>
                        </li>
                    )
                })}
            </ul>
            {/* <ul className="pt-4 mt-4 space-y-2 border-t border-gray-700">
                <li>
                    <a href="/#" className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700">
                    <span className="ml-3">Dashboard</span>
                    </a>
                </li>
            </ul> */}
        </div>
    </>
  )
}

export default Sidebar

