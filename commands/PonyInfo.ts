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
            return choice.toLowerCase().startsWith(val.value.toLowerCase());
        });

        await interaction.respond(filtered.map((choice) => ({name: choice, value: choice})));
    },
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let options = ((interaction as unknown) as AutocompleteInteraction).options;
        let arg = options.getString("pony");
        if (!arg) return;

        let pony = getPony(arg);
        if (!pony) {
            interaction.reply({content: "Invalid pony", ephemeral: true});
            return;
        };

        let button = new ButtonBuilder({
            customId: "primary",
            label: "Get a random pony",
            style: ButtonStyle.Success
        });
        let row = new ActionRowBuilder<ButtonBuilder>({
            components: [button]
        });

        let collector = interaction.channel.createMessageComponentCollector({time: 15000});
        collector.on("collect", (interaction) => {
            RandomPony.execute(interaction);
        })

        let embed = CreatePonyEmbed(pony);
        await interaction.reply({
            content: "Loaded!",
            embeds: [embed],
            components: [row]
        })
    }
} as Command;