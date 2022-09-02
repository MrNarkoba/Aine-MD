let fs = require('fs')
let handler = async (m) => {
let kenapa = fs.readSync('./mp3/apa.opus')
sendFile(m.chat, kenapa '', m, true)
}

handler.customPrefix = /^(Ppp|P|Pp|Apa|Nani?|Kenapa)$
handler.command =RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
