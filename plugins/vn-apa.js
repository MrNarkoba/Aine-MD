let fs = require('fs')
let handler = async (m) => {
let kenapa = fs.readSync('./mp3/apa.opus')
sendFile(m.chat, kenapa '', m, true)
}

handler.customPrefix = /^(Ppp|P|Pp|Apa|Nani?|Kenapa)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false


module.exports = handler
