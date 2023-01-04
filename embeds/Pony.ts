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
            text: "DISCLAIMER: EquestrianBot does not own any of the images that are used."
        }
    })

    if (data.image) {
        embed.setImage(data.image);
    }

    if (data.cutieMark) {
        embed.setThumbnail(data.cutieMark);
    }

    return embed;
}