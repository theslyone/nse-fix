var invert = require('invert-obj');

function UnderlyingLocaleOfIssue (underlyingLocaleOfIssue) {
  this.message = underlyingLocaleOfIssue;
}

UnderlyingLocaleOfIssue.prototype.value = function () {
  return this.message;
};

UnderlyingLocaleOfIssue.Tag = '594';

UnderlyingLocaleOfIssue.Type = 'STRING';

module.exports = UnderlyingLocaleOfIssue;