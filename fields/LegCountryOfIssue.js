var invert = require('invert-obj');

function LegCountryOfIssue (legCountryOfIssue) {
  this.message = legCountryOfIssue;
}

LegCountryOfIssue.prototype.value = function () {
  return this.message;
};

LegCountryOfIssue.Tag = '596';

LegCountryOfIssue.Type = 'COUNTRY';

module.exports = LegCountryOfIssue;