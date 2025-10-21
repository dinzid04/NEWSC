require("./Lyrra")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//
global.owner = "6283191939584"
global.namaBot = "Lyrra"
global.namaOwner = "Zion"
global.linkch = "https://whatsapp.com/channel/0029VbAwb7Y11ulWUcmu1S2p"
// Foto Message
global.thumbnail = './_menu.jpg'
global.thumbnail2 = "https://raw.githubusercontent.com/ryzz001/game/refs/heads/main/30effa69ffcb2f73c5ede83955a34635.jpg"


// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https"
global.apikeyV2 = "ptla" //ptla
global.capikeyV2 = "ptlc" //ptlc

// Message
global.mess = {
 owner: "Maaf hanya untuk owner bot",
 prem: "Maaf hanya untuk pengguna premium",
 admin: "Maaf hanya untuk admin group",
 botadmin: "Maaf bot harus dijadikan admin",
 group: "Maaf hanya dapat digunakan di dalam group",
 private: "Silahkan gunakan fitur di private chat",
}

global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
