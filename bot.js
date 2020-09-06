const Discord = require('discord.js');
const client = new Discord.Client();    

client.once('ready', ()=> {
    console.log('Ready');
    var bot_command_spam = client.channels.cache.get("750169625261768727")
    //bot_command_spam.send("Hello I am Ready to Rick 'N Roll")

    //client.guilds.cache.each((guild)=>{console.log(guild.name)
    //guild.channels.cache.each((channel)=> {console.log(`-- ${channel.name} (${channel.type}) - ${channel.id}`) })
    })


client.on('message',(recieved)=> {
    //don't let bot talk to itself
    if (recieved.author == client.user) {
        return
    }

    if (recieved.content.startsWith('!')){
        handleCommand(recieved);
    } else { 
        // recieved.channel.send(`Stop messaging in ${recieved.channel.name}`)
        // recieved.channel.send(`you said ${recieved.content}`)
    }

    
})

function handleCommand(messageInfo) {
    cmdStr = messageInfo.content.substr(1)
    splitCmd = cmdStr.split(" ")
    switch(splitCmd[0]) {
        case 'help':
            messageInfo.channel.send(`You don't get any help`)
    }
}


//bot registered 
token = 'NzUwMjAzNzUzODMwOTQwNzIy.X03HsQ.hOUIKawlXZj0bTHfoG1s6twjSn0'
client.login(token);



