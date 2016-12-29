var invert = require('invert-obj');

function LegSecurityExchange (legSecurityExchange) {
  this.message = legSecurityExchange;
}

LegSecurityExchange.prototype.value = function () {
  return this.message;
};

LegSecurityExchange.Tag = '616';

LegSecurityExchange.Type = 'EXCHANGE';

module.exports = LegSecurityExchange;