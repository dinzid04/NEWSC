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