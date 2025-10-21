const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const moment = require("moment-timezone");
const { getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function.js');
const {
    spawn,
    exec,
    execSync
   } = require('child_process');
   const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
   let afk = require("./lib/afk");
let _afk = JSON.parse(fs.readFileSync('./lib/database/user.json'))
module.exports = async (sock, m, chatUpdate, store) => {
    try {
        const body = (
            m.mtype === "conversation" ? m.message.conversation :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
            m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "");

        const sender = m.key.fromMe ? sock.user.id.split(":")[0] + "@s.whatsapp.net" || sock.user.id
: m.key.participant || m.key.remoteJid;

        const senderNumber = sender.split('@')[0];
        const budy = (typeof m.text === 'string' ? m.text : '');
        const prefa = ["", "!", ".", ",", "🐤", "🗿"];

        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : `.`;
        const from = m.key.remoteJid;
        const isGroup = from.endsWith("@g.us");
        const isPrivate = from.endsWith("@s.whatsapp.net");

        const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"))
        const kontributor = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
        const botNumber = await sock.decodeJid(sock.user.id);
        const isOwner = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
        const cmd = prefix + command
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const sockdev = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        const isPremium = premium.includes(m.sender)
        const text = q = args.join(" ");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)

        const groupMetadata = m?.isGroup ? await sock.groupMetadata(m.chat).catch(() => ({})) : {};
        const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
        const participants = m?.isGroup ? groupMetadata.participants?.map(p => {
            let admin = null;
            if (p.admin === 'superadmin') admin = 'superadmin';
            else if (p.admin === 'admin') admin = 'admin';
            return {
                id: p.id || null,
                jid: p.jid || null,
                lid: p.lid || null,
                admin,
                full: p
            };
        }) || []: [];
        const groupOwner = m?.isGroup ? participants.find(p => p.admin === 'superadmin')?.jid || '' : '';
        const groupAdmins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.jid || p.id);
        const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m?.isGroup ? groupAdmins.includes(m.sender) : false;
        const isGroupOwner = m?.isGroup ? groupOwner === m.sender : false;
        const senderLid = (() => {
            const p = participants.find(p => p.jid === m.sender);
            return p?.lid || null;
        })();


const qkontak = {
key: {
participant: `13135550002@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
//
        const {
            smsg,
            fetchJson,
            sleep,
            formatSize,
            randomKarakter
            } = require('./lib/myfunction');

        if (m.message) {
            console.log('\x1b[30m--------------------\x1b[0m');
            console.log(chalk.bgHex("#e74c3c").bold(`▢ New Message`));
            console.log(
                chalk.bgHex("#00FF00").black(
                    `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
                    `   ⌬ Pesan: ${m.body || m.mtype} \n` +
                    `   ⌬ Pengirim: ${pushname} \n` +
                    `   ⌬ JID: ${senderNumber}`
                )
            );

            if (isGroup) {
                console.log(
                    chalk.bgHex("#00FF00").black(
                        `   ⌬ Grup: ${groupName} \n` +
                        `   ⌬ GroupJid: ${m.chat}`
                    )
                );
            }
            console.log();
        }

        const reaction = async (jidss, emoji) => {
            sock.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key
                }
            })
        };
