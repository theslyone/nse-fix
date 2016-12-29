var AgreementDesc = require('../fields/AgreementDesc');
var AgreementID = require('../fields/AgreementID');
var AgreementDate = require('../fields/AgreementDate');
var AgreementCurrency = require('../fields/AgreementCurrency');
var TerminationType = require('../fields/TerminationType');
var StartDate = require('../fields/StartDate');
var EndDate = require('../fields/EndDate');
var DeliveryType = require('../fields/DeliveryType');
var MarginRatio = require('../fields/MarginRatio');

function FinancingDetails (financingDetails) {
  this.message = financingDetails;
}
/* field */
FinancingDetails.prototype.agreementDesc = function () {
  return new AgreementDesc(this.message.tags[AgreementDesc.Tag]);
};

/* field */
FinancingDetails.prototype.agreementId = function () {
  return new AgreementID(this.message.tags[AgreementID.Tag]);
};

/* field */
FinancingDetails.prototype.agreementDate = function () {
  return new AgreementDate(this.message.tags[AgreementDate.Tag]);
};

/* field */
FinancingDetails.prototype.agreementCurrency = function () {
  return new AgreementCurrency(this.message.tags[AgreementCurrency.Tag]);
};

/* field */
FinancingDetails.prototype.terminationType = function () {
  return new TerminationType(this.message.tags[TerminationType.Tag]);
};

/* field */
FinancingDetails.prototype.startDate = function () {
  return new StartDate(this.message.tags[StartDate.Tag]);
};

/* field */
FinancingDetails.prototype.endDate = function () {
  return new EndDate(this.message.tags[EndDate.Tag]);
};

/* field */
FinancingDetails.prototype.deliveryType = function () {
  return new DeliveryType(this.message.tags[DeliveryType.Tag]);
};

/* field */
FinancingDetails.prototype.marginRatio = function () {
  return new MarginRatio(this.message.tags[MarginRatio.Tag]);
};



FinancingDetails.Tag = '913';

module.exports = FinancingDetails;