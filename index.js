var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Programando a Kirisaki!",
assets : {
large_image : "chitoge",
large_text : "Programando!" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Discord" , url : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO'},{label : "Invitame!",url : 'https://discord.com/api/oauth2/authorize?client_id=763530936788320296&permissions=8&scope=bot'}]
}
})
})
client.login({ clientId : "798308085499559977" }).catch(console.error);