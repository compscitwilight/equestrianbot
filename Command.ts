import { SlashCommandBuilder, Interaction } from "discord.js";
export default interface Command {
    data: SlashCommandBuilder,
    execute: (interaction: Interaction) => any
}