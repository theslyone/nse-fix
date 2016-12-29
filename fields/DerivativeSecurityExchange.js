var invert = require('invert-obj');

function DerivativeSecurityExchange (derivativeSecurityExchange) {
  this.message = derivativeSecurityExchange;
}

DerivativeSecurityExchange.prototype.value = function () {
  return this.message;
};

DerivativeSecurityExchange.Tag = '1272';

DerivativeSecurityExchange.Type = 'EXCHANGE';

module.exports = DerivativeSecurityExchange;