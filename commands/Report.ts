import Command from "../Command";
import {
    ActionRowBuilder,
    ModalBuilder,
    SlashCommandBuilder,
    TextInputStyle,
    Interaction,
    TextInputBuilder
} from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("report")
        .setDescription("Report bugs or suggest changes to the developer of the bot."),
    disabled: true,
    execute: async (interaction: Interaction) => {
        if (!interaction.isChatInputCommand()) return;
		const modal = new ModalBuilder({
            customId: "reportmodal",
            title: "Report suggestions or issues"
        });

		const subject = new TextInputBuilder({
            customId: "subject",
            label: "Subject",
            style: TextInputStyle.Short,
            required: true
        });

		const description = new TextInputBuilder({
            customId: "description",
            label: "Description",
            style: TextInputStyle.Paragraph,
            required: true
        });

		const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(subject);
		const secondActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(description);

		modal.addComponents(firstActionRow, secondActionRow);
		await interaction.showModal(modal);
    }
} as Command;