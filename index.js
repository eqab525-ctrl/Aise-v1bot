import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201142182793', // Bot number
  prefix: [".", "/", "!"],
  fromMe: true, 
  owners: [
  // Owner 1
    { name: "عقاب الاصلي", lid: "120363426553571462@lid", jid: "201142182793@s.whatsapp.net" },
  // Owner 2
    { name: "『 عقاب الاصلي 』", lid: "120363426553571462@lid", jid: "201142182793@s.whatsapp.net" },
  // Owner 3
    { name: "『 عقاب الاصلي』", jid: "201142182793@s.whatsapp.net", lid: "50414477168824@lid" },
  // Owner 4 
   { name: "『 عقاب الاصلي』", jid: "201142182793@s.whatsapp.net", lid: "51664513925368@lid" }
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "♡『 Aɪsᴀ v1 』", 
  nameChannel: "『 Aɪsᴀ v1 』", 
  idChannel: "120363426553571462@newsletter",
  urls: {
    repo: "https://githcom/deveni0/Pomni-AI",
    api: "https://em-api.web.id",
    channel: "https://whatsapp.com/channel/0029VbD2pIvFXUuVFTTsek0J"
  },
  copyright: { 
    pack: 'عقاب الاصلي', 
    author: 'عقاب الاصلي'
  },
  images: 
    "https://qu.ax/x/MPqck.jpg",
    "https://qu.ax/x/MPqck.jpg",
    "https://qu.ax/x/MPqck.jpg",
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
