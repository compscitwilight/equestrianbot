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
                label: "Subject (briefly describe your report)",
                required: true,
                style: TextInputStyle.Short
            })]
        })

        let descriptionInput = new ActionRowBuilder<ModalActionRowComponentBuilder>({
            components: [new TextInputBuilder({
                label: "Description of your report.",
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