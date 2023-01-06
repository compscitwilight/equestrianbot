import Command from "../Command";
import {
    ActionRowBuilder,
    ModalBuilder,
    SlashCommandBuilder,
    TextInputStyle,
    Interaction,
    TextInputBuilder,
    ModalActionRowComponentBuilder
} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("report")
        .setDescription("Report bugs or suggest changes to the developer of the bot."),
    execute: async (interaction: Interaction) => {
        if (!interaction.isChatInputCommand()) return;
        let subjectInput = new ActionRowBuilder<ModalActionRowComponentBuilder>({
            components: [new TextInputBuilder({
                placeholder: "Subject (briefly describe your report)",
                maxLength: 25,
                minLength: 10,
                required: true,
                style: TextInputStyle.Short
            })]
        })

        let descriptionInput = new ActionRowBuilder<ModalActionRowComponentBuilder>({
            components: [new TextInputBuilder({
                placeholder: "Description of your report.",
                maxLength: 1000,
                minLength: 25,
                required: true,
                style: TextInputStyle.Paragraph
            })]
        })

        let modal = new ModalBuilder({
            customId: "report_modal",
            title: "EquestrianBot Report",
            components: [subjectInput, descriptionInput]
        });

        await interaction.showModal(modal);
    }
} as Command;