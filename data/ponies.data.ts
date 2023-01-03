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
    }
]

export { Ponies }