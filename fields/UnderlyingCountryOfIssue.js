var invert = require('invert-obj');

function UnderlyingCountryOfIssue (underlyingCountryOfIssue) {
  this.message = underlyingCountryOfIssue;
}

UnderlyingCountryOfIssue.prototype.value = function () {
  return this.message;
};

UnderlyingCountryOfIssue.Tag = '592';

UnderlyingCountryOfIssue.Type = 'COUNTRY';

module.exports = UnderlyingCountryOfIssue;