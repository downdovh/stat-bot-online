const fs = require('fs');

const accList = ["NITRO", "NORDVPN", "SPOTIFY","DISNEYPLUS","HULU","UPLAY","2K","FORTNITE"];
const accFiles = ["./accs/nitro.txt", "./accs/nordvpn.txt", "./accs/spotify.txt", "./accs/disneyplus.txt","./accs/hulu.txt","./accs/uplay.txt","./accs/2k.txt","./accs/fortnite.txt"]

exports.run = async (client, message, args, level) => { 
  var msgs = message.content.split(" ");
  if(msgs[1] && accList.includes(msgs[1].toUpperCase())){
    genAcc(msgs[1].toUpperCase(), function(account){
      message.author.send(account);
    });
  }else {
    message.channel.send("Please enter an valid account");
  }
};



function genAcc(accName, callback){
  const index = accList.indexOf(accName);
  
  if(fs.existsSync(accFiles[index])){
    fs.readFile(accFiles[index], "utf8", (err, data) => {
      if (err){
        throw err;
        callback("ERROR GETTING ACCOUNT");
      }

      var accs = data.split("\n");
      callback(accs[Math.floor(Math.random() * accs.length)]);
    });
  }else{
    callback("ERROR GETTING ACCOUNT");
  }
}


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	
};

exports.help = {
	name: 'gen',
	category: 'Miscelaneous',
	description: 'Generate account',
	usage: 'gen'
};
