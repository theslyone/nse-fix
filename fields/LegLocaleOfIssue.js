var invert = require('invert-obj');

function LegLocaleOfIssue (legLocaleOfIssue) {
  this.message = legLocaleOfIssue;
}

LegLocaleOfIssue.prototype.value = function () {
  return this.message;
};

LegLocaleOfIssue.Tag = '598';

LegLocaleOfIssue.Type = 'STRING';

module.exports = LegLocaleOfIssue;