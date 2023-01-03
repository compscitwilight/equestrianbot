import { AutocompleteInteraction, Interaction, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
import Command from "../Command"
import { Ponies } from "../data/ponies.data";

export default {
    data: new SlashCommandBuilder()
        .setName("ponyinfo")
        .setDescription("Returns an embed containing information about a pony being searched.")
        .addStringOption((option: SlashCommandStringOption) =>
            option.setName("pony")
                .setDescription("The pony that you want information about.")
                .setAutocomplete(true)
        ),
    autocomplete: async (interaction: AutocompleteInteraction) => {
        const val = interaction.options.getFocused(true);
        console.log(val);
        const choices = Ponies.map((pony) => {
            return pony.name;
        });
        const filtered = choices.filter((choice) => choice.startsWith(val.value));
        await interaction.respond(filtered.map((choice) => ({name: choice, value: choice})));
    },
    execute: (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        interaction.reply("Hi");
    }
} as Command;