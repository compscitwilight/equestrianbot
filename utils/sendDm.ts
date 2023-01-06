import { Interaction } from "discord.js";
export async function sendDm(interaction: Interaction, messageContent: string) {
    if (!interaction.isRepliable()) return;
    let dmChannel = await interaction.user.createDM(true);

    function cannotDmResponse() {
        return {
            content: "Sorry, but I cannot DM you as your DMs seem to be private",
            ephemeral: true
        }
    }

    if (!dmChannel) {
        let response = cannotDmResponse();
        if (interaction.replied) {
            interaction.followUp(response);
            return
        }
        interaction.reply(response);
        return;
    }

    dmChannel.send(messageContent);
}