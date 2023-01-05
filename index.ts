import { Client, ActivityType, Interaction, REST, Routes } from "discord.js";
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
    let totalMemberCount = 0;
    let guilds = client.guilds.cache
    for (var i = 0; i < guilds.size; i++) {
        let guild = guilds.at(i);
        let members = guild.members.cache;
        for (var m = 0; m < members.size; m++) {
            let member = Object.values(members)[m];
            if (!member.user.bot)
                totalMemberCount += 1;
        }

    }

    client.user.setActivity({
        type: ActivityType.Watching,
        name: `${guilds.size} servers & ${totalMemberCount} ponies across Equestria!`
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
    if (interaction.isChatInputCommand()) {
        let command = commands.find((c: Command) => {
            return c.data.name == interaction.commandName;
        });

        await (command as Command).execute(interaction);
        return;
    }

    if (interaction.isAutocomplete()) {
        let command = commands.find((c: Command) => {
            return c.data.name == interaction.commandName;
        });

        let cmd = (command as Command);
        if (!cmd.autocomplete) return;

        await cmd.autocomplete(interaction);
        return;
    }
})

client.on("guildCreate", () => updateStatusCount());
client.on("guildDelete", () => updateStatusCount());

client.login(Config.token);