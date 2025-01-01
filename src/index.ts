import Discord from "discord.js";
import logger from "./functions/logger"

console.log('InsID-Bot ' + process.env.npm_package_version);
console.log('Verkkopeliyhdistys Insomnia ry - Identity Bot');
console.log('(c)2024-2025 Verkkopeliyhdistys Insomnia ry & Warén Group');
console.log('');

logger('Bot', 'Starting');

const discordClient = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.Guilds
    ]
});

discordClient.on('ready', () => {
    logger('Discord Client', 'Ready');
});

discordClient.on("interactionCreate", (interaction) => {
    logger('Discord Client', 'Interaction Create');
});

discordClient.on("guildMemberAdd", (member) => {
    logger('Discord Client', 'Guild Member Add');
});

discordClient.on("guildMemberRemove", (member) => {
    logger('Discord Client', 'Guild Member Remove');
});

discordClient.on("guildMemberUpdate", (oldMember, newMember) => {
    logger('Discord Client', 'Guild Member Update');
});

discordClient.login(process.env.DISCORD_TOKEN)
    .then(() => {
        logger('Discord Client', 'Login: Successful');
    })
    .catch(err => {
        logger('Discord Client', 'Login: Failed');
    });

process.on('SIGINT', () => {
    process.exit();
});

process.on('SIGTERM', () => {
    process.exit();
});

process.on('uncaughtException', (error) => {
    console.error("Error");
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
});

process.on('exit', () => {
    console.log('[Bot] Stopping');
});

process.on('warning', (warning) => {
    console.warn("Warning");
    console.warn(warning.name);
    console.warn(warning.message);
    console.warn(warning.stack);
});
