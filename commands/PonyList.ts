import Command from "../Command";
import { Interaction, SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
import { Ponies } from "../data/ponies.data";

export default {
    data: new SlashCommandBuilder()
        .setName("ponylist")
        .setDescription("Returns a list of all of the characters.")
        .setDMPermission(true),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        interaction.reply("I've sent a list to your DMs.");

        let list = Ponies.map((pony) => {
            return `${pony.name}`;
        })

        let dmChannel = await interaction.user.createDM(true);
        if (!dmChannel) {
            interaction.reply({
                content: "Sorry, but I am not allowed to send you any direct messages."
            })
            return;
        }

        let msg = "";
        for (var i = 0; i < list.length; i++) {
            let listing = list[i];
            msg += `**•** \`\`${listing}\`\`\n`
        }

        dmChannel.send({
            content: msg
        })
    }
} as Command