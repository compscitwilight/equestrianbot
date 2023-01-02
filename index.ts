import { Client, Collection, Interaction, REST, Routes } from "discord.js";
import { readdirSync } from "fs";
import Command from "./Command";
import Config from "./config.json";

let commands = new Array<Command>();
let client = new Client({
    intents: ["Guilds"]
});

for (const cmd of readdirSync("./commands")) {
    let data: Command = require("./commands/" + cmd).default;
    commands.push(data);
}

client.on("ready", async () => {
    console.log("EquestrianBot is now online.")

    const rest = new REST({version: "10"}).setToken(Config.token);
    console.log("Refreshing slash commands.");
    await rest.put(
        Routes.applicationCommands(Config.clientId),
        { body: commands.map((c: Command) => {
            console.log(c);
            return c.data;
        }) }
    );
    console.log("Successfully loaded commands.");
})

client.on("interactionCreate", async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) return;
    let command = commands.find((c: Command) => {
        return c.data.name == interaction.commandName;
    });
    if (!command) {
        console.warn(`Command ${interaction.commandName} was not initialized.`);
        return
    };

    try {
        await (command as Command).execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: "An error occured within the bot.",
            ephemeral: true
        });
    }
})

client.login(Config.token);