async function getBuffer(url) {
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(res.data);
}
// Message
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const time2 = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var Waktu = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var Waktu = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var Waktu = `Selamat Malam 🌃`
 }
 if(time2 < "15:00:00"){
var Waktu = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var Waktu = `Selamat pagi 🌄`
 }
 if(time2 < "05:00:00"){
var Waktu = `Selamat Pagi 🌄`
 }


     try {
      const isNumber = x => typeof x === 'number' && !isNaN(x)
      const user = global.db.users[m.sender]
      if (typeof user !== 'object') global.db.users[m.sender] = {}
      const chats = global.db.chats[m.chat]
      if (typeof chats !== 'object') global.db.chats[m.chat] = {}

      if (chats) {
        if (!('antitagsw' in chats)) chats.antitagsw = false
        if (!('autoyoimiya' in chats)) chats.autoyoimiya = false
        if (!('antipromosi' in chats)) chats.antipromosi = false
        if (!('owneronly' in chats)) chats.owneronly = false
      } else global.db.chats[m.chat] = {
        owneronly: false,
        antitagsw: false,
        autoyoimiya: false,
        antipromosi: false
      }

      if (user) {
        if (!isNumber(user.subscribers)) user.subscribers = 0
        if (!isNumber(user.like)) user.like = 0
        if (!isNumber(user.viewers)) user.viewers = 0
        if (!isNumber(user.playButton)) user.playButton = 0
        if (!isNumber(user.lastLive)) user.lastLive = 0
        if (!isNumber(user.chip)) user.chip = 0
        if (!isNumber(user.level)) user.level = 0
        if (!isNumber(user.atm)) user.atm = 0
        if (!isNumber(user.money)) user.money = 0
        if (!isNumber(user.fullatm)) user.fullatm = 0
        if (!isNumber(user.bank)) user.bank = 0
        if (!isNumber(user.health)) user.health = 100
        if (!isNumber(user.potion)) user.potion = 0
        if (!isNumber(user.trash)) user.trash = 0
        if (!isNumber(user.wood)) user.wood = 0
        if (!isNumber(user.rock)) user.rock = 0
        if (!isNumber(user.string)) user.string = 0
        if (!isNumber(user.petfood)) user.petfood = 0
        if (!isNumber(user.emerald)) user.emerald = 0
        if (!isNumber(user.diamond)) user.diamond = 0
        if (!isNumber(user.gold)) user.gold = 0
        if (!isNumber(user.botol)) user.botol = 0
        if (!isNumber(user.kardus)) user.kardus = 0
        if (!isNumber(user.kaleng)) user.kaleng = 0
        if (!isNumber(user.gelas)) user.gelas = 0
        if (!isNumber(user.plastik)) user.plastik = 0
        if (!isNumber(user.iron)) user.iron = 0
        if (!isNumber(user.common)) user.common = 0
        if (!isNumber(user.uncommon)) user.uncommon = 0
        if (!isNumber(user.mythic)) user.mythic = 0
        if (!isNumber(user.legendary)) user.legendary = 0
        if (!isNumber(user.umpan)) user.umpan = 0
        if (!isNumber(user.pet)) user.pet = 0
        if (!isNumber(user.paus)) user.paus = 0
        if (!isNumber(user.kepiting)) user.kepiting = 0
        if (!isNumber(user.gurita)) user.gurita = 0
        if (!isNumber(user.cumi)) user.cumi = 0
        if (!isNumber(user.buntal)) user.buntal = 0
        if (!isNumber(user.dory)) user.dory = 0
        if (!isNumber(user.lumba)) user.lumba = 0
        if (!isNumber(user.lobster)) user.lobster = 0
        if (!isNumber(user.hiu)) user.hiu = 0
        if (!isNumber(user.udang)) user.udang = 0
        if (!isNumber(user.orca)) user.orca = 0
        if (!isNumber(user.banteng)) user.banteng = 0
        if (!isNumber(user.gajah)) user.gajah = 0
        if (!isNumber(user.harimau)) user.harimau = 0
        if (!isNumber(user.kambing)) user.kambing = 0
        if (!isNumber(user.panda)) user.panda = 0
        if (!isNumber(user.buaya)) user.buaya = 0
        if (!isNumber(user.kerbau)) user.kerbau = 0
        if (!isNumber(user.sapi)) user.sapi = 0
        if (!isNumber(user.monyet)) user.monyet = 0
        if (!isNumber(user.babihutan)) user.babihutan = 0
        if (!isNumber(user.babi)) user.babi = 0
        if (!isNumber(user.ayam)) user.ayam = 0

        if (!isNumber(user.lastadventure)) user.lastadventure = 0
        if (!isNumber(user.lastkill)) user.lastkill = 0
        if (!isNumber(user.lastmisi)) user.lastmisi = 0
        if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
        if (!isNumber(user.lastwar)) user.lastwar = 0
        if (!isNumber(user.lastsda)) user.lastsda = 0
        if (!isNumber(user.lastduel)) user.lastduel = 0
        if (!isNumber(user.lastmining)) user.lastmining = 0
        if (!isNumber(user.lasthunt)) user.lasthunt = 0
        if (!isNumber(user.lastgift)) user.lastgift = 0
        if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
        if (!isNumber(user.lastdagang)) user.lastdagang = 0
        if (!isNumber(user.lasthourly)) user.lasthourly = 0
        if (!isNumber(user.lastbansos)) user.lastbansos = 0
        if (!isNumber(user.lastrampok)) user.lastrampok = 0
        if (!isNumber(user.lastclaim)) user.lastclaim = 0
        if (!isNumber(user.lastnebang)) user.lastnebang = 0
        if (!isNumber(user.lastweekly)) user.lastweekly = 0
        if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
        if (!isNumber(user.apel)) user.apel = 0
        if (!isNumber(user.anggur)) user.anggur = 0
        if (!isNumber(user.jeruk)) user.jeruk = 0
        if (!isNumber(user.mangga)) user.mangga = 0
        if (!isNumber(user.pisang)) user.pisang = 0
        if (!isNumber(user.makanan)) user.makanan = 0
        if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
        if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
        if (!isNumber(user.bibitapel)) user.bibitapel = 0
        if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
        if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
        if (!isNumber(user.horse)) user.horse = 0
        if (!isNumber(user.horseexp)) user.horseexp = 0
        if (!isNumber(user.cat)) user.cat = 0
        if (!isNumber(user.catexp)) user.catexp = 0
        if (!isNumber(user.fox)) user.fox = 0
        if (!isNumber(user.foxhexp)) user.foxexp = 0
        if (!isNumber(user.dog)) user.foxexp = 0
        if (!isNumber(user.dogexp)) user.dogexp = 0
        if (!isNumber(user.robo)) user.robo = 0
        if (!isNumber(user.roboexp)) user.roboexp = 0
        if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
        if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
        if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
        if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
        if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
        if (!isNumber(user.robo)) user.robo = 0
        if (!isNumber(user.robodurability)) user.robodurability = 0
        if (!isNumber(user.armor)) user.armor = 0
        if (!isNumber(user.armordurability)) user.armordurability = 0
        if (!isNumber(user.sword)) user.sword = 0
        if (!isNumber(user.sworddurability)) user.sworddurability = 0
        if (!isNumber(user.pickaxe)) user.pickaxe = 1
        if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
        if (!isNumber(user.exp)) user.exp = 0
        if (!isNumber(user.rank)) user.rank = 0
        if (!isNumber(user.fishingrod)) user.fishingrod = 0
        if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
        if (!user.premium) user.premiumTime = 0
        if (!('afkReason' in user)) user.afkReason = ''
        if (!("premium" in user)) user.premium = false
        if (!('autoMikasa' in user)) user.autoMikasa = false
        if (!('autoaiset' in user)) user.autoaiset = false
        if (!('caiSesi' in user)) user.caiSesi = ''
        if (!('nama' in user)) user.nama = `${pushname}`;
      } else global.db.users[m.sender] = {
        subscribers: 0,
        like: 0,
        viewers: 0,
        youtube: `${pushname}`,
        playButton: 0,
        lastLive: 0,
        afkTime: -1,
        afkReason: '',
        premiumTime: 0,
        premium: false,
        money: 100000,
        exp: 0,
        rank: 0,
        autoMikasa: false,
        autoaiset: false,
        caiSesi: '',
        level: 0,
        rankup: 0,
        limit: 20,
        freelimit: 0,
        nama: `${pushname}`,
        lastclaim: 0,
        skata: 0,
        registered: false,
        name: m.name,
        pc: 0,
        joinlimit: 1,
        age: -1,
        regTime: -1,
        unreg: false,
        afk: -1,
        afkReason: '',
        banned: false,
        bannedTime: 0,
        warning: 0,
        rokets: 0,
        role: 'Beginner',
        skill: '',
        ojekk: 0,
        WarnReason: '',
        chip: 0,
        bank: 0,
        atm: 0,
        fullatm: 0,
        health: 1000,
        potion: 10,
        trash: 0,
        wood: 0,
        rock: 0,
        string: 0,
        emerald: 0,
        diamond: 0,
        gold: 0,
        iron: 0,
        common: 0,
        uncommon: 0,
        mythic: 0,
        legendary: 0,
        umpan: 0,
        pet: 0,
        horse: 0,
        horseexp: 0,
        horselastfeed: 0,
        cat: 0,
        catexp: 0,
        catlastfeed: 0,
        fox: 0,
        foxexp: 0,
        foxlastfeed: 0,
        robo: 0,
        roboexp: 0,
        robolastfeed: 0,
        dog: 0,
        dogexp: 0,
        doglastfeed: 0,
        paus: 0,
        kepiting: 0,
        gurita: 0,
        cumi: 0,
        buntal: 0,
        dory: 0,
        lumba: 0,
        lobster: 0,
        hiu: 0,
        udang: 0,
        ikan: 0,
        orca: 0,
        banteng: 0,
        harimau: 0,
        gajah: 0,
        kambing: 0,
        buaya: 0,
        kerbau: 0,
        sapi: 0,
        monyet: 0,
        babi: 0,
        ayam: 0,
        armor: 1,
        armordurability: 0,
        sword: 1,
        sworddurability: 0,
        pickaxe: 1,
        pickaxedurability: 0,
        fishingrod: 0,
        fishingroddurability: 0,
        robo: 0,
        robodurability: 0,
        apel: 20,
        pisang: 0,
        anggur: 0,
        mangga: 0,
        jeruk: 0,
        lastadventure: 0,
        lastkill: 0,
        lastmisi: 0,
        lastdungeon: 0,
        lastwar: 0,
        lastsda: 0,
        lastduel: 0,
        lastmining: 0,
        lasthunt: 0,
        lastgift: 0,
        lastberkebon: 0,
        lastdagang: 0,
        lasthourly: 0,
        lastbansos: 0,
        lastrampok: 0,
        lastclaim: 0,
        lastnebang: 0,
        lastweekly: 0,
        lastmonthly: 0

      }

      // Inisialisasi file database untuk Auto AI v2

      const setting = db.settings[botNumber]
      if (typeof setting !== 'object') db.settings[botNumber] = {}
      if (setting) {
        if (!('anticall' in setting)) setting.anticall = false
        if (!isNumber(setting.status)) setting.status = 0
        if (!('autobio' in setting)) setting.autobio = false
        if (!('autopromosi' in setting)) setting.autopromosi = false
        if (!('autoread' in setting)) setting.autoread = false
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('onlygrub' in setting)) setting.onlygrub = false
        if (!('onlyadmin' in setting)) setting.onlyadmin = false
        if (!('onlypc' in setting)) setting.onlypc = false
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
      } else global.db.settings[botNumber] = {
        anticall: false,
        status: 0,
        stock: 10,
        autobio: false,
        autopromosi: false,
        autoread: false,
        auto_ai_grup: false,
        goodbye: false,
        onlyadmin: false,
        onlygrub: false,
        onlypc: false,
        welcome: false,
        autoread: false
      }

    } catch (err) {
      console.error(err)
    }

    switch (command) {
      case 'adventure': case 'petualang': {
        let user = global.db.users[m.sender]
        let timers = (new Date - user.lastadventure)
        let time = 300000 - timers
        if (user.health < 80) return m.reply(`Butuh 80 health untuk petualang health kamu ${user.health}`)
        if (new Date - user.lastadventure < 300000) return m.reply(`Tunggu ${clockString(time)} untuk petualang lagi`)
        let health = '-' + `${Math.floor(Math.random() * 101)}`.trim()
        let armor = '-' + `${Math.floor(Math.random() * 5)}`.trim()
        let common = `${Math.floor(Math.random() * 3)}`.trim()
        let uncommon = `${Math.floor(Math.random() * 2)}`.trim()
        let mythic = `${pickRandom(['1', '0', '0', '0'])}`.trim()
        let legendary = `${pickRandom(['1', '0', '0', '0', '0'])}`.trim()
        let level = `${Math.floor(Math.random() * 2)}`.trim()
        let money = `${Math.floor(Math.random() * 300)}`.trim()
        let exp = `${Math.floor(Math.random() * 200)}`.trim()
        let trash = `${Math.floor(Math.random() * 20)}`.trim()
        let potion = `${Math.floor(Math.random() * 2)}`.trim()
        let diamond = `${Math.floor(Math.random() * 2)}`.trim()
        let gold = `${Math.floor(Math.random() * 3)}`.trim()
        let iron = `${Math.floor(Math.random() * 5)}`.trim()
        let wood = `${Math.floor(Math.random() * 10)}`.trim()
        let str = `
*Hasil Petualang ${pushname}*

*Darah:* ${health}
*Armor:* ${armor}
*Uang:* ${money}
*Exp:* ${exp}
*Level:* ${level}
*Sampah:* ${trash}
*Potion:* ${potion}
*Diamond:* ${diamond}
*Gold:* ${gold}
*Iron:* ${iron}
*Kayu:* ${wood}
*Common Crate:* ${common}
*Uncommon Crate:* ${uncommon}
*Mythic Crate:* ${mythic}
*Legendary Crate:* ${legendary}
`.trim()
        global.db.users[m.sender].health += health * 1
        global.db.users[m.sender].armor += armor * 1
        global.db.users[m.sender].common += common * 1
        global.db.users[m.sender].uncommon += uncommon * 1
        global.db.users[m.sender].mythic += mythic * 1
        global.db.users[m.sender].legendary += legendary * 1
        global.db.users[m.sender].level += level * 1
        global.db.users[m.sender].money += money * 1
        global.db.users[m.sender].exp += exp * 1
        global.db.users[m.sender].trash += trash * 1
        global.db.users[m.sender].potion += potion * 1
        global.db.users[m.sender].diamond += diamond * 1
        global.db.users[m.sender].gold += gold * 1
        global.db.users[m.sender].iron += iron * 1
        global.db.users[m.sender].wood += wood * 1
        global.db.users[m.sender].lastadventure = new Date * 1
        m.reply(str)
    }
    break
    case 'job': case 'kerja': case 'work': {
    let user = global.db.users[m.sender]
                    let timers = (new Date - user.lastjob)
                    let time = 300000 - timers
                    if (new Date - user.lastjob < 300000) return m.reply(`Tunggu ${clockString(time)} untuk bekerja lagi`)
                    let Jmoney = `${Math.floor(Math.random() * 500)}`.trim()
                    let Jexp = `${Math.floor(Math.random() * 300)}`.trim()
                    let str = `
Berhasil Menyelesaikan Pekerjaan Dan Mendapatkan
Uang: ${Jmoney}
Exp: ${Jexp}
`.trim()
                    global.db.users[m.sender].money += Jmoney * 1
                    global.db.users[m.sender].exp += Jexp * 1
                    global.db.users[m.sender].lastjob = new Date * 1
                    m.reply(str)
    }
    break
    case 'inv': case 'inventory': case 'bal': case 'balance': {
     let user = global.db.users[m.sender]
     let txt = `
*Inventory ${pushname}*

*Health:* ${user.health}
*Money:* ${user.money}
*Exp:* ${user.exp}
*Level:* ${user.level}
*Limit:* ${user.limit}
*Potion:* ${user.potion}
*Sampah:* ${user.trash}
*Wood:* ${user.wood}
*Rock:* ${user.rock}
*String:* ${user.string}
*Diamond:* ${user.diamond}
*Gold:* ${user.gold}
*Iron:* ${user.iron}
*Common Crate:* ${user.common}
*Uncommon Crate:* ${user.uncommon}
*Mythic Crate:* ${user.mythic}
*Legendary Crate:* ${user.legendary}
`.trim()
     m.reply(txt)
    }
    break
    case 'buy': {
     let user = global.db.users[m.sender]
     if (!text) return m.reply('Masukan Opsi, Contoh .buy potion 1')
     let nominal = args[1]
     if (args[0] === 'potion') {
     if (user.money < 1000 * nominal) return m.reply('Uang Kamu Tidak Cukup')
     user.money -= 1000 * nominal
     user.potion += nominal * 1
     m.reply(`Berhasil Membeli ${nominal} Potion`)
     }
    }
    break
    case 'heal': {
     let user = global.db.users[m.sender]
     if (user.potion < 1) return m.reply('Kamu Tidak Memiliki Potion')
     if (user.health > 95) return m.reply('Darah Kamu Sudah Full')
     user.potion -= 1
     user.health += 25
     m.reply('Berhasil Menggunakan 1 Potion')
    }
    break
    default:
    }
    } catch (err) {
        console.log(err);
    }
}
