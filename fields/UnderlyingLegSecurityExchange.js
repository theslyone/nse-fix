var invert = require('invert-obj');

function UnderlyingLegSecurityExchange (underlyingLegSecurityExchange) {
  this.message = underlyingLegSecurityExchange;
}

UnderlyingLegSecurityExchange.prototype.value = function () {
  return this.message;
};

UnderlyingLegSecurityExchange.Tag = '1341';

UnderlyingLegSecurityExchange.Type = 'STRING';

module.exports = UnderlyingLegSecurityExchange;