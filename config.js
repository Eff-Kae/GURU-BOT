import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['2347085169941', 'ᴋᴀᴇ ༒', true],
  ['233209037708', 'Hanzo', true], 
  ['234 916 726 5767', 'ɢʟᴇᴇ ✨', true] 
] //Number of owners

//global.pairingNumber = "2347085169941" //put your bot number here

global.mods = ['2347085169941','233209037708'] 
global.prems = ['2347085169941','233209037708', '919398758484']
global.allowed = ['2347085169941','233209037708', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'KAE-TECH BOT'
global.premium = 'true'
global.packname = 'Dont Steal This' 
global.author = 'ᴋᴀᴇ ༒' 
global.menuvid = 'https://github.com/Eff-Kae/Suhail-Md/blob/main/mee.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/Mr.Eff-Kae\n' 
global.dygp = 'https://chat.whatsapp.com/JYAg2lMpRTF2bgkeFCxsvf'
global.fgsc = 'https://github.com/Guru322/GURU-BOT' 
global.fgyt = 'https://youtube.com/@GAMER_KAE'
global.fgpyp = 'https://youtube.com/@GAMER_KAE'
global.fglog = 'https://i.pinimg.com/736x/4c/cd/30/4ccd30c0a5c205f8ac232f15896488cf.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
