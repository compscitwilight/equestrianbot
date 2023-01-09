import Command from "../Command";
import {
    ActionRowBuilder,
    ModalBuilder,
    SlashCommandBuilder,
    TextInputStyle,
    Interaction,
    TextInputBuilder,
    StringSelectMenuBuilder
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
            placeholder: "The subject of your report",
            style: TextInputStyle.Short,
            required: true
        });

        const reportType = new StringSelectMenuBuilder({
            customId: "type",
            placeholder: "Report Type",
            options: [
                { label: "Bug / Issue", description: "Any type of bug or issue in the bot.", value: "bug" },
                { label: "Feature Suggestion", description: "Any kind of feature that you would like to see implemented.", value: "feature" },
                { label: "Character Edit", description: "If you find an issue in any of the character embeds, then use this option.", value: "character" },
                { label: "Other", description: "Any other type of report that hasn't been specified.", value: "other" }
            ]
        });

		const description = new TextInputBuilder({
            customId: "description",
            label: "Description",
            placeholder: "Description of your report.",
            style: TextInputStyle.Paragraph,
            required: true
        });

		const firstActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(subject);
		const secondActionRow = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(reportType);
        const thirdActionRow = new ActionRowBuilder<TextInputBuilder>().addComponents(description);

		modal.addComponents(firstActionRow, thirdActionRow);
        //modal.addComponents(secondActionRow);
		await interaction.showModal(modal);
    }
} as Command;