let handler = async m => m.reply(`
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
│
│ - Saweria
│ •https://saweria.co/HarukaMD
│
╰───────────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['Sedekah']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
