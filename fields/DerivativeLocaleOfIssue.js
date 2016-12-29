var invert = require('invert-obj');

function DerivativeLocaleOfIssue (derivativeLocaleOfIssue) {
  this.message = derivativeLocaleOfIssue;
}

DerivativeLocaleOfIssue.prototype.value = function () {
  return this.message;
};

DerivativeLocaleOfIssue.Tag = '1260';

DerivativeLocaleOfIssue.Type = 'STRING';

module.exports = DerivativeLocaleOfIssue;