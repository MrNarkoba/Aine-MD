let handler = async m => m.reply(`
╭─「 Donasi • Dana 」
│ •  [0878-8717-3186]
│ •  [0878-8717-3186]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
