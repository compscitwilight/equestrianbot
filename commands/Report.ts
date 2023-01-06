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
        let modal = new ModalBuilder({
            customId: "report",
            title: "EquestrianBot Report"
        });

        let subjectInput = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder({
                customId: "title",
                placeholder: "Title (briefly describe your report)",
                maxLength: 25,
                minLength: 10,
                required: true,
                style: TextInputStyle.Short
            })
        )

        let descriptionInput = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder({
                customId: "description",
                placeholder: "Description of your report.",
                maxLength: 1000,
                minLength: 25,
                required: true,
                style: TextInputStyle.Paragraph
            })
        )

        interaction.showModal(modal);
    }
} as Command;