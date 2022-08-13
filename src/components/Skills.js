import React, { useState } from 'react';

function Skills(props) {
    const [SkillSettings, SetSkillSettings] = useState({
        type:"",
        name:"",
        desc:"",
        icon: "",
        gif: ""
    }) 

       
  return (
    <>
        <div className="h-full grid grid-cols-2 gap-2 p-5">
            <div className='p-6'>
                <div className="p-6 max-w-full text-white rounded-lg border shadow-md bg-slate-900 border-slate-700">
                    <div className="grid grid-cols-5 gap-5 content-center justify-items-center place-content-center">
                        {props.skillclass?.map((item) => {
                            switch (item.type) {
                                case 'active':
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div onClick={() => SetSkillSettings(item)} className='flex items-center'><img className="w-16 h-16 rounded-lg shadow-lg border border-2 border-slate-100" src={item.icon} alt={item.name} /></div>
                                            </React.Fragment>
                                        )
                                case 'stats':
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div onClick={() => SetSkillSettings(item)} className='flex items-center'><img className=" w-10 h-10 shadow-lg" src={item.icon} alt={item.name}/></div>
                                            </React.Fragment>
                                        )
                                case 'passive':
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div onClick={() => SetSkillSettings(item)} className='flex items-center'><img className="w-12 h-12 rounded-full shadow-lg border border-2 border-slate-100" src={item.icon} alt={item.name} /></div>
                                            </React.Fragment>
                                        )
                                case 'empty':
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div onClick={() => SetSkillSettings(item)} className='flex items-center'></div>
                                            </React.Fragment>
                                        )
                                default:
                                        return (
                                            <React.Fragment key={item.id}>
                                                <div onClick={() => SetSkillSettings(item)} className='flex items-center'></div>
                                            </React.Fragment>
                                        )
                            };
                        })}
                    </div>
                </div>
            </div>

            <div className='p-6'>
                {SkillSettings.name
                    ?
                    <div className="p-6 max-w-full rounded-lg border shadow-md bg-slate-900 border-slate-700">
                        <div className='flex justify-center'>    
                            <img className="w-16 h-16 rounded-lg shadow-lg border border-2 border-slate-100" src={SkillSettings.icon} alt=""/>
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">{SkillSettings.name}</h5>
                        <div>
                            <p className="mb-3 font-normal text-slate-400">{SkillSettings.desc}</p>
                            

                        </div>

                        <div className='mt-5 flex justify-center'>
                            <div>
                                <img className="shadow-lg border border-2 border-slate-100" src={SkillSettings.gif} alt=""/>
                            </div>   
                        </div>
                    </div>
                    :
                    <div></div>
                    
                }
                
            </div>
        </div>
    </>
  )
}

export default Skills