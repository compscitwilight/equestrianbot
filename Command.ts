import { SlashCommandBuilder, Interaction, AutocompleteInteraction, SlashCommandStringOption } from "discord.js";
export default interface Command {
    data: SlashCommandBuilder,
    disabled?: boolean,
    autocomplete?: (interaction: AutocompleteInteraction) => any,
    execute: (interaction: Interaction) => any
}