import {
    AutocompleteInteraction,
    Interaction,
    SlashCommandBuilder,
    SlashCommandStringOption,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} from "discord.js";
import Command from "../Command"
import { getPony, Ponies } from "../data/ponies.data";
import { CreatePonyEmbed } from "../embeds/Pony";
import RandomPony from "./RandomPony";

export default {
    data: new SlashCommandBuilder()
        .setName("ponyinfo")
        .setDescription("Returns an embed containing information about a pony being searched.")
        .addStringOption((option: SlashCommandStringOption) =>
            option.setName("pony")
                .setDescription("Use /ponylist to list all characters.")
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
            return choice.toLowerCase().includes(val.value.toLowerCase());
        });
        filtered.sort();

        await interaction.respond(filtered.map((choice) => ({name: choice, value: choice})));
    },
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        if (interaction.channel.isDMBased()) return;
        let options = ((interaction as unknown) as AutocompleteInteraction).options;
        let arg = options.getString("pony");
        if (!arg) return;

        let pony = getPony(arg);
        if (!pony) {
            interaction.reply({content: "Invalid pony", ephemeral: true});
            return;
        };

        let embed = CreatePonyEmbed(pony);
        await interaction.reply({
            content: "Loaded!",
            embeds: [embed]
        })
    }
} as Command;