import { EmbedBuilder, Colors } from "discord.js";
import { Pony } from "../data/ponies.data";

export function CreatePonyEmbed(data: Pony) {
    let embed = new EmbedBuilder({
        title: data.name,
        description: data.description || "No description avaliable",
        color: data.color,
        fields: [
            {
                name: "Species",
                value: data.type,
                inline: true
            },
            {
                name: "Generation",
                value: data.gen,
                inline: true
            }
        ],
        footer: {
            text: "EquestrianBot does not own any of the images that are used.",
            iconURL: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/My_Little_Pony_G4_logo.svg/1024px-My_Little_Pony_G4_logo.svg.png"
        }
    })

    if (data.image) {
        embed.setImage(data.image);
    }

    if (data.cutieMark) {
        embed.setThumbnail(data.cutieMark);
    }

    let firstAppeared = data.firstAppeared;
    if (firstAppeared) {
        let date = "";
        date += "Season " + firstAppeared.season + " ";
        if (firstAppeared.episode)
            date += "Episode "+ firstAppeared.episode;
        embed.addFields([
            {
                name: "First Appeared",
                value: date,
                inline: true
            }
        ])
    }

    let magic = data.magic;
    if (data.magic) {
        let magicData = "";
        magicData += "`#" + magic.auraColor + "`\n";
        if (magic.type)
            magicData += magic.type;

        embed.addFields([
            {
                name: "Magic",
                value: magicData,
                inline: true
            }
        ])
    }

    return embed;
}