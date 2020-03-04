const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
    let embed = {
      title: "Help Commands",
      color: 0x33DDFF,
      footer: {
        text: 'Made by: Yanko'
      },
      fields: [{
        name: '-gen hulu',
        value: 'This command sends a hulu account to your dms!'
      }, {
        name: '-gen nordvpn',
        value: 'This command sends a nordvpn account to your dms!'
      }, {
        name: '-gen nitro',
        value: 'This command sends you a unchecked nitro code in your dms!'
      }, {
         name: '-gen fortnite',
        value: 'This command sends your a fortnite account in your dms!'
      }, {
         name: '-gen netflix',
        value: 'This command sends you a netflix account in your dms!'
      }, {
         name: '-gen spotify',
        value: 'This command sends you a spotify account in your dms!'
      }, {
        name: '-stats',
        value: 'This command shows you the stats of the bot!'
      },{
        name: '-invite',
        value: 'This command gives you the invite link to the bot!'
      }, {
      name:'-support',
      value:'This command send you the invite link to our support server!'
      }, {
        name: '-8ball',
        value:'This command randomly makes an answer for your question!'
      },{
        name: '-coinflip',
        value: 'This command give you a heads or tails!'
      }, {
        name: '-members',
        value: 'This commands shows you how many people are in the server!'
        }, {
          name: '-gen fortnite',
        value: 'This commands shows you how many people are in the server!'
      }]
    }
    
    message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "help",
  category: "Miscelaneous",
  description: "shows you the help commands",
  usage: "help"
};

