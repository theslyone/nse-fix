var invert = require('invert-obj');

function ContraTradeTime (contraTradeTime) {
  this.message = contraTradeTime;
}

ContraTradeTime.prototype.value = function () {
  return this.message;
};

ContraTradeTime.Tag = '438';

ContraTradeTime.Type = 'UTCTIMESTAMP';

module.exports = ContraTradeTime;