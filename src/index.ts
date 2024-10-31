import { Client as DiscordClient, Collection, IntentsBitField } from "discord.js";


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

});

process.on('warning', (warning) => {
    console.warn("Warning");
    console.warn(warning.name);
    console.warn(warning.message);
    console.warn(warning.stack);
});
