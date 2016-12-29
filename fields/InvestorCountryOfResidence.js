var invert = require('invert-obj');

function InvestorCountryOfResidence (investorCountryOfResidence) {
  this.message = investorCountryOfResidence;
}

InvestorCountryOfResidence.prototype.value = function () {
  return this.message;
};

InvestorCountryOfResidence.Tag = '475';

InvestorCountryOfResidence.Type = 'COUNTRY';

module.exports = InvestorCountryOfResidence;