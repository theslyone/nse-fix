var invert = require('invert-obj');

function CommCurrency (commCurrency) {
  this.message = commCurrency;
}

CommCurrency.prototype.value = function () {
  return this.message;
};

CommCurrency.Tag = '479';

CommCurrency.Type = 'CURRENCY';

module.exports = CommCurrency;