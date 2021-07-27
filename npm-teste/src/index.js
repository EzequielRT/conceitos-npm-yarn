const moment = require('moment');

moment.locale('pt-BR');
let dia = moment().format('dddd');

console.log(`O dia atual é ${dia}`);