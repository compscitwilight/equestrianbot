import { SlashCommandBuilder, Interaction, ActionRowBuilder, ButtonBuilder, ButtonStyle,  } from "discord.js";
import { CreatePonyEmbed } from "../embeds/Pony";
import { Ponies } from "../data/ponies.data";
import Command from "../Command";

function sendRandomPony(interaction: Interaction) {
    if (!interaction.isRepliable()) return;
    let index = Math.floor(Math.random() * Ponies.length);
    let pony = Ponies[index];
    let embed = CreatePonyEmbed(pony);

    interaction.reply({
        content: "🎲 RandomPony!",
        embeds: [embed]
    });
}

export default {
    data: new SlashCommandBuilder()
        .setName("randompony")
        .setDescription("Sends a random pony with a brief description, image, and "),
    execute: async (interaction: Interaction) => {
        let repeatButton = new ButtonBuilder({
            customId: "primary",
            label: "Get another",
            style: ButtonStyle.Success
        })
        let row = new ActionRowBuilder({components: [repeatButton]})
        let collector = interaction.channel.createMessageComponentCollector({time: 15000});
        collector.on("collect", () => {
            sendRandomPony(interaction);
        })

        sendRandomPony(interaction);
    }
} as Command;