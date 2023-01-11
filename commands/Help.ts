import Command from "../Command";
import {
    SlashCommandBuilder,
    EmbedBuilder,
    Interaction
} from "discord.js";
export default {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("EquestrianBot user help guide."),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let helpEmbed = new EmbedBuilder({
            title: "EquestrianBot Help Guide",
            description: "**EquestrianBot Getting Started** - This embed will help you with using EquestrianBot.",
            fields: [
                { name: "Pony List", value: "</ponylist:1060105942110310490>", inline: true },
                { name: "Pony Info", value: "</ponyinfo:1059743898815184946> <ponyname>", inline: true },
                { name: "EquestrianBot Statistics", value: "</stats:1060155360909987890>", inline: true }
            ]
        })

        await interaction.reply({
            embeds: [helpEmbed]
        })
    }
} as Command;