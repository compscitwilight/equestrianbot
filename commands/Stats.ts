import Command from "../Command";
import {
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Interaction,
    EmbedBuilder,
    AttachmentBuilder
} from "discord.js";
import { client } from "../"
import pckg from "../package.json";

export function getStatsEmbed() {
    let statsEmbed = new EmbedBuilder({
        title: "EquestrianBot statistics",
        fields: [
            {
                name: "Total Servers",
                value: String(client.guilds.cache.size),
                inline: true
            },
            {
                name: "Uptime",
                value: `${client.uptime}ms`,
                inline: true
            },
            {
                name: "Version",
                value: pckg.version,
                inline: true
            }
        ],
        footer: {
            text: "Created by rust#7643"
        }
    });
    statsEmbed.setThumbnail("https://static.wikia.nocookie.net/mlp/images/1/1c/Apple_Bloom_ID_S6E4.png/revision/latest?cb=20160411140505");
    return statsEmbed;
}

export function getExtendedStatsEmbed() {
    let statsEmbed = getStatsEmbed();
    statsEmbed.setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSdwjJDUmlpvn_8mgGowTqaks8SkdJCMxTyvdXJit2YjeAUJE4XJGLPeHIoXgBF71iNU4&usqp=CAU");
    statsEmbed.addFields([
        {
            name: "Node Version",
            value: process.version,
            inline: true
        },
        {
            name: "Platform",
            value: process.platform,
            inline: true
        },
        {
            name: "Language",
            value: "TypeScript",
            inline: true
        }
    ])

    return statsEmbed;
}

export default {
    data: new SlashCommandBuilder()
        .setName("stats")
        .setDescription("Shows statistics about the bot."),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        
        let button = new ButtonBuilder({
            customId: "primary",
            label: "Extended Stats",
            style: ButtonStyle.Secondary,
        })
        let row = new ActionRowBuilder<ButtonBuilder>({
            components: [button]
        })
        let collector = interaction.channel.createMessageComponentCollector({time: 15000});
        collector.on("collect", async () => {
            let extendedStatsEmbed = getExtendedStatsEmbed();
            await interaction.reply({
                embeds: [extendedStatsEmbed]
            })
            return;
        })

        let statsEmbed = getStatsEmbed();
        await interaction.reply({
            components: [row],
            embeds: [statsEmbed]
        })
    }
} as Command