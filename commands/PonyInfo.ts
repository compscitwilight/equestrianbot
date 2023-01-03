import { Interaction, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
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
    execute: async (interaction: Interaction) => {
        if (interaction.isAutocomplete()) {
            const val = interaction.options.getFocused();
            console.log(val);
            const choices = Ponies.map((pony) => {
                return pony.name;
            });
            const filtered = choices.filter((choice) => choice.startsWith(val));
            await interaction.respond(filtered.map((choice) => ({name: choice, value: choice})));
        }
    }
} as Command;