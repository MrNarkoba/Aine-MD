let handler = async m => m.reply(`

*RULES BOT*
- HARUS SUBSCRIBE CHANNEL GUA
- GA SUBSCRIBE GUA SUMPAH IN 
- LU GAGU SEUMUR HIDUP LU
-JANGAN SPAM BOT
-JANGAN TELPON/VC BOT
-JANGAN CHAT BOT/OWNER UNTUK MINTA SAVE
*MELANGGAR?* ( *BANED PERMANEN* )

╭─「 Donasi 」
│
│  DONASI SEIKHLASNYA BANG :)
│
│ - E-money
│ • 087887173186 ( Dana )
│
│ - PULSA
│ • 081283186765 ( TELKOMSEL )
│  
│ - Saweria
│ •https://saweria.co/HarukaMD
│
 | - Link YouTube
 | •https://tinyurl.com/2jxrhho6
╰───────────

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rul(es|aturan)$/i

module.exports = handler
