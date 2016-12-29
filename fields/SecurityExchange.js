var invert = require('invert-obj');

function SecurityExchange (securityExchange) {
  this.message = securityExchange;
}

SecurityExchange.prototype.value = function () {
  return this.message;
};

SecurityExchange.Tag = '207';

SecurityExchange.Type = 'EXCHANGE';

module.exports = SecurityExchange;