exports.run = async (client, message, args, level) => { 
	const responses = [
		"It is certain",
		"It is decidedly so",
		"Without a doubt",
		"Yes – definitely",
		"You may rely on it",
		"As I see it",
		"yes",
		"Most Likely",
		"Outlook good",
		"Yes",
		"Signs point to yes"
	];

	const randomIndex = Math.floor(Math.random() * responses.length);
	message.reply(message, responses[randomIndex]);
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: '8ball',
	category: 'Miscelaneous',
	description: 'Play 8Ball',
	usage: '8ball'
};
