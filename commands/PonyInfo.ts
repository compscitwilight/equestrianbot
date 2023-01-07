import {
    AutocompleteInteraction,
    Interaction,
    SlashCommandBuilder,
    SlashCommandStringOption,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ButtonInteraction,
} from "discord.js";
import Command from "../Command"
import { getPony, Ponies, getFormattedList, Magic } from "../data/ponies.data";
import { CreatePonyEmbed } from "../embeds/Pony";
import { sendDm } from "../utils/sendDm";

export default {
    data: new SlashCommandBuilder()
        .setName("ponyinfo")
        .setDescription("Returns an embed containing information about a pony being searched.")
        .setDMPermission(true)
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

        let ponyListBtn = new ButtonBuilder({
            customId: "ponylist",
            label: "Get Pony List",
            style: ButtonStyle.Secondary
        });
        let actionRow = new ActionRowBuilder<ButtonBuilder>({
            components: [ponyListBtn]
        });

        if (pony.magic.magicImage) {
            actionRow.addComponents([
                new ButtonBuilder({
                    customId: "usemagic",
                    label: "Use magic",
                    style: ButtonStyle.Success
                })
            ])
        }
        
        let embed = CreatePonyEmbed(pony);
        await interaction.reply({
            content: "Loaded!",
            embeds: [embed],
            components: [actionRow]
        })

        let collector = interaction.channel.createMessageComponentCollector();
        collector.on("collect", async (button: ButtonInteraction) => {
            switch (button.customId) {
                case "ponylist":
                    let list = getFormattedList();
                    sendDm(interaction, {
                        content: list
                    });
                    break;
                case "usemagic":
                    embed.setTitle("Twilight Sparkle - Using magic");
                    embed.setImage(pony.magic.magicImage);
                    interaction.editReply({
                        embeds: [embed],
                        components: [actionRow]
                    });
                    break
            }

        })
    }
} as Command;