var invert = require('invert-obj');

function ExchangeRule (exchangeRule) {
  this.message = exchangeRule;
}

ExchangeRule.prototype.value = function () {
  return this.message;
};

ExchangeRule.Tag = '825';

ExchangeRule.Type = 'STRING';

module.exports = ExchangeRule;