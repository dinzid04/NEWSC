console.log('--- Test script starting ---');

console.log('--- Requiring handler.js ---');
const handler = require('./handler.js');
console.log('--- handler.js required successfully ---');

// Mock sock object
const mockSock = {
    sendMessage: (chatId, message, options) => {
        console.log(`[SOCK.SENDMESSAGE CALLED] ChatID: ${chatId}`);
        console.log(`[BOT-REPLY] ${message.text}`);
    },
    decodeJid: (jid) => jid,
    user: {
        id: '12345@s.whatsapp.net'
    },
    groupMetadata: async (jid) => {
        console.log(`[SOCK.GROUPMETADATA CALLED] JID: ${jid}`);
        return {
            id: jid,
            subject: 'Test Group',
            participants: [
                { id: 'test-user@s.whatsapp.net', admin: null },
                { id: '12345@s.whatsapp.net', admin: 'admin' }
            ]
        };
    }
};

// Mock m object for .inv command
const mockMInv = {
    mtype: 'conversation',
    message: {
        conversation: '.inv'
    },
    key: {
        remoteJid: 'test-group@g.us',
        fromMe: false,
        id: '123',
        participant: 'test-user@s.whatsapp.net'
    },
    chat: 'test-group@g.us',
    sender: 'test-user@s.whatsapp.net',
    isGroup: true,
    pushName: 'TestUser'
};

// Mock m object for .claim command
const mockMClaim = {
    mtype: 'conversation',
    message: {
        conversation: '.claim'
    },
    key: {
        remoteJid: 'test-group@g.us',
        fromMe: false,
        id: '456',
        participant: 'test-user@s.whatsapp.net'
    },
    chat: 'test-group@g.us',
    sender: 'test-user@s.whatsapp.net',
    isGroup: true,
    pushName: 'TestUser'
};

// Mock global.db
global.db = {
    users: {
        'test-user@s.whatsapp.net': {
            money: 100,
            health: 100,
            level: 1,
            exp: 0,
            lastclaim: 0,
            wood: 0,
            gold: 0,
            diamond: 0,
            iron: 0,
            banteng: 0,
            harimau: 0,
            gajah: 0,
            kambing: 0,
            buaya: 0,
            paus: 0,
            kepiting: 0,
            gurita: 0,
            cumi: 0,
            buntal: 0,
        }
    },
    chats: {
        'test-group@g.us': {}
    },
    settings: {
        '12345@s.whatsapp.net':{}
    }
};
global.namaBot = "Test Bot";
async function runTest() {
    console.log('--- Test function starting ---');

    console.log('\n--- Testing .inv command ---');
    await handler(mockSock, mockMInv, {}, {});
    console.log('--- .inv command test finished ---');

    console.log('\n--- Testing .claim command ---');
    await handler(mockSock, mockMClaim, {}, {});
    console.log('--- .claim command test finished ---');

    console.log('\n--- All tests finished ---');
}

runTest();
