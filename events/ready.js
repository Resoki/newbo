const client = require('..');
const chalk = require('chalk');
const { EmbedBuilder, Collection, PermissionsBitField, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js')
const sdk = require('api')('@opensea/v1.0#mxj1ql5k6c0il');
const axios = require('axios');
const { QuickDB } = require('quick.db');
const db = new QuickDB(); // using 

client.on("ready", async() => {
	const activities = [
		{ name: `Bot DJS`, type: 5 }, // LISTENING
		{ name: `Discord.js v14`, type: 5 } // COMPETING
	];
	const status = ['Playing','Playing'];
	let i = 0;
	setInterval(() => {
		if(i >= activities.length) i = 0;
		client.user.setActivity(activities[i]);
		i++;
	}, 2000);

	let s = 0;
	setInterval(() => {
		if(s >= activities.length) s = 0;
		client.user.setStatus(status[s]);
		s++;
	}, 4000);
	console.log(chalk.red(`Logged in as ${client.user.tag}!`));
});
