import { StatsData } from "./StatsData"
const allstats = {StatsData}
export const PyromancerData = {
    name: "Pyromancer",
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
    ref1: require("../images/classes/spellcaster/pyromancer/ref1.jpg"),
    ref2: require("../images/classes/spellcaster/pyromancer/ref2.jpg"),
    ref3: require("../images/classes/spellcaster/pyromancer/ref3.jpg"),
    ref4: require("../images/classes/spellcaster/pyromancer/ref4.jpg"),
    skills: [
        {
            id: 1,
            type:"active",
            name:"Fireball",
            desc:"Conjura por xSegundos e dispara um projétil flamejante, ao contato explode em uma area 3x3 causando x% dano flamejante",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_fireball.png")
        },
        {
            id: 2,
            type:"passive",
            name:"Fire Staff Mastery",
            desc:"A cada level, utilizando fire staff, aumenta o dano de ataques básicos em +2 Magical Damage",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_firestaff.png"),
        },
        {
            id: 3,
            type:"active",
            name:"Fire Breath",
            desc:"conjura instantamenamente uma onda de fogo a sua frente, causando x% dano flamejante",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_firebreath.png")
        },
        {
            id: 4,
            type:"passive",
            name:"Burning Flames",
            desc:"Toda habilidade de fogo que acertar o inimigo causa Burning. O Burning dura 10s causa x% de dano mágico a cada 1 segundo e gera um Stack. Cada Stack aumenta o dano do Burning em x%, acumula até 10x",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_burningflames.png")
        },
        {
            id: 5,
            type:"active",
            name:"Immolate",
            desc:"Em uma pequena área, queima os inimigos, colocando 3x stacks de burning",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_immolate.png")
        },
        {
            id: 6,
            type:"passive",
            name:"Fire Walker",
            desc:"Ao conjurar uma habilidade, recebe x% de movementspeed por xSegundos",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_firewalker.png")
        },
        {
            id: 7,
            type:"active",
            name:"Blazing Stone",
            desc:"Conjura por xSegundos, Invocaando uma pedra de magma do chão, impossibilitando adversarios e aliados passarem, causa x% de dano a inimigos que encostam",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_blazingstone.png")
        },
        {
            id: 8,
            type:"passive",
            name:"Flame Orb",
            desc:"A cada habilidade conjurada, uma Flame Orb é invocada, acumulando até no 3. Cada Flame orb aumenta o dano mágico em x. Ao receber ataque, uma flame orb explode, causando dano a todos inimigos ao redor do Pyromancer em X dano.",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_flameorb.png")
        },
        {
            id: 9,
            type:"active",
            name:"Flame Ward",
            desc:"Cojura por xSegundos um escudo de chamas, que protege em x% dano flamejante e causa x% de dano a inimigos corpo a corpo que o atacarem. O escudo é conjurado em si mesmo e até x aliados proximos. Dura xSegundos",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_flameward.png")
        },
        {
            id: 10,
            type:"passive",
            name:"Explosion",
            desc:"Inimigos abatido pelo Pyromancer explodem em uma área de X, causando X dano aos inimigos ao redor",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_explosion.png")
        },
        {
            id: 11,
            type:"active",
            name:"Runes of Caldaria",
            desc:"Pyromancer entra em modo Flame Avatar, se tornando imovel e levitando sob as runas de caldaria. Enquanto estiver no modo Flame Avatar, o Pyromancer recebe x% Casting Speed, x% Cooldown Reduction e x% Magical Damage",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_runesofcaldaria.png")
        },
        {
            id: 12,
            type:"passive",
            name:"Psycopyro",
            desc:"Quando Pyromancer abater um inimigo, pyromancer recebe x% de chance crítica por xSegundos. Acumulá até 5x",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_psycopyro.png")
        },
        {
            id: 13,
            type:"passive",
            name:"Return to Ashes",
            desc:"Ao morrer, o pyromancer se transforma em uma fenix por xS, que causa x% dano flamejante em inimigos que tocar.",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_fenixmode.png")
        },
        {
            id: 14,
            type:"active",
            name:"Hells Shower",
            desc:"Canalisa por xSegundos, em uma área uma chuva de fogo cai, causando xDano por chama atingida",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_fireshower.png")
        },
        {
            id: 15,
            type:"passive",
            name:"Bursteleport",
            desc:"A cada segundo parado, pyromancer recebe x% de Casting Speed. Acumula até 10x.",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_bursteleport.png")
        },
        {
            id: 16,
            type:"active",
            name:"Meteor",
            desc:"Conjura por xSegundos um meteoro que cairá em uma grande área, causando x% de dano a todos os inimigos e Atordoando por xSegundos.",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_meteor.png")
        },
        {
            id: 17,
            type:"passive",
            name:"Combustion",
            desc:"Quando um inimigo estiver com 10 stacks de burning e receber um novo stack, todos os stacks são cosumidos e um dano explosivo de x% flamejante é causado. Se um inimigo for morto por essa habilidade, ele não poderá ser revivido.",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_combustion.png")
        },
        {
            id: 18,
            type:"active",
            name:"Fire Ring",
            desc:"Canalisa por xSegundos, Em uma área ao redor de si, causa dano por segundo, cada dano ",
            icon: require("../images/classes/spellcaster/pyromancer/icons/_firering.png")
        }
    ]      


}