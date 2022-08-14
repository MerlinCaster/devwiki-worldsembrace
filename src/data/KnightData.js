import { StatsData } from "./StatsData"
const allstats = {StatsData}
export const KnightData = {
    name: "Knight",
    descMain: "Utilizando armaduras pesadas, armas de uma mão e escudo, o Knight foi pensado para ser o primeiro tank, com suas caracteristicas vindas de uma classe de liderança, que além de assumir a frente do combate também buffa aliados próximos",
    descSec: "Sua função no PvE é clara, ele irá manter os inimigos focado em si para que seus aliados possam o derrubar. Ótimo para jogar em grupos, sejam eles pequenos ou grandes. No caso de jogadores Solo, o Knight se torna uma classe um pouco menos performática que outras. Apesar dele ter a vantagem de não receber muito dano e ter uma auto cura sustentavel, ele causa pouco dano, o que seu grind mais lento que o normal porém sustentavel. No PvP ele brilha em todas escalas. No 1v1 por ser uma classe resistente com muito controle, faz com que inimigos que dependam de conjuração acabem sendo penalizados ao enfrentar o Knight. Em combates de média e larga escala o Knight faz a função de um lider, tomando a frente e iniciando as lutas, além de conseguir ter um poder de Chase em grupo utilizando a habilidade Assemble, ele também pode segurar pontos estratégicos como portões, pontes ou escadrias utilizando a habilidade Hold.",
    pros: [
        "Resistente",
        "Iniciador",
        "Buffer",
        "Fácil de Jogar"
    ],
    cons: [
        "Lento",
        "Baixo Dano",
        "Dependente de Gear",
    ],
    ref1: require("../images/classes/warrior/knight/ref1.png"),
    ref2: require("../images/classes/warrior/knight/ref2.jpg"),
    ref3: require("../images/classes/warrior/knight/ref3.jpg"),
    ref4: require("../images/classes/warrior/knight/ref4.jpg"),
    skills: [
        {
            id: 1,
            type:"empty"
        },
        {
            id: 2,
            type:"stats",
            name:allstats.StatsData.str.name,
            desc:allstats.StatsData.str.desc,
            icon:allstats.StatsData.str.icon,
        },
        {
            id: 3,
            type:"stats",
            name:allstats.StatsData.cons.name,
            desc:allstats.StatsData.cons.desc,
            icon:allstats.StatsData.cons.icon,
        },
        {
            id: 4,
            type:"stats",
            name:allstats.StatsData.dex.name,
            desc:allstats.StatsData.dex.desc,
            icon:allstats.StatsData.dex.icon,
        },
        {
            id: 5,
            type:"empty"
        },
        {
            id: 6,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_regen.png")
        },
        {
            id: 7,
            type:"active",
            name:"Slash",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/slash.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 8,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_mastery.png"),
        },
        {
            id: 9,
            type:"active",
            name:"Bash",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/shieldbash.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 10,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_block.png"),
        },
        {
            id: 11,
            type:"empty"
        },
        {
            id: 12,
            type:"empty"
        },
        {
            id: 13,
            type:"stats",
            name:allstats.StatsData.str.name,
            desc:allstats.StatsData.str.desc,
            icon:allstats.StatsData.str.icon,
        },
        {
            id: 14,
            type:"empty"
        },
        {
            id: 15,
            type:"empty"
        },
        {
            id: 16,
            type:"active",
            name:"Ground Smash",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/groundsmash.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 17,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_teamplay.png"),
        },
        {
            id: 18,
            type:"active",
            name:"Castle of Stone",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/castleofstone.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 19,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_titanwalk.png")
        },
        {
            id: 20,
            type:"active",
            name:"Shield Rush",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/shieldrush.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 21,
            type:"empty"
        },
        {
            id: 23,
            type:"stats",
            name:allstats.StatsData.cons.name,
            desc:allstats.StatsData.cons.desc,
            icon:allstats.StatsData.cons.icon
        },
        {
            id: 22,
            type:"empty"
        },
        {
            id: 23,
            type:"stats",
            name:allstats.StatsData.cons.name,
            desc:allstats.StatsData.cons.desc,
            icon:allstats.StatsData.cons.icon
        },
        {
            id: 25,
            type:"empty"
        },
        {
            id: 26,
            type:"empty"
        },
        {
            id: 27,
            type:"active",
            name:"Assemble",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/assemble.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 28,
            type:"passive",
            name:"Passive",
            desc:"passive",
            icon: require("../images/classes/warrior/knight/icons/p_sturdy.png")
        },
        {
            id: 29,
            type:"active",
            name:"Hold!!!",
            desc:"Golpeia o inimigo com uma forte pancada utilizando o escudo, o atordoando por 1s",
            icon: require("../images/classes/warrior/knight/icons/hold.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 30,
            type:"empty"
        },
    ]

}