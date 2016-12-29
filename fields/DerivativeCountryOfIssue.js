var invert = require('invert-obj');

function DerivativeCountryOfIssue (derivativeCountryOfIssue) {
  this.message = derivativeCountryOfIssue;
}

DerivativeCountryOfIssue.prototype.value = function () {
  return this.message;
};

DerivativeCountryOfIssue.Tag = '1258';

DerivativeCountryOfIssue.Type = 'COUNTRY';

module.exports = DerivativeCountryOfIssue;