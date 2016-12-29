var invert = require('invert-obj');

function UnderlyingSecurityExchange (underlyingSecurityExchange) {
  this.message = underlyingSecurityExchange;
}

UnderlyingSecurityExchange.prototype.value = function () {
  return this.message;
};

UnderlyingSecurityExchange.Tag = '308';

UnderlyingSecurityExchange.Type = 'EXCHANGE';

module.exports = UnderlyingSecurityExchange;