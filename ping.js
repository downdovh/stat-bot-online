exports.run = async (client, message, args, level) => { 
  const msg = await message.channel.send("🏓 Ping!");
  msg.edit(`🏓 Pong! (Roundtrip took: ${msg.createdTimestamp - message.createdTimestamp}ms. 💙: ${Math.round(client.ping)}ms.)`);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'ping',
	category: 'Miscelaneous',
	description: 'For checking response time',
	usage: 'ping'
};
