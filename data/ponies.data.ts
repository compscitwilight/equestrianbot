import { Colors } from "discord.js"

// NOTE: Not all characters in the database are ponies. This covers all species, from Changelings,
// to Discord, and to Lord Tirek.
export interface Pony {
    honorificPrefix?: string | string[],
    name: string,
    honorificSuffix?: string | string[],
    description?: string,
    image?: string,
    cutieMark?: string,
    gen: Generation,
    type: Species,
    color: number,
    firstAppeared?: {
        season: number,
        episode?: number
    },
    magic?: {
        auraColor: string,
        type?: Magic,
        magicImage?: string
    }
}

export enum Generation {
    G1 = "Generation 1",
    G2 = "Generation 2",
    G3 = "Generation 3",
    G4 = "Generation 4",
    EQG = "Equestria Girls",
    G5 = "Generation 5"
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
    Tantabus = "Tantabus",
    Yak = "Yak",
    Zebra = "Zebra",
    Alligator = "Alligator",
    Bunny = "Bunny",
    Owl = "Owl",
    Tortoise = "Tortoise"
}

export enum Magic {
    Unicorn = "Unicorn",
    Alicorn = "Alicorn",
    Black = "Black",
    Chaos = "Chaos"
}

export function getPony(name: string) {
    return Ponies.find((pony) => pony.name.toLowerCase() == name.toLowerCase());
}

export function getPonyId(pony: Pony) {
    let index = Ponies.indexOf(pony);
    return index;
}

export function getFormattedList() {
    let msg = "";
    let list = Ponies.map((pony) => {
        return `${pony.name}`;
    })
    for (var i = 0; i < list.length; i++) {
        let listing = list[i];
        msg += `**•** \`\`${listing}\`\`\n`
    }
    return msg;
}

