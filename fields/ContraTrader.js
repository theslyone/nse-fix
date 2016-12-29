var invert = require('invert-obj');

function ContraTrader (contraTrader) {
  this.message = contraTrader;
}

ContraTrader.prototype.value = function () {
  return this.message;
};

ContraTrader.Tag = '337';

ContraTrader.Type = 'STRING';

module.exports = ContraTrader;