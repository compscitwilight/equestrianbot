import { SlashCommandBuilder, Interaction, ActionRowBuilder, ButtonBuilder, ButtonStyle,  } from "discord.js";
import { CreatePonyEmbed } from "../embeds/Pony";
import { Ponies } from "../data/ponies.data";
import Command from "../Command";

export default {
    data: new SlashCommandBuilder()
        .setName("randompony")
        .setDescription("Sends a random pony with a brief description, image, and "),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let index = Math.floor(Math.random() * Ponies.length);
        let pony = Ponies[index];
        let embed = CreatePonyEmbed(pony);
    
        interaction.reply({
            content: "🎲 RandomPony!",
            embeds: [embed]
        });
    }
} as Command;