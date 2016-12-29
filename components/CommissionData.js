var Commission = require('../fields/Commission');
var CommType = require('../fields/CommType');
var CommCurrency = require('../fields/CommCurrency');
var FundRenewWaiv = require('../fields/FundRenewWaiv');

function CommissionData (commissionData) {
  this.message = commissionData;
}
/* field */
CommissionData.prototype.commission = function () {
  return new Commission(this.message.tags[Commission.Tag]);
};

/* field */
CommissionData.prototype.commType = function () {
  return new CommType(this.message.tags[CommType.Tag]);
};

/* field */
CommissionData.prototype.commCurrency = function () {
  return new CommCurrency(this.message.tags[CommCurrency.Tag]);
};

/* field */
CommissionData.prototype.fundRenewWaiv = function () {
  return new FundRenewWaiv(this.message.tags[FundRenewWaiv.Tag]);
};



CommissionData.Tag = '12';

module.exports = CommissionData;