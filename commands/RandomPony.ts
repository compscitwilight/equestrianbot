import { SlashCommandBuilder, Interaction, ActionRowBuilder, ButtonBuilder, ButtonStyle, ButtonInteraction } from "discord.js";
import { CreatePonyEmbed } from "../embeds/Pony";
import { Ponies } from "../data/ponies.data";
import Command from "../Command";

function getRandomPonyEmbed() {
    let index = Math.floor(Math.random() * Ponies.length);
    let pony = Ponies[index];
    let embed = CreatePonyEmbed(pony);
    return embed;
}

export default {
    data: new SlashCommandBuilder()
        .setName("randompony")
        .setDescription("Sends a random pony with a brief description, image, and "),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let repeatButton = new ButtonBuilder({
            customId: "primary",
            label: "Get another",
            style: ButtonStyle.Success
        });
        let row = new ActionRowBuilder<ButtonBuilder>({
            components: [repeatButton]
        });
        let collector = interaction.channel.createMessageComponentCollector();
        collector.on("collect", async (collectorInteraction: ButtonInteraction) => {
            if (!collectorInteraction.isButton()) return;
            let embed = getRandomPonyEmbed();
            await interaction.followUp({
                content: "🎲 RandomPony!",
                embeds: [embed],
                components: [row]
            })
            repeatButton.setDisabled(true);
            collector.stop();
        })

        let embed = getRandomPonyEmbed();
        await interaction.reply({
            content: "🎲 RandomPony!",
            embeds: [embed],
            components: [row]
        });
    }
} as Command;