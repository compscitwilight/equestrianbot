import { AutocompleteInteraction, Interaction, SlashCommandBuilder, SlashCommandStringOption } from "discord.js";
import Command from "../Command"
import { getPony, Ponies } from "../data/ponies.data";
import { CreatePonyEmbed } from "../embeds/Pony";

export default {
    data: new SlashCommandBuilder()
        .setName("ponyinfo")
        .setDescription("Returns an embed containing information about a pony being searched.")
        .addStringOption((option: SlashCommandStringOption) =>
            option.setName("pony")
                .setDescription("The pony that you want information about.\n(NOTE: Not all characters are listed. Use </ponylist:0> to list all characters.")
                .setAutocomplete(true)
                .setRequired(true)
        ),
    autocomplete: async (interaction: AutocompleteInteraction) => {
        const val = interaction.options.getFocused(true);
        const choices = Ponies.map((pony) => {
            return pony.name;
        });
        choices.length = 25;

        const filtered = choices.filter((choice) => {
            return choice.toLowerCase().startsWith(val.value.toLowerCase());
        });

        await interaction.respond(filtered.map((choice) => ({name: choice, value: choice})));
    },
    execute: (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let options = ((interaction as unknown) as AutocompleteInteraction).options;
        let arg = options.getString("pony");
        if (!arg) return;

        let pony = getPony(arg);
        if (!pony) return;

        let embed = CreatePonyEmbed(pony);
        interaction.reply({
            embeds: [embed]
        })
    }
} as Command;