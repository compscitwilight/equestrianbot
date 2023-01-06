import { Client, ActivityType, Interaction, REST, Routes, User, GuildMember } from "discord.js";
import { readdirSync } from "fs";
import Command from "./Command";
import Config from "./config.json";

let commands = new Array<Command>();
export let client = new Client({
    intents: ["Guilds"]
});

for (const cmd of readdirSync("./commands")) {
    let data: Command = require("./commands/" + cmd).default;
    commands.push(data);
}

function updateStatusCount() {
    let guilds = client.guilds.cache
    client.user.setActivity({
        type: ActivityType.Watching,
        name: `${guilds.size} servers across Equestria!`
    })
}

client.on("ready", async () => {
    console.log("EquestrianBot is now online.");
    updateStatusCount();

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
    if (!interaction.isRepliable()) return;

    let command: Command;
    if (interaction.isChatInputCommand()) {
        command = commands.find((c: Command) => {
            return c.data.name == interaction.commandName;
        })

        await command.execute(interaction);
    }
    
    if (!command) {
        await interaction.reply({
            content: "Invalid command.",
            ephemeral: true
        })
        return
    }

    if (interaction.isAutocomplete()) {
        let cmd = (command as Command);
        if (!cmd.autocomplete) return;

        await cmd.autocomplete(interaction);
    }
})

client.on("guildCreate", () => updateStatusCount());
client.on("guildDelete", () => updateStatusCount());

client.login(Config.token);