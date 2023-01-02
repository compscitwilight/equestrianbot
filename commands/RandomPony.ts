import { SlashCommandBuilder, Interaction, CacheType, Colors } from "discord.js";
import { CreatePonyEmbed } from "../embeds/Pony";

export default {
    data: new SlashCommandBuilder()
        .setName("randompony")
        .setDescription("Sends a random pony with a brief description, image, and "),
    execute: async (interaction: Interaction) => {
        if (!interaction.isRepliable()) return;
        let embed = CreatePonyEmbed(
            "Twilight Sparkle",
            "Twilight Sparkle is the Princess of Friendship",
            "https://upload.wikimedia.org/wikipedia/en/b/b4/PrincessTwilightSparkle.png?20190522020410",
            Colors.Purple
        )
        interaction.reply({
            content: "Randompony is currently under development, but for now here's some info about Twilight Sparkle.",
            embeds: [embed]
        });
    }
}