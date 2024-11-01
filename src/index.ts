import { Client as DiscordClient, Collection, IntentsBitField } from "discord.js";

console.log('InsID-Bot ' + process.env.npm_package_version);
console.log('Verkkopeliyhdistys Insomnia ry - Identity Bot');
console.log('(c)2024 Verkkopeliyhdistys Insomnia ry & Warén Group');
console.log('');

console.log('[Bot] Starting');

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
