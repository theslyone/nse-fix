var invert = require('invert-obj');

function IssueDate (issueDate) {
  this.message = issueDate;
}

IssueDate.prototype.value = function () {
  return this.message;
};

IssueDate.Tag = '225';

IssueDate.Type = 'LOCALMKTDATE';

module.exports = IssueDate;