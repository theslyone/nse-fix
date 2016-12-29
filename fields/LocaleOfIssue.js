var invert = require('invert-obj');

function LocaleOfIssue (localeOfIssue) {
  this.message = localeOfIssue;
}

LocaleOfIssue.prototype.value = function () {
  return this.message;
};

LocaleOfIssue.Tag = '472';

LocaleOfIssue.Type = 'STRING';

module.exports = LocaleOfIssue;