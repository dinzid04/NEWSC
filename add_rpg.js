const Case = require('./lib/system.js');
const fs = require('fs');

const rpgCode = fs.readFileSync('temprpg.js', 'utf8');

Case.add(rpgCode);
