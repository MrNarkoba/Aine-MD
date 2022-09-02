let fs = require('fs')
let handler = async (m) => {
let bg = fs.readSync('./mp3/onichan.opus')
sendFile(m.chat, bg '', m, true)
}

handler.customPrefix = /^(Onichan|Bg|Loli|Loli kawai)$
handler.command =RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
