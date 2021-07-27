const moment = require('moment');

moment.locale('pt-BR');
let dia = moment().format('dddd');

document.getElementById('dia').innerHTML = `O dia atual é ${dia}`;