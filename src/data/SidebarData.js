import React from 'react'
import { GiSwordsEmblem } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";

export const SidebarData = [
    {
        name:"Home",
        path:"/#/",
        icon: <AiFillHome/>
    },
    {
        name:"Classes",
        path:"/#/classes",
        icon: <GiSwordsEmblem/>
    },
    {
        name:"Attributes",
        path:"/#/attrs",
        icon: <GiSkills/>
    },
    {
        name:"Ideias",
        path:"/#/ideias",
        icon: <HiLightBulb/>
    },
]
