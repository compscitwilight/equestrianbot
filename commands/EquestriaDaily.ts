import { Interaction, SlashCommandBuilder } from "discord.js";
import Command from "../Command";
import { getFormattedFeed } from "../utils/EQDFeed";

export default {
    data: new SlashCommandBuilder()
        .setName("equestriadaily")
        .setDescription("Sends the latest EquestriaDaily post."),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let feed = await getFormattedFeed();
        interaction.reply("WIP");
    }
} as Command