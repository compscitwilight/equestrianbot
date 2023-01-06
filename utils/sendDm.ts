import { EmbedBuilder, Interaction, MessageCreateOptions } from "discord.js";
export async function sendDm(interaction: Interaction, msg: MessageCreateOptions) {
    if (!interaction.isRepliable()) return;
    let dmChannel = await interaction.user.createDM(true);

    function cannotDmResponse() {
        return {
            content: "Sorry, but I cannot DM you as your DMs seem to be private\nHere's how you can enable your DMs\nhttps://cdn.discordapp.com/attachments/1041019407318663241/1061054600767090840/enabling_dms_1.png\nhttps://cdn.discordapp.com/attachments/1041019407318663241/1061054601169747988/enabling_dms_2.png",
            ephemeral: true
        }
    }

    dmChannel.send(msg).catch(() => {
        let response = cannotDmResponse();
        if (interaction.replied) {
            interaction.followUp(response);
            return
        }
        interaction.reply(response);
        return;
    });
}