var invert = require('invert-obj');

function LegIssueDate (legIssueDate) {
  this.message = legIssueDate;
}

LegIssueDate.prototype.value = function () {
  return this.message;
};

LegIssueDate.Tag = '249';

LegIssueDate.Type = 'LOCALMKTDATE';

module.exports = LegIssueDate;