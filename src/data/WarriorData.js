export const WarriorData = {
    name: "Warrior",
    descMain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur purus lorem, id vehicula leo fringilla sit amet. Quisque nec augue purus.",
    descSec: "Aenean varius nec turpis quis ornare. Mauris molestie, arcu ac commodo suscipit, metus libero aliquet eros, in pharetra mauris augue ac mi. Integer mollis augue odio, vel aliquam neque porta et. Pellentesque ultricies dui velit, et scelerisque lacus pulvinar ac. Suspendisse mattis pellentesque purus, ac sollicitudin est varius non. Aliquam erat volutpat. Etiam at odio cursus, ornare orci porta, ultrices sapien. In vestibulum rhoncus odio, ut tempor neque ultrices sed. Vestibulum lobortis, ipsum sed semper auctor, nisi nunc auctor urna, vel rutrum lectus lacus ac ipsum. Sed feugiat nisl diam, a efficitur ante vestibulum quis. Donec at turpis non justo maximus rhoncus. In ac maximus tortor. Nam aliquet libero in ex tincidunt porta. Nullam egestas odio sed quam auctor sodales.",
    subClasses: [
        {
            name: "Knight",
            desc: "Um tanker, controlador e iniciador. Perfeito para o capitão de um grupo",
            img: require("../images/classes/warrior/Knight.jpg"),
            path: "/classes/subclass/knight"
        },
        {
            name: "Slayer",
            desc: "Em Breve...",
            img: require("../images/classes/warrior/Slayer.jpg"),
            path: "/incoming"
        },
        {
            name: "Barbarian",
            desc: "Em Breve...",
            img: require("../images/classes/warrior/Barbarian.jpg"),
            path: "/incoming"
        },
        {
            name: "Samurai",
            desc: "Em Breve...",
            img: require("../images/classes/warrior/Samurai.jpg"),
            path: "/incoming"
        },
    ],
    attrs: [
        {
            name:"STR",
            lvlone:"5",
            plvl:"+2",
        },
        {
            name:"DEX",
            lvlone:"5",
            plvl:"+2",
        },
        {
            name:"CON",
            lvlone:"5",
            plvl:"+2",
        },
        {
            name:"WIS",
            lvlone:"5",
            plvl:"+2",
        },
        {
            name:"INT",
            lvlone:"5",
            plvl:"+2",
        }
    ]


}