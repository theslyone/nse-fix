var invert = require('invert-obj');

function DerivativeIssueDate (derivativeIssueDate) {
  this.message = derivativeIssueDate;
}

DerivativeIssueDate.prototype.value = function () {
  return this.message;
};

DerivativeIssueDate.Tag = '1276';

DerivativeIssueDate.Type = 'LOCALMKTDATE';

module.exports = DerivativeIssueDate;