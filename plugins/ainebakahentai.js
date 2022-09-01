let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let aineess = fs.readFileSync('./mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus')
await conn.sendMessage(m.chat, { audio: { url: "./mp3/WhatsApp-Audio-2021-02-19-at-23.33.29.opus" }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(soundbakahentai)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = true 
handler.premium = true
handler.group = true
handler.private = true

module.exports = handler
