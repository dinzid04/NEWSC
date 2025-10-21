
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');
const pino = require('pino');

async function runTest() {
    const { state, saveCreds } = await useMultiFileAuthState('session');

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: pino({ level: 'silent' })
    });

    sock.ev.on('creds.update', saveCreds);

    await new Promise(resolve => {
        sock.ev.on('connection.update', ({ connection }) => {
            if (connection === 'open') {
                console.log('Connection opened!');
                resolve();
            } else if (connection === 'close') {
                console.log('Connection closed!');
            }
        });
    });

    const targetJid = '120363048873326155@g.us';

    const commands = [
        '.rpg',
        '.claim',
        '.inv',
        '.berburu',
        '.mancing',
        '.bertualang'
    ];

    for (const cmd of commands) {
        console.log(`Sending command: ${cmd}`);
        await sock.sendMessage(targetJid, { text: cmd });
        await new Promise(resolve => setTimeout(resolve, 5000));
    }

    console.log('Test commands sent.');
    sock.end();
}

runTest().catch(err => {
    console.error('Test failed:', err);
    process.exit(1);
});
