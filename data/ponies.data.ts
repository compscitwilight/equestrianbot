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
    },
    {
        name: "Princess Celestia",
        image: "https://static.wikia.nocookie.net/mlp/images/2/2a/Princess_Celestia_ID_S4E01.png/revision/latest?cb=20140322224921",
        description: `
        **Princess Celestia** is one of the regal sisters of Equestria. Alongside her sister Princess Luna, she is in charge of rising the sun, maintaining peace in Equestria,
        and mentoring Twilight Sparkle. She is one of the most famous ponies in all of Equestrian history. She and her sister defeated Discord using the Elements of Harmony
        when he first gained control of Equestria.
        `,
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.Yellow
    },
    {
        name: "Princess Luna",
        image: "https://static.wikia.nocookie.net/mlp/images/1/18/Princess_Luna_ID_S5E04.png/revision/latest?cb=20150422172452",
        description: `
        **Princess Luna** is one of the regal sisters of Equestria. Alongside her sister Princess Celestia, she is in charge of rising the moon, and helping ponies in their dreams.
        Princess Luna was banished to the moon after turning into **Nightmare Moon** over 1,000 years ago by her sister using the Elements of Harmony. Nightmare Moon was defeated in
        the My Little Pony: Friendship is Magic premiere by the Mane 6.
        `,
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.DarkPurple
    },
    {
        name: "Princess Cadance",
        image: "https://static.wikia.nocookie.net/mlp/images/6/6f/Princess_Cadance_ID_S4E11.png/revision/latest/scale-to-width-down/225?cb=20140128163901",
        description: `
        **Princess Cadance** is an Alicorn who is the Princess of the Crystal Empire, alongside Prince Shining Armor. She is the former foal-sitter of Princess Twilight Sparkle,
        the wife of her brother, and her sister-in-law. She is in charge of maintaining the defense of the Crystal Empire by using her magic.
        `,
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.DarkVividPink
    },
    {
        name: "Prince Shining Armor",
        image: "https://i.pinimg.com/originals/80/1a/07/801a077b078ec2a29f19b3e0d6565c8d.png",
        description: `
        **Prince Shining Armor** is a unicorn who is the older brother of Princess Twilight Sparkle, and the husband of Princess Cadance. He, alongside Princess Cadance rule the
        Crystal Empire and protect it with their magic.
        `,
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.DarkBlue
    },
    {
        name: "Queen Chrysalis",
        image: "https://static.wikia.nocookie.net/mlp/images/a/a2/Queen_Chrysalis_ID_S9E8.png/revision/latest?cb=20190520065817",
        description: `
        **Queen Chrysalis** is a changeling villian who formerly ruled the Changeling Kingdom. She disguised herself as Princess Cadance when her and Shining Armor were about
        to marry each other. She is one of the only changelings to remain evil after "To Change a Changeling".
        `,
        gen: Generation.G4,
        type: Species.Changeling,
        color: Colors.DarkButNotBlack
    },
    {
        name: "Spike",
        image: "https://static.wikia.nocookie.net/mlp/images/8/87/Spike_ID_S8E11.png/revision/latest?cb=20180526160714",
        description: `
        **Spike** is a dragon who acts as the companion of Princess Twilight Sparkle, naming him her "Number One Assistant". He usually partakes in acitivies with
        the rest of the Mane Six, and even has his own throne in the throne room at Twilight Sparkle's castle.
        `,
        gen: Generation.G4,
        type: Species.Dragon,
        color: Colors.Purple
    },
    {
        name: "Discord",
        image: "https://static.wikia.nocookie.net/heroes-and-villain/images/d/dd/Discord.png/revision/latest?cb=20190325155926",
        description: `
        **Discord** is a draconequus who formerly used his magic to convert Equestria into the "Chaos Capital of the World". He was turned to stone by the regal sisters
        over 1,000 years ago, but came back after the Cutie Mark Crusaders had an argument near his statue. Afterwards, the Mane 6 defeated him with the Elements of Harmony,
        and in "Keep Calm and Flutter On", Discord was reformed by Fluttershy.

        He is the only creature in Equestria to hold "chaos magic".
        `,
        gen: Generation.G4,
        type: Species.Draconequus,
        color: Colors.DarkOrange
    },
    {
        name: "Applebloom",
        image: "https://static.wikia.nocookie.net/mlp/images/1/1c/Apple_Bloom_ID_S6E4.png/revision/latest?cb=20160411140505",
        description: `
        **Applebloom** is a school-age Earth pony who is the leader of the **Cutie Mark Crusaders**. She is the younger sister of Applejack and Big Mac, and lives on Sweet Apple Acres.
        She earned her cutie mark in "Crusaders of the Lost Mark" along with her friends Sweetie Belle and Scootaloo.
        `,
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Red
    },
    {
        name: "Sweetie Belle",
        image: "https://static.miraheze.org/mylittleponywiki/e/e8/S8E6_Sweetie.png",
        description: `
        **Sweetie Belle** is a school-age unicorn who is a member of the **Cutie Mark Crusaders**, and the younger sister of Rarity.
        `,
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.White
    },
    {
        name: "Scootaloo",
        image: "https://static.wikia.nocookie.net/mlp/images/5/5a/Scootaloo_ID_S6E4.png/revision/latest?cb=20160411140522",
        description: `
        **Scootaloo** is a school-age pegasus who is a member of the **Cutie Mark Crusaders**. She is a talented scooterist, and the younger sister figure of
        Rainbow Dash.
        `,
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.Orange
    }
]

export { Ponies }