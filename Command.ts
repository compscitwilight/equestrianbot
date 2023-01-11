import {
    SlashCommandBuilder,
    Interaction,
    AutocompleteInteraction,
    ModalSubmitInteraction
} from "discord.js";
export default interface Command {
    data: SlashCommandBuilder,
    disabled?: boolean,
    autocomplete?: (interaction: AutocompleteInteraction) => any,
    modalsubmit?: (interaction: ModalSubmitInteraction) => any,
    execute: (interaction: Interaction) => any
}