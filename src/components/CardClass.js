import React from 'react'
import WarriorImg from "../images/WarriorIcon.png"
import RangerImg from "../images/RangerImg.png"
import SpiritualistImg from "../images/SpiritualistImg.png"
import SpellcasterImg from "../images/SpellcasterImg.png"
import ScoutImg from "../images/ScoutImg.png"
import '../App.css';

function CardClass(props) {
  var cardImg = WarriorImg;

  switch (props.img) {
    case 'warrior':
      cardImg = WarriorImg;
      break;
    case 'ranger':
      cardImg = RangerImg;
      break;
    case 'spiritualist':
      cardImg = SpiritualistImg;
      break;
    case 'spellcaster':
      cardImg = SpellcasterImg;
      break;
    case 'scout':
      cardImg = ScoutImg;
      break;
    default:
  }

  return (
    <>
        <a href="/#" className="flex flex-col items-right p-6 max-w-sm rounded-lg  shadow-md hover:bg-slate-100 bg-slate-700 border-slate-700 hover:bg-slate-600 no-underline">
          
          <div className="flex flex-col justify-between p-4 leading-normal">
            
            <h5 className="flex mb-2 text-2xl font-bold tracking-tight text-white"><img className="flex w-12 mr-3 h-12 md:h-12 md:w-12" src={cardImg} alt={props.name}/>{props.name}</h5>
            <p className="font-normal text-slate-400">{props.desc}</p>
          </div>
        </a>

        {/* <div class="card shadow bg-dark-1 text-white">
            <img src={WarriorImg} class="card-img-top" alt="..."/>  
            <div class="card-body">
                <h5 class="card-title">{props.class_name}</h5>
                <p class="card-text">{props.class_desc}</p>
            </div>
        </div> */}
    </>
  )
}

export default CardClass