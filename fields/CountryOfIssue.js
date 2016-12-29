var invert = require('invert-obj');

function CountryOfIssue (countryOfIssue) {
  this.message = countryOfIssue;
}

CountryOfIssue.prototype.value = function () {
  return this.message;
};

CountryOfIssue.Tag = '470';

CountryOfIssue.Type = 'COUNTRY';

module.exports = CountryOfIssue;