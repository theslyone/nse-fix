var invert = require('invert-obj');

function DerivativeEventDate (derivativeEventDate) {
  this.message = derivativeEventDate;
}

DerivativeEventDate.prototype.value = function () {
  return this.message;
};

DerivativeEventDate.Tag = '1288';

DerivativeEventDate.Type = 'LOCALMKTDATE';

module.exports = DerivativeEventDate;