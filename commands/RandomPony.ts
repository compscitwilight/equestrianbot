import { SlashCommandBuilder, Interaction, CacheType } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("randompony")
        .setDescription("Sends a random pony with a brief description, image, and "),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        interaction.reply("S");
    }
}