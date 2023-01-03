import { Colors } from "discord.js"

// NOTE: Not all characters in the database are ponies. This covers all species, from Changelings,
// to Discord, and to Lord Tirek.
export interface Pony {
    honorificPrefix?: string | string[],
    name: string,
    honorificSuffix?: string | string[],
    description?: string,
    image?: string,
    gen: Generation,
    type: Species,
    color: number
}

export enum Generation {
    G1 = "G1",
    G2 = "G2",
    G3 = "G3",
    G4 = "G4",
    EQG = "G4.5 (Equestria Girls)",
    G5 = "G5"
}

export enum Species {
    Earth = "Earth Pony",
    Pegasus = "Pegasus",
    Unicorn = "Unicorn",
    Alicorn = "Alicorn",
    Changeling = "Changeling",
    Griffon = "Griffon",
    Draconequus = "Draconequus",
    Crystal = "Crystal Pony",
    Human = "Human",
    Breezie = "Breezie",
    Centaur = "Centaur",
    Dragon = "Dragon",
    Hippogriff = "Hippogriff",
    Minotaur = "Minotaur",
    Phoenix = "Phoenix",
    Siren = "Siren",
    Tantabus = "Tantabus"
}

export function getPony(name: string) {
    return Ponies.find((pony) => pony.name == name);
}

var Ponies: Pony[] = [
    {
        honorificPrefix: "Princess",
        name: "Twilight Sparkle",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/PrincessTwilightSparkle.png",
        description: `
        Princess **Twilight Sparkle** is an Alicorn who resides in Ponyville. She is the Princess of Friendship (Season 4-9), and became the Ruler of Equestria in "The Last Problem".
        She is depicted as a studious pony who loves magic. Her cutie mark resembles Magic, and her Element of Harmony also resembles Magic.
        `,
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.Purple
    },
    {
        name: "Pinkie Pie",
        image: "https://static.wikia.nocookie.net/mlp/images/b/b2/Pinkie_Pie_ID_S4E11.png/revision/latest?cb=20190410214815",
        description: `
        **Pinkie Pie** is an Earth Pony who represents the Element of Laughter. She is a pink and cheerful pony who loves to plan and throw parties.
        `,
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LuminousVividPink
    },
    {
        name: "Fluttershy",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png/revision/latest?cb=20190410214903",
        description: `
        **Fluttershy** is a yellow pegasus who represents the Element of Kindness. She is part of the Mane 6 and is usually portrayed as a shy and introverted
        pony. She has a special ability to communicate with other animals, and reformed Discord in "Keep Calm and Flutter On". She has the ability to do "the Stare",
        which allows her to intimidate animals.
        `,
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.Yellow
    },
    {
        name: "Rainbow Dash",
        image: "https://static.wikia.nocookie.net/mlp/images/6/60/Rainbow_Dash_ID_T3E7.png/revision/latest?cb=20150302214756&path-prefix=es",
        description: `
        **Rainbow Dash** is a blue pegasus who represents the Element of Loyalty. She is a member of the Mane 6, and the Wonderbolts. She is an egotistical, competitve,
        and loyal pegasus, and even has her own fanclub ran by Scootaloo. She is one of the most iconic pegasi in My Little Pony.
        `,
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.Blue
    },
    {
        name: "Rarity",
        image: "https://i.pinimg.com/736x/70/3b/be/703bbe46a2fdea09f5f949d25f6c9001--pony-style-girly-stuff.jpg",
        description: `
        **Rarity** is a unicorn who represents the Element of Generosity. She is part of the Mane 6 and is portrayed as an overdramatic fashionista. She owns a boutique
        in Canterlot, and is famous across Equestria for her fashion.
        `,
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.White
    },
    {
        name: "Applejack",
        image: "https://1.bp.blogspot.com/-1gaCoMUcaGU/XoJHyMI9zSI/AAAAAAADVaM/mPQrY7r35O4_6WkHRAbTm4aLmjrSlsVSwCLcBGAsYHQ/s1600/large.png",
        description: `
        **Applejack** is an Earth pony who represents the Element of Honesty. She is a member of the Mane 6, and the Apple Family. She works on Sweet Apple Acres with her younger sister
        Applebloom, her older brother Big Mac, and her grandmother Granny Smith. She is portrayed as a wise cowgirl.
        `,
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    }
]

export { Ponies }