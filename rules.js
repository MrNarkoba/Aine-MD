let handler = async m => m.reply(`

*RULES BOT*
-JANGAN SPAM BOT
-JANGAN TELPON/VC BOT
-JANGAN CHAT BOT/OWNER UNTUK MINTA SAVE
*MELANGGAR?* ( *BANED PERMANEN* )

Donasi
  - E-money
  •  ( Dana/OVO/Gopay )

  - PULSA
  •  ( Smartfren )
  •  ( IM3 )

  - Saweria
  • 

`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rul(es|aturan)$/i

module.exports = handle
