var invert = require('invert-obj');

function UnderlyingIssueDate (underlyingIssueDate) {
  this.message = underlyingIssueDate;
}

UnderlyingIssueDate.prototype.value = function () {
  return this.message;
};

UnderlyingIssueDate.Tag = '242';

UnderlyingIssueDate.Type = 'LOCALMKTDATE';

module.exports = UnderlyingIssueDate;