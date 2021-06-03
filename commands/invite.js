const createBar = require("string-progressbar");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Gives you invite link",
  execute(message) {
  
    let nowPlaying = new MessageEmbed()
      .setTitle("Invite ")
      .setDescription(`
      __WOW!__ Greate I was made by <@519666024220721152> You can add me and also join my support server by links below \n **Invite:** [Click Here](https://discord.com/api/oauth2/authorize?client_id=804299863277174805&permissions=8&scope=bot%20applications.commands)\n **Support Server:** [Click Here](https://discord.gg/gU7XAxTpX5) \n **Web-Dashboard:** [Click Here](https://bot-site.gamingdiwas.repl.co/) `)
      .setColor("#F8AA2A")
      .setAuthor(message.client.user.username);
      
      return message.channel.send(nowPlaying);

    

    
  }
};
