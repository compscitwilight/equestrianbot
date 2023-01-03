import { EmbedBuilder, Colors, Embed } from "discord.js";

export function CreatePonyEmbed(name: string, description?: string, image?: string, color?: number) {
    let embed = new EmbedBuilder({
        title: name,
        description: description || "No description avaliable",
        color: color || Colors.Purple,
        footer: {
            text: "DISCLAIMER: EquestrianBot does not own any of the images that are used."
        }
    })

    if (image) {
        embed.setImage(image);
    }

    return embed;
}