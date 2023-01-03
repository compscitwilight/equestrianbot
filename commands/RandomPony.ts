import { SlashCommandBuilder, Interaction, Colors } from "discord.js";
import { CreatePonyEmbed } from "../embeds/Pony";
import { Ponies } from "../data/ponies.data";

export default {
    data: new SlashCommandBuilder()
        .setName("randompony")
        .setDescription("Sends a random pony with a brief description, image, and "),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let index = Math.floor(Math.random() * Ponies.length);
        let pony = Ponies[index];
        let embed = CreatePonyEmbed(
            pony.name,
            pony.description
        )

        if (pony.image)
            embed.setImage(pony.image);

        if (pony.color)
            embed.setColor(pony.color);

        interaction.reply({
            content: "🎲 RandomPony!",
            embeds: [embed]
        });
    }
}