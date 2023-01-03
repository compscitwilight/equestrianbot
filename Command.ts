import { SlashCommandBuilder, Interaction } from "discord.js";
export default interface Command {
    data: SlashCommandBuilder,
    autocomplete: (interaction: Interaction) => any,
    execute: (interaction: Interaction) => any
}