var Ponies: Pony[] = [
    {
        honorificPrefix: "Princess",
        name: "Twilight Sparkle",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/PrincessTwilightSparkle.png",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b67ac3f-1e49-4de0-a78f-eb1df5f41b6a/d3e1hyn-9f8b065f-d94c-4a70-8329-c5af4812e38f.png/v1/fill/w_1280,h_1643,strp/twilight_sparkle_cutie_mark_by_blackgryph0n_d3e1hyn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY0MyIsInBhdGgiOiJcL2ZcLzZiNjdhYzNmLTFlNDktNGRlMC1hNzhmLWViMWRmNWY0MWI2YVwvZDNlMWh5bi05ZjhiMDY1Zi1kOTRjLTRhNzAtODMyOS1jNWFmNDgxMmUzOGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hesj3n0-So8y1SEuJaTJlyZyu4d3Y8Ij8Nzm-BRfWrQ",
        description: "Princess **Twilight Sparkle** is an Alicorn who resides in Ponyville. She is the Princess of Friendship (Season 4-9), and became the Ruler of Equestria in \"The Last Problem\". She is depicted as a studious pony who loves magic. Her cutie mark resembles Magic, and her Element of Harmony also resembles Magic.",
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.Purple,
        firstAppeared: {
            season: 1,
            episode: 1
        },
        magic: {
            auraColor: "FF5198",
            type: Magic.Alicorn,
            magicImage: "https://m.media-amazon.com/images/M/MV5BYjA5MjdmZDktZmNjNC00ZDJmLTg2ZGQtNGFhYzljNzcxNDk4XkEyXkFqcGdeQXVyODI3MTM2NDY@._V1_UY1200_CR733,0,630,1200_AL_.jpg"
        }
    },
    {
        name: "Pinkie Pie",
        image: "https://static.wikia.nocookie.net/mlp/images/b/b2/Pinkie_Pie_ID_S4E11.png/revision/latest?cb=20190410214815",
        cutieMark: "https://i.pinimg.com/originals/e8/9d/93/e89d937080ee5b651393d9cba5feee82.png",
        description: "**Pinkie Pie** is an Earth Pony who is part of the Mane 6, and represents the Element of Laughter. She is a pink and cheerful pony who loves to plan and throw parties. She is seen as a naive pony, but has been proven to actually be very intelligent, and possibly supernatural due to her future telling ability called \"Pinkie Sense\".",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LuminousVividPink,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Fluttershy",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png/revision/latest?cb=20190410214903",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b67ac3f-1e49-4de0-a78f-eb1df5f41b6a/d3e1hgq-c5679a9a-d108-4453-9d70-1af9dacb561f.png/v1/fill/w_1280,h_1305,strp/fluttershy_cutie_mark_by_blackgryph0n_d3e1hgq-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwNSIsInBhdGgiOiJcL2ZcLzZiNjdhYzNmLTFlNDktNGRlMC1hNzhmLWViMWRmNWY0MWI2YVwvZDNlMWhncS1jNTY3OWE5YS1kMTA4LTQ0NTMtOWQ3MC0xYWY5ZGFjYjU2MWYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oZ0URoJC2eWLDB3mtRNvekbn41uFlbE0e8NjogXAhDE",
        description: "**Fluttershy** is a yellow pegasus who represents the Element of Kindness. She is part of the Mane 6 and is usually portrayed as a shy and introverted pony. She has a special ability to communicate with other animals, and reformed Discord in \"Keep Calm and Flutter On\". She has the ability to do \"the Stare\", which allows her to intimidate animals.",
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.Yellow,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Rainbow Dash",
        image: "https://static.wikia.nocookie.net/mlp/images/6/60/Rainbow_Dash_ID_T3E7.png/revision/latest?cb=20150302214756&path-prefix=es",
        cutieMark: "https://i.pinimg.com/originals/5b/c7/87/5bc787f4ed276703dbe2805773020e9d.png",
        description: "**Rainbow Dash** is a blue pegasus who represents the Element of Loyalty. She is a member of the Mane 6, and the Wonderbolts. She is an egotistical, competitve, and loyal pegasus, and even has her own fanclub ran by Scootaloo. She is one of the most iconic pegasi in My Little Pony.",
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.Blue,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Rarity",
        image: "https://i.pinimg.com/736x/70/3b/be/703bbe46a2fdea09f5f949d25f6c9001--pony-style-girly-stuff.jpg",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3ecdd2e-6920-412d-8232-f8197a6ae700/d50y9ko-adfcdef0-974e-4457-95c8-0ab60d5ea1ec.png/v1/fill/w_900,h_1750,strp/rarity_cutie_mark_vector_by_uxyd_d50y9ko-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc1MCIsInBhdGgiOiJcL2ZcL2MzZWNkZDJlLTY5MjAtNDEyZC04MjMyLWY4MTk3YTZhZTcwMFwvZDUweTlrby1hZGZjZGVmMC05NzRlLTQ0NTctOTVjOC0wYWI2MGQ1ZWExZWMucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3r8vo-6uW-KASpABXidBywnJJWxG4Dv28K_PzyhH-vw",
        description: "**Rarity** is a unicorn who represents the Element of Generosity. She is part of the Mane 6 and is portrayed as an overdramatic fashionista. She owns a boutique in Canterlot, and is famous across Equestria for her fashion.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.White,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Applejack",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d8/Applejack_S01E13_cropped.png/revision/latest?cb=20130419182236",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b67ac3f-1e49-4de0-a78f-eb1df5f41b6a/d3e1gqn-582033ba-461a-401f-8f59-05ed169c539e.png/v1/fill/w_1280,h_1374,strp/applejack_cutie_mark_by_blackgryph0n_d3e1gqn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM3NCIsInBhdGgiOiJcL2ZcLzZiNjdhYzNmLTFlNDktNGRlMC1hNzhmLWViMWRmNWY0MWI2YVwvZDNlMWdxbi01ODIwMzNiYS00NjFhLTQwMWYtOGY1OS0wNWVkMTY5YzUzOWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.k1R2ILHF2zVR4Kx-HUd4Xq0ihKiuOSMSDwCGif_MmV8",
        description: "**Applejack** is an Earth pony who represents the Element of Honesty. She is a member of the Mane 6, and the Apple Family. She works on Sweet Apple Acres with her younger sister Applebloom, her older brother Big Mac, and her grandmother Granny Smith. She is portrayed as a wise cowgirl.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Princess Celestia",
        image: "https://static.wikia.nocookie.net/mlp/images/2/2a/Princess_Celestia_ID_S4E01.png/revision/latest?cb=20140322224921",
        cutieMark: "https://i.pinimg.com/originals/0a/d0/f0/0ad0f0c04be2654d98cbf4a103149342.png",
        description: "**Princess Celestia** is one of the regal sisters of Equestria. Alongside her sister Princess Luna, she is in charge of rising the sun, maintaining peace in Equestria, and mentoring Twilight Sparkle. She is one of the most famous ponies in all of Equestrian history. She and her sister defeated Discord using the Elements of Harmony when he first gained control of Equestria.",
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.Yellow,
        firstAppeared: {
            season: 1,
            episode: 2
        }
    },
    {
        name: "Princess Luna",
        image: "https://static.wikia.nocookie.net/mlp/images/1/18/Princess_Luna_ID_S5E04.png/revision/latest?cb=20150422172452",
        cutieMark: "https://i.pinimg.com/originals/e4/b1/0c/e4b10c9d0ee9e2e014cdc974ece75d39.png",
        description: "**Princess Luna** is one of the regal sisters of Equestria. Alongside her sister Princess Celestia, she is in charge of rising the moon, and helping ponies in their dreams. Princess Luna was banished to the moon after turning into **Nightmare Moon** over 1,000 years ago by her sister using the Elements of Harmony. Nightmare Moon was defeated in the My Little Pony: Friendship is Magic premiere by the Mane 6.",
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.DarkPurple,
        firstAppeared: {
            season: 1,
            episode: 2
        }
    },
    {
        name: "Princess Cadance",
        image: "https://static.wikia.nocookie.net/mlp/images/6/6f/Princess_Cadance_ID_S4E11.png/revision/latest/scale-to-width-down/225?cb=20140128163901",
        cutieMark: "https://i.pinimg.com/originals/a0/a9/65/a0a965bab2ed3add0630cf290acc89f6.png",
        description: "**Princess Cadance** is an Alicorn who is the Princess of the Crystal Empire, alongside Prince Shining Armor. She is the former foal-sitter of Princess Twilight Sparkle, the wife of her brother, and her sister-in-law. She is in charge of maintaining the defense of the Crystal Empire by using her magic.",
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.DarkVividPink,
        firstAppeared: {
            season: 2,
            episode: 25
        }
    },
    {
        name: "Prince Shining Armor",
        image: "https://i.pinimg.com/originals/80/1a/07/801a077b078ec2a29f19b3e0d6565c8d.png",
        description: "**Prince Shining Armor** is a unicorn who is the older brother of Princess Twilight Sparkle, and the husband of Princess Cadance. He, alongside Princess Cadance rule the Crystal Empire and protect it with their magic.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.DarkBlue,
        firstAppeared: {
            season: 2,
            episode: 25
        }
    },
    {
        name: "Princess Flurryheart",
        image: "https://static.wikia.nocookie.net/mlp/images/7/71/Flurry_Heart_ID_S6E1.png/revision/latest?cb=20160327000953",
        description: "**Princess Flurryheart** is an alicorn-born princess. She was the first ever pony in recorded history to be born an alicorn. Her parents are Princess Cadance and Prince Shining Armor, and her aunt is Princess Twilight Sparkle.",
        gen: Generation.G4,
        type: Species.Alicorn,
        color: Colors.LuminousVividPink,
        firstAppeared: {
            season: 6,
            episode: 1
        }
    },
    {
        name: "Queen Chrysalis",
        image: "https://static.wikia.nocookie.net/mlp/images/a/a2/Queen_Chrysalis_ID_S9E8.png/revision/latest?cb=20190520065817",
        description: "**Queen Chrysalis** is a changeling villian who formerly ruled the Changeling Kingdom. She disguised herself as Princess Cadance when her and Shining Armor were about to marry each other. She is one of the only changelings to remain evil after \"To Change a Changeling\".",
        gen: Generation.G4,
        type: Species.Changeling,
        color: Colors.DarkButNotBlack,
        firstAppeared: {
            season: 2,
            episode: 26
        }
    },
    {
        name: "Spike",
        image: "https://static.wikia.nocookie.net/mlp/images/8/87/Spike_ID_S8E11.png/revision/latest?cb=20180526160714",
        description: "**Spike** is a dragon who acts as the companion of Princess Twilight Sparkle, naming him her \"Number One Assistant\". He usually partakes in acitivies with the rest of the Mane Six, and even has his own throne in the throne room at Twilight Sparkle's castle.",
        gen: Generation.G4,
        type: Species.Dragon,
        color: Colors.Purple,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Discord",
        image: "https://static.wikia.nocookie.net/heroes-and-villain/images/d/dd/Discord.png/revision/latest?cb=20190325155926",
        description: "**Discord** is a draconequus who formerly used his magic to convert Equestria into the \"Chaos Capital of the World\". He was turned to stone by the regal sisters over 1,000 years ago, but came back after the Cutie Mark Crusaders had an argument near his statue. Afterwards, the Mane 6 defeated him with the Elements of Harmony, and in \"Keep Calm and Flutter On\", Discord was reformed by Fluttershy. He is the only creature in Equestria to hold \"chaos magic\".",
        gen: Generation.G4,
        type: Species.Draconequus,
        color: Colors.DarkOrange,
        firstAppeared: {
            season: 2,
            episode: 1
        }
    },
    {
        name: "Applebloom",
        image: "https://static.wikia.nocookie.net/mlp/images/1/1c/Apple_Bloom_ID_S6E4.png/revision/latest?cb=20160411140505",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bfcb416-04c9-4936-bcb5-687b05dccd9e/d9djppu-50452335-af9d-4c65-919e-a52c8ecabf39.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiZmNiNDE2LTA0YzktNDkzNi1iY2I1LTY4N2IwNWRjY2Q5ZVwvZDlkanBwdS01MDQ1MjMzNS1hZjlkLTRjNjUtOTE5ZS1hNTJjOGVjYWJmMzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dYSf-E7eK5KBPhlq5mbdguGJQu_DRafV9YU4NIBEql8",
        description: "**Applebloom** is a school-age Earth pony who is the leader of the **Cutie Mark Crusaders**. She is the younger sister of Applejack and Big Mac, and lives on Sweet Apple Acres. She earned her cutie mark in \"Crusaders of the Lost Mark\" along with her friends Sweetie Belle and Scootaloo.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Red,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Sweetie Belle",
        image: "https://static.miraheze.org/mylittleponywiki/e/e8/S8E6_Sweetie.png",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bfcb416-04c9-4936-bcb5-687b05dccd9e/d9djo9f-83829858-f23a-4731-95a1-43d8c588609c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiZmNiNDE2LTA0YzktNDkzNi1iY2I1LTY4N2IwNWRjY2Q5ZVwvZDlkam85Zi04MzgyOTg1OC1mMjNhLTQ3MzEtOTVhMS00M2Q4YzU4ODYwOWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GYTTYt_synsuPZ0Pox09mn2IyFBmaFfzv9Vjf-8nQ38",
        description: "**Sweetie Belle** is a school-age unicorn who is a member of the **Cutie Mark Crusaders**, and the younger sister of Rarity.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.White,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Scootaloo",
        image: "https://static.wikia.nocookie.net/mlp/images/5/5a/Scootaloo_ID_S6E4.png/revision/latest?cb=20160411140522",
        cutieMark: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bfcb416-04c9-4936-bcb5-687b05dccd9e/d9djpz7-a5f71728-25f3-4182-a23c-9da53e1fd300.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiZmNiNDE2LTA0YzktNDkzNi1iY2I1LTY4N2IwNWRjY2Q5ZVwvZDlkanB6Ny1hNWY3MTcyOC0yNWYzLTQxODItYTIzYy05ZGE1M2UxZmQzMDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JHTstXhWZ9pBtUbw5oaARsyhiA-whborHBzEvzH1aHY",
        description: "**Scootaloo** is a school-age pegasus who is a member of the **Cutie Mark Crusaders**. She is a talented scooterist, and the younger sister figure of Rainbow Dash.",
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.Orange,
        firstAppeared: {
            season: 1,
            episode: 1
        }
    },
    {
        name: "Babs Seed",
        image: "https://static.wikia.nocookie.net/mlp/images/c/c0/Babs_Seed_ID_MLP_Facebook.png/revision/latest?cb=20190906111222",
        description: "**Babs Seed** is a school-age earth pony who is a former member of the **Cutie Mark Crusaders**, and the cousin of Applebloom. She became a bully when she visited Ponyville, but changed herself after the Cutie Mark Crusaders saved her from crashing her float into mud.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkOrange,
        firstAppeared: {
            season: 3,
            episode: 4
        }
    },
    {
        name: "Trixie Lulamoon",
        image: "https://pbs.twimg.com/media/DXtMPaIXUAEJ1xw.jpg",
        description: "\"The Great and Powerful\" **Trixie Lulamoon** is a unicorn who performs magic tricks across Equestria. She is friends with Starlight Glimmer, who is Princess Twilight Sparkle's student.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.DarkPurple,
        firstAppeared: {
            season: 1,
            episode: 6
        }
    },
    {
        name: "Starlight Glimmer",
        image: "https://static.wikia.nocookie.net/mlp/images/d/de/Starlight_Glimmer_ID_S6E2.png/revision/latest?cb=20160328141719",
        description: "**Starlight Glimmer** is a unicorn who is the student of Princess Twilight Sparkle. She is a former villian who lead a village where she removed the cutie marks of ponies who visited, and even time travelled to try and stop Rainbow Dash from performing her Sonic Rainboom which gave the rest of the Mane 6 their cutie marks.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.Purple,
        firstAppeared: {
            season: 5,
            episode: 1
        }
    },
    {
        name: "Prince Rutherford",
        image: "https://static.wikia.nocookie.net/mlp/images/3/3e/Prince_Rutherford_ID_S5E11.png/revision/latest?cb=20150630030726",
        description: "**Prince Rutherford** is a yak who is the leader of Yakyakistan. He is friends with Pinkie Pie, who is the \"Official Friendship Ambassador for the Yaks\".",
        gen: Generation.G4,
        type: Species.Yak,
        color: Colors.DarkOrange,
        firstAppeared: {
            season: 5,
            episode: 11
        }
    },
    {
        name: "Yona",
        image: "https://static.wikia.nocookie.net/mlp/images/2/22/Yona_ID_S8E2.png/revision/latest?cb=20180329000918",
        description: "**Yona** is a female yak who is a student at Twilight's School of Friendship. She is part of the Young 6, which is a friend group of students at the school.",
        gen: Generation.G4,
        type: Species.Yak,
        color: Colors.LuminousVividPink
    },
    {
        name: "Derpy",
        image: "https://static.wikia.nocookie.net/mlp/images/0/05/Derpy_ID_S4E10.png/revision/latest?cb=20140131033149",
        description: "**Derpy** (or **Derpy Hooves**, **Ditzy Doo**, **Muffins**) is a mail pegasus. She is characterized by her strabismus, causing both of her eyes to look in opposite directions. She was formerly a background character in the Premiere, but fans discovered her quirk on 4chan. This lead to her becoming an official, but controversial character. She is one of the most iconic characters in Gen 4.",
        gen: Generation.G4,
        type: Species.Pegasus,
        color: Colors.LightGrey
    },
    {
        name: "Zecora",
        image: "https://static.wikia.nocookie.net/mlp/images/e/e2/Zecora_id.png/revision/latest?cb=20111117100832",
        description: "**Zecora** is a zebra who brews potions using herbs from the Everfree Forest. She is a supporting character who helps find cures to certain diseases.",
        gen: Generation.G4,
        type: Species.Zebra,
        color: Colors.White
    },
    {
        name: "DJ Pon-3",
        image: "https://static.wikia.nocookie.net/mlp/images/0/0d/DJ_Pon-3_ID_S5E9.png/revision/latest?cb=20150616214305",
        description: "**DJ Pon-3** is a disc-jockey unicorn who appears as a background character. She is always seen wearing headphones and sunglasses, and she does not talk.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.White
    },
    {
        name: "Octavia Melody",
        image: "https://static.wikia.nocookie.net/mlp/images/1/1e/Octavia_Melody_ID_S4E23.png/revision/latest?cb=20150616023924",
        description: "**Octavia Melody** is a cellist Earth pony who acts as a background character. She is always seen playing a cello.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Gummy",
        image: "https://static.wikia.nocookie.net/mlp/images/5/5c/Gummy_bathroom_floor_S1E15.png/revision/latest?cb=20110809133006",
        description: "**Gummy** is Pinkie Pie's pet alligator.",
        gen: Generation.G4,
        type: Species.Alligator,
        color: Colors.Green
    },
    {
        name: "Angel",
        image: "https://static.wikia.nocookie.net/mlp/images/3/3f/Angel_ID_S3E10.png/revision/latest?cb=20160727001840",
        description: "**Angel** is a Fluttershy's pet bunny. He is a sassy and demanding bunny who acts as the primary companion of Fluttershy.",
        gen: Generation.G4,
        type: Species.Bunny,
        color: Colors.White
    },
    {
        name: "Bon Bom",
        image: "https://static.wikia.nocookie.net/mlp/images/2/21/Sweetie_Drops_ID_S5E9.png/revision/latest?cb=20151027051023",
        description: "**Bon Bon** (officially known as **Sweetie Drops**) is an occurring background character who is usually alongside her wife Lyra Heartstrings",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkGold
    },
    {
        name: "Lyra Heartstrings",
        image: "https://static.wikia.nocookie.net/mlp/images/0/0f/Lyra_Heartstrings_ID_S5E9.png/revision/latest?cb=20151027000548",
        description: "**Lyra Heartstrings** is an occurring background character who is usually alongside her wife Bon Bon (Sweetie Drops).",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.Blue
    },
    {
        name: "Prince Bluebird",
        image: "https://static.wikia.nocookie.net/mlp/images/b/b9/Prince_Blueblood_ID_S1E03.png/revision/latest?cb=20110510223111",
        description: "**Prince Bluebird** is a royal unicorn who is the distant nephew of Princess Celestia and Princess Luna, and the cousin of Princess Cadance.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.Yellow
    },
    {
        name: "Big Macintosh",
        image: "https://assets.dragoart.com/images/9286_501/how-to-draw-big-macintosh-big-mac_5e4c9327704021.77506805_40612_3_3.jpg",
        description: "**Big Macintosh** is the older brother of Applejack and Applebloom. He talks in occassionally \"eeyups\" and \"eenopes\". He usually does most of the heavy lifting duties at Sweet Apple Acres.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Red
    },
    {
        name: "Granny Smith",
        image: "https://static.wikia.nocookie.net/mlp/images/3/38/Granny_Smith_ID_S2E06.png/revision/latest?cb=20111213195959",
        description: "**Granny Smith** is an elderly Earth pony who is the grandmother of Applejack, Applebloom, and Big Mac. Her name is a play on the apple \"Granny Smith\". She is one of the founders of Ponyville, and discovered Zapp Apples.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Green
    },
    {
        name: "Owlowiscious",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d8/Owlowiscious_id_S3E11.png/revision/latest?cb=20130128152325",
        description: "**Owlowiscious** is an owl who first appears in the episode \"Owl's Well That Ends Well\". He becomes Twilight Sparkle's pet, and makes Spike fear that he may be replaced.",
        gen: Generation.G4,
        type: Species.Owl,
        color: Colors.DarkOrange
    },
    {
        name: "Diamond Tiara",
        image: "https://static.wikia.nocookie.net/mlp/images/6/6d/Diamond_Tiara_ID_S5E18.png/revision/latest?cb=20151020181357",
        description: "**Diamond Tiara** is a school-age Earth pony who was formerly the antagonist of the **Cutie Mark Crusaders** and other fillies, alongside her friend Silver Spoon. She changed herself after discovering what her true talent was, and thus cuasing the Cutie Mark Crusaders to earn their cutie marks. Her parents are Filthy Rich and Spoiled Rich.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Purple
    },
    {
        name: "Silver Spoon",
        image: "https://static.wikia.nocookie.net/mlp/images/1/16/Silver_Spoon_ID_S4E15.png/revision/latest?cb=20140226190706",
        description: "**Silver Spoon** is a school-age Earth pony who was formerly the antagonist of the **Cutie Mark Crusaders** alongside her friend Diamond Tiara. She changed herself after Diamond Tiara told her that her opinion wasn't valuable in \"Crusaders of the Lost Mark\".",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LightGrey
    },
    {
        name: "King Sombra",
        image: "https://static.wikia.nocookie.net/mlp/images/7/7b/King_Sombra_ID_S9E2.png/revision/latest?cb=20190411072142",
        description: "**King Sombra** was a unicorn who gained notoriety from enslaving the Crystal Ponies of the Crysal Empire. He hid the Crystal Heart, and made the Crystal Empire completely vanish. When the Crystal Empire returned, King Sombra attempted to stop Twilight Sparkle and Spike from retrieving the Crystal Heart. He has the ability to use \"black magic\", a special type of magic.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.DarkRed
    },
    {
        name: "Tank",
        image: "https://static.wikia.nocookie.net/mlp/images/4/4d/Tank_flying_around_S2E7.png/revision/latest?cb=20111121053051",
        description: "**Tank** is a tortoise who is Rainbow Dash's pet. She competed with other animals in the episode \"May The Best Pet Win!\".",
        gen: Generation.G4,
        type: Species.Tortoise,
        color: Colors.DarkGreen
    },
    {
        name: "Star Swirl the Bearded",
        image: "https://static.wikia.nocookie.net/mlp/images/7/76/Star_Swirl_the_Bearded_ID_S7E26.png/revision/latest?cb=20171012212227",
        description: "**Star Swirl the Bearded** is a notable unicorn who is known for his outstanding magical abilities, being considered the most talented unicorn in the history of Equestria.",
        gen: Generation.G4,
        type: Species.Unicorn,
        color: Colors.Navy
    },
    {
        name: "Aloe",
        image: "https://static.wikia.nocookie.net/mlp/images/9/96/Aloe_id_S1E20.png/revision/latest?cb=20110706130024",
        description: "**Aloe** is a background character who works at the Ponyville Day Spa.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LuminousVividPink
    },
    {
        name: "Blue Bobbin",
        image: "https://static.wikia.nocookie.net/mlp/images/b/b0/Blue_Bobbin_ID_S6E9.png/revision/latest?cb=20160521225422",
        description: "**Blue Bobbin** is a Earth pony who works at Rarity For You as a salespony.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Butternut",
        image: "https://static.wikia.nocookie.net/mlp/images/1/1e/Butternut_ID_MLPBGE.png/revision/latest?cb=20181028200738",
        description: "**Butternut** is a Earth pony who only appears in \"The Best Gift Ever\" as an acorn farmer.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Charity Kindheart",
        image: "https://static.wikia.nocookie.net/mlp/images/c/cd/Charity_Kindheart_ID_S5E16.png/revision/latest?cb=20150928041100",
        description: "**Charity Kindheart** is a Earth pony who is the costume designer and founder of the Midsummer Theatre Revival in Manehattan.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Cheerilee",
        image: "https://static.wikia.nocookie.net/mlp/images/3/3d/Cheerilee_ID_S2E17.png/revision/latest?cb=20150709040905",
        description: "**Cherilee** is a Earth pony who works as a teacher at the Ponyville Schoolhouse.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkVividPink
    },
    {
        name: "Cherry Jubilee",
        image: "https://static.wikia.nocookie.net/mlp/images/1/13/Cherry_Jubilee_id_S02E14.png/revision/latest?cb=20121205061839",
        description: "**Cherry Jubilee** is an Earth pony who is the founder and boss of Cherry Hill Ranch.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Red
    },
    {
        name: "Coco Pommel",
        image: "https://static.wikia.nocookie.net/mlp/images/b/bc/Coco_Pommel_ID_S4E8.png/revision/latest?cb=20140106102133",
        description: "**Coco Pommel** is an Earth pony who is a Bridleway dressmaker. She has worked with Rarity, and is the former assistant of Suri Polomare",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Coloratura",
        image: "https://static.wikia.nocookie.net/mlp/images/4/4f/Coloratura_ID_S5E24.png/revision/latest?cb=20160331020344",
        description: "**Coloratura** (or **Rara** and formerly **Countess Coloratura** is a Earth pony popstar in Equestria. She was childhood friends with Applejack.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Blue
    },
    {
        name: "Dr. Fauna",
        image: "https://static.wikia.nocookie.net/mlp/images/c/c0/Mane_Goodall_smiling_at_Spike_S2E10.png/revision/latest/scale-to-width-down/1000?cb=20160119194822",
        description: "**Dr. Fauna** is a Earth pony veterinarian.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Aunt Holiday",
        image: "https://static.wikia.nocookie.net/mlp/images/1/16/Aunt_Holiday_ID_S9E12.png/revision/latest?cb=20190615160829",
        description: "**Aunt Holiday** is one of Scootaloo's aunts.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Hoofer Steps",
        image: "https://static.wikia.nocookie.net/mlp/images/2/23/Hoofer_Steps_ID_S6E4.png/revision/latest?cb=20160411015253",
        description: "**Hoofer Steps** is a dance instructor.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.White
    },
    {
        name: "Junebug",
        image: "https://static.wikia.nocookie.net/mlp/images/1/17/Junebug_ID_S2E10.png/revision/latest?cb=20111213200330",
        description: "**Junebug** is a Background pony.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Lighthoof",
        image: "https://static.wikia.nocookie.net/mlp/images/d/df/Lighthoof_ID_S9E15.png/revision/latest?cb=20190810210701",
        description: "**Lighthoof** is an Earth pony who is a cheerleader at Twilight's School of Friendship.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Blue
    },
    {
        name: "Lotus Blossom",
        image: "https://static.wikia.nocookie.net/mlp/images/8/87/Lotus_Blossom_id_S1E9.png/revision/latest?cb=20130204012145",
        description: "**Lotus Blossom** is an Earth pony who works at Ponyville Day Spa.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Blue
    },
    {
        name: "Mage Meadowbrook",
        image: "https://static.wikia.nocookie.net/mlp/images/d/df/Mage_Meadowbrook_ID_S7E20.png/revision/latest?cb=20170924235649",
        description: "**Mage Meadowbrook** is an Earth pony who is a figure of Equestrian legend.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Blue
    },
    {
        name: "Mane-iac",
        image: "https://static.wikia.nocookie.net/mlp/images/6/6e/Mane-iac_ID_S4E06.png/revision/latest?cb=20210912015302",
        description: "**Mane-iac** is an Earth-pony villian from Maretropolis.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkPurple
    },
    {
        name: "Maud Pie",
        image: "https://static.wikia.nocookie.net/mlp/images/1/10/Maud_Pie_ID_S4E18.png/revision/latest?cb=20140317163136",
        description: "**Maud Pie** is an Earth pony who is the sister of Pinkie Pie. She has a pet rock named \"Boulder\", and is extremely obsessed with rocks. She has her own version of future telling ability, called \"Maud Sense\", similar to Pinkie Pie's \"Pinkie Sense\".",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LightGrey
    },
    {
        name: "Mayor Mare",
        image: "https://static.wikia.nocookie.net/mlp/images/6/68/Mayor_Mare_id_S02E15.png/revision/latest?cb=20150916054559",
        description: "**Mayor Mare** is an Earth pony who is the Mayor of Ponyville.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Mrs. Cup Cake",
        image: "https://static.wikia.nocookie.net/mlp/images/7/78/Mrs._Cake_greeting_ID_S1E25.png/revision/latest?cb=20111201194348",
        description: "**Mrs. Cup Cake** is an Earth pony who owns Sugarcube Corner with Mr. Carrot Cake.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LuminousVividPink
    },
    {
        name: "Mr. Carrot Cake",
        image: "https://static.wikia.nocookie.net/mlp/images/e/ea/Mr._Cake_ID_S2E10.png/revision/latest?cb=20131029203445",
        description: "**Mr. Carrot Cake** is an Earth pony who owns Sugarcube Corner with Mrs. Cup Cake.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Ms. Harshwhinny",
        image: "https://static.wikia.nocookie.net/mlp/images/7/7e/Ms._Harshwhinny_ID_S4E05.png/revision/latest?cb=20140427172856",
        description: "**Ms. Harshwinny** is an Earth pony who is the Equestria Games inspector.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkOrange
    },
    {
        name: "Ms. Peachbottom",
        image: "https://static.wikia.nocookie.net/mlp/images/9/98/Ms._Peachbottom_id_S3E12.png/revision/latest?cb=20140403081911",
        description: "**Ms. Peachbottom** is a background pony who was mistaken for the Equestria Games inspector by the Mane 6 in the Crystal Empire.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Nurse Redheart",
        image: "https://static.wikia.nocookie.net/mlp/images/5/5d/Nurse_Redheart_ID_S7E3.png/revision/latest?cb=20170503175548",
        description: "**Nurse Redheart** is an Earth pony who works at Ponyville Hospital.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.White
    },
    {
        name: "Orange Slice",
        image: "https://static.wikia.nocookie.net/mlp/images/5/54/Orange_Slice_ID_S6E12.png/revision/latest?cb=20160611214758",
        description: "**Orange Slice** is an Earth pony background character who is the wife of Chargril Breadwinner",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Petunia Petals",
        image: "https://static.wikia.nocookie.net/mlp/images/2/23/Petunia_Petals_ID_MLPRR.png/revision/latest?cb=20220615230152",
        description: "**Petunia Petals** is an Earth pony who works as a hotel manager in Hope Hollow.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkVividPink
    },
    {
        name: "Photo Finish",
        image: "https://static.wikia.nocookie.net/mlp/images/c/c0/Photo_Finish_S1E20_thumb.png/revision/latest?cb=20120627225352",
        description: "**Photo Finish** is an Earth pony who is a famous photographer in Equestria.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Purple
    },
    {
        name: "Prim Hemline",
        image: "https://static.wikia.nocookie.net/mlp/images/b/b5/Prim_Hemline_ID_S4E08.png/revision/latest?cb=20140107052458",
        description: "**Prim Hemline** is an Earth pony who is a fashion critic. She is the judge for Manehattan's Fashion Week.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LuminousVividPink
    },
    {
        name: "Professor Fossil",
        image: "https://static.wikia.nocookie.net/mlp/images/b/ba/Professor_Fossil_ID_S7E25.png/revision/latest?cb=20171012052922",
        description: "**Professor Fossil** is an Earth pony who is the professor of an archeological dig at Rockhoof's island home.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LightGrey
    },
    {
        name: "\"Roma\"",
        image: "https://static.wikia.nocookie.net/mlp/images/d/d5/Roma_ID_S2E19.png/revision/latest?cb=20160113192129",
        description: "**\"Roma\"** is a background Earth pony with a fan-given name. She works as a market salespony.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Sapphire Shores",
        image: "https://static.wikia.nocookie.net/mlp/images/a/a5/Sapphire_Shores_ID_S4E19.png/revision/latest?cb=20140325182812",
        description: "**Sapphire Shores** is an Earth pony who is a famous popstar across Equestria. She is titled \"The Pony of Pop\" by Rarity.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Blue
    },
    {
        name: "Shimmy Shake",
        image: "https://static.wikia.nocookie.net/mlp/images/d/dd/Shimmy_Shake_ID_S9E15.png/revision/latest?cb=20190810210717",
        description: "**Shimmy Shake** is an Earth pony who is a cheerleader at Twilight's School of Friendship.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Spoiled Rich",
        image: "https://static.wikia.nocookie.net/mlp/images/6/6d/Spoiled_Rich_ID_S5E18.png/revision/latest?cb=20151020181406",
        description: "**Spoiled Rich** is an Earth pony who is the mother of Diamond Tiara, and the wife of Filthy Rich.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.DarkVividPink
    },
    {
        name: "Suri Polomare",
        image: "https://static.wikia.nocookie.net/mlp/images/3/32/Suri_Polomare_ID_S4E08.png/revision/latest?cb=20140107052206",
        description: "**Suri Polomare** is an Earth pony who stole Rarity's designs and fabric.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.LuminousVividPink
    },
    {
        name: "Teddie Safari",
        image: "https://static.wikia.nocookie.net/mlp/images/e/e5/Teddie_Safari_ID_S4E22.png/revision/latest?cb=20140609074155",
        description: "**Teddie Surfari** is a background Earth pony who is a collector of Daring Do merchandise.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Orange
    },
    {
        name: "Torch Song",
        image: "https://static.wikia.nocookie.net/mlp/images/1/11/Torch_Song_ID_S4E14.png/revision/latest?cb=20140219064437",
        description: "**Torch Song** is an Earth pony who is a member of \"The Pony Tones\", a vocal group.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Torque Wrench",
        image: "https://static.wikia.nocookie.net/mlp/images/4/4e/Torque_Wrench_ID_MLPRR.png/revision/latest?cb=20220615230156",
        description: "**Torque Wrench** is an Earth pony who appears in \"Rainbow Roadtrip\" as a repairer in Hope Hollow.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Trapeze Star",
        image: "https://static.wikia.nocookie.net/mlp/images/a/a8/Trapeze_Star_ID_S6E20.png/revision/latest?cb=20160919000956",
        description: "**Trapeze Star** is an Earth pony who appears as a trapeze artist in Pone Fantastique.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Yellow
    },
    {
        name: "Tree Hugger",
        image: "https://static.wikia.nocookie.net/mlp/images/3/35/Tree_Hugger_ID_S5E7.png/revision/latest?cb=20151209190014",
        description: "**Tree Hugger** is an Earth pony who is friends with Fluttershy. She caused Discord to get jealous after he saw her hanging out with Fluttershy a lot, and attempted to crash the Grand Galloping Gala when Fluttershy took her instead of Discord. Like Fluttershy, she also has a gift in animals.",
        gen: Generation.G4,
        type: Species.Earth,
        color: Colors.Green
    },
    {
        name: "Thorax",
        image: "https://static.wikia.nocookie.net/mlp/images/c/c1/Thorax_new_form_ID_S6E26.png/revision/latest?cb=20161024191324",
        description: "**King Thorax** is a changeling who helped reform the Changeling Kingdom with Starlight Glimmer and Discord. Thorax believed at a young age that changelings shouldn't feed off of other's loves, and eventually disguised himself as a pony in the Crystal Empire to attempt to gain a good reputation. He was eventually caught, but proved himself worthy. Later on, he would assist Discord and Starlight Glimmer in overthrowing Queen Chrysalis after the Mane 6 went missing.",
        gen: Generation.G4,
        type: Species.Changeling,
        color: Colors.Green,
        firstAppeared: {
            season: 6,
            episode: 2
        }
    }
]

export { Ponies }