import { StatsData } from "./StatsData"
const allstats = {StatsData}
export const HunterData = {
    name: "Hunter",
    descMain: "Utilizando armaduras pesadas, armas de uma mão e escudo, o hunter foi pensado para ser o primeiro tank, com suas caracteristicas vindas de uma classe de liderança, que além de assumir a frente do combate também buffa aliados próximos",
    descSec: "Sua função no PvE é clara, ele irá manter os inimigos focado em si para que seus aliados possam o derrubar. Ótimo para jogar em grupos, sejam eles pequenos ou grandes. No caso de jogadores Solo, o hunter se torna uma classe um pouco menos performática que outras. Apesar dele ter a vantagem de não receber muito dano e ter uma auto cura sustentavel, ele causa pouco dano, o que seu grind mais lento que o normal porém sustentavel. No PvP ele brilha em todas escalas. No 1v1 por ser uma classe resistente com muito controle, faz com que inimigos que dependam de conjuração acabem sendo penalizados ao enfrentar o hunter. Em combates de média e larga escala o hunter faz a função de um lider, tomando a frente e iniciando as lutas, além de conseguir ter um poder de Chase em grupo utilizando a habilidade Assemble, ele também pode segurar pontos estratégicos como portões, pontes ou escadrias utilizando a habilidade Hold.",
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
    ref1: require("../images/classes/ranger/hunter/ref1.jpg"),
    ref2: require("../images/classes/ranger/hunter/ref2.jpg"),
    ref3: require("../images/classes/ranger/hunter/ref3.jpg"),
    ref4: require("../images/classes/ranger/hunter/ref4.jpg"),
    skills: [
        {
            id: 1,
            type:"active",
            name:"Piercing Shot",
            desc:"Atira uma flecha que perfura todos os alvos causando x% dano e ignorando x% armadura do alvo",
            icon: require("../images/classes/ranger/hunter/icons/piercingshot.png"),
            gif: require("../images/classes/warrior/knight/gifs/SweepingStrikes.gif")
        },
        {
            id: 2,
            type:"passive",
            name:"Bow Mastery",
            desc:"A cada level, utilizando arcos, aumenta o dano de ataques básicos em +2 Finesse Damage",
            icon: require("../images/classes/ranger/hunter/icons/bowmastery.png"),
        },
        {
            id: 3,
            type:"active",
            name:"Jump Shot",
            desc:"atira uma flecha a frente, que impulsiona o jogando para trás, causando x% de dano e recuando x% para trás",
            icon: require("../images/classes/ranger/hunter/icons/jumpshot.png"),
            gif: require("../images/classes/warrior/knight/gifs/bash.gif")
        },
        {
            id: 4,
            type:"passive",
            name:"Quiver Specialisty",
            desc:"Aumenta os slots da aljava em x%, diminui o peso das flechas em x%, melhora os atributos das aljava em x%",
            icon: require("../images/classes/ranger/hunter/icons/aljava.png")
        },
        {
            id: 5,
            type:"active",
            name:"Spread Shot",
            desc:"Atira 3 flechas a frente, causando x% de dano por flecha",
            icon: require("../images/classes/ranger/hunter/icons/spreadshot.png")
        },
        {
            id: 6,
            type:"passive",
            name:"Range Shot",
            desc:"Aumenta a distancia do ataque do arco em xMetros por level",
            icon: require("../images/classes/ranger/hunter/icons/rangeshot.png"),
        },
        {
            id: 7,
            type:"active",
            name:"Snare Trap",
            desc:"Deixa uma trap no chão, quando um inimigo pisar, causa x% dano e enraiza por xSegundo",
            icon: require("../images/classes/ranger/hunter/icons/snaretrap.png"),
            gif: require("../images/classes/warrior/knight/gifs/ShieldClap.gif")
        },
        {
            id: 8,
            type:"passive",
            name:"Trail",
            desc:"inimigos afetados por Snare Trap, Arrow Trap ou Claymore Trap, ficam marcados por xSegundos, deixando seu rastro por onde anda",
            icon: require("../images/classes/ranger/hunter/icons/trail.png"),
        },
        {
            id: 9,
            type:"active",
            name:"Arrow Trap",
            desc:"Posiciona 5 flechas camufladas no chão, o inimigo que pisar encima recebe x% de dano",
            icon: require("../images/classes/ranger/hunter/icons/arrowtrap.png"),
            gif: require("../images/classes/warrior/knight/gifs/CastleOfStone.gif")
        },
        {
            id: 10,
            type:"passive",
            name:"??",
            desc:"??",
            icon: require("../images/classes/ranger/hunter/icons/dragonarrow.png"),
        },
        {
            id: 11,
            type:"active",
            name:"Poison Arrow",
            desc:"envenena x flechas de sua aljava, os proximos ataques do Hunter envenam o alvo por x segundos, causando x% de dano por segundo em quanto envennado",
            icon: require("../images/classes/ranger/hunter/icons/poisonarrow.png")
        },
        {
            id: 12,
            type:"passive",
            name:"Consecutive Shots",
            desc:"Acertar uma flecha no alvo aplica um efeito que aumenta o seu dano nele em x%, o efeito dura 2s e é acumulado até x vezes",
            icon: require("../images/classes/ranger/hunter/icons/consecutiveshot.png"),
        },
        {
            id: 13,
            type:"passive",
            name:"Roll Shot",
            desc:"Ao utilizar o tumble, recebe o buff de Roll Shot, quando acertar um alvo inimigo com o buff de Roll Shot o hunter ganha x stamina e x% de movement speed por 2s   	    ",
            icon: require("../images/classes/ranger/hunter/icons/rollspeed.png")
        },
        {
            id: 14,
            type:"active",
            name:"Hunters Mark",
            desc:"Marca um alvo, o alvo marcado recebe x% a mais de dano de qualquer fonte e não pode ficar invisivel",
            icon: require("../images/classes/ranger/hunter/icons/huntersmark.png")
        },
        {
            id: 15,
            type:"passive",
            name:"Camouflage",
            desc:"Ao ficar mais de x segundos imóvel, o hunter fica invisivel. Qualquer locomoção, ação ou dano sofrido, a invisibilidade se encerra",
            icon: require("../images/classes/ranger/hunter/icons/camouflage.png"),
        },
        {
            id: 16,
            type:"active",
            name:"Claymore Trap",
            desc:"Uma armadilha invisivel é colocada no chão, quando ativada, explode, deixando em chamas a região por 4 segundos, causando x% dano por segundo",
            icon: require("../images/classes/ranger/hunter/icons/claymoretrap.png"),
            gif: require("../images/classes/warrior/knight/gifs/Assemble.gif")
        },
        {
            id: 17,
            type:"passive",
            name:"Critical Expertise",
            desc:"Sempre que acertar um ataque no inimigo, ganha um Buff de x chance crítica por 10s, acumula até x vezes",
            icon: require("../images/classes/ranger/hunter/icons/criticalexpertise.png")
        },
        {
            id: 18,
            type:"active",
            name:"Rain of Arrows",
            desc:"Dispara flechas para cima durante xSegundos, as flechas caem em uma área de xM causando x% dano e consumindo x Flechas",
            icon: require("../images/classes/ranger/hunter/icons/rainofarrows.png"),
            gif: require("../images/classes/warrior/knight/gifs/Hold.gif")
        }
    ]      


}