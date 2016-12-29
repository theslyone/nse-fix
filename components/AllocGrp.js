var NoAllocs = require('../fields/NoAllocs');
var NestedParties = require('../components/NestedParties');
var CommissionData = require('../components/CommissionData');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var ClrInstGrp = require('../components/ClrInstGrp');
var SettlInstructionsData = require('../components/SettlInstructionsData');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var MatchStatus = require('../fields/MatchStatus');
var AllocPrice = require('../fields/AllocPrice');
var AllocQty = require('../fields/AllocQty');
var IndividualAllocID = require('../fields/IndividualAllocID');
var ProcessCode = require('../fields/ProcessCode');
var NotifyBrokerOfCredit = require('../fields/NotifyBrokerOfCredit');
var AllocHandlInst = require('../fields/AllocHandlInst');
var AllocText = require('../fields/AllocText');
var EncodedAllocTextLen = require('../fields/EncodedAllocTextLen');
var EncodedAllocText = require('../fields/EncodedAllocText');
var AllocAvgPx = require('../fields/AllocAvgPx');
var AllocNetMoney = require('../fields/AllocNetMoney');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var AllocSettlCurrAmt = require('../fields/AllocSettlCurrAmt');
var SettlCurrency = require('../fields/SettlCurrency');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var AllocAccruedInterestAmt = require('../fields/AllocAccruedInterestAmt');
var AllocInterestAtMaturity = require('../fields/AllocInterestAtMaturity');
var AllocSettlInstType = require('../fields/AllocSettlInstType');
var SecondaryIndividualAllocID = require('../fields/SecondaryIndividualAllocID');
var AllocMethod = require('../fields/AllocMethod');
var AllocCustomerCapacity = require('../fields/AllocCustomerCapacity');
var IndividualAllocType = require('../fields/IndividualAllocType');
var AllocPositionEffect = require('../fields/AllocPositionEffect');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');

function AllocGrp (allocGrp) {
  this.message = allocGrp;
}

/* group */

/* component */
AllocGrp.prototype.nestedParties = function () {
  return this.message.groups[NestedParties.Tag]
    .map(function (nestedParties) {
      return new NestedParties(nestedParties);
  });
};

/* component */
AllocGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* component */
AllocGrp.prototype.miscFeesGrp = function () {
  return this.message.groups[MiscFeesGrp.Tag]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

/* component */
AllocGrp.prototype.clrInstGrp = function () {
  return this.message.groups[ClrInstGrp.Tag]
    .map(function (clrInstGrp) {
      return new ClrInstGrp(clrInstGrp);
  });
};

/* component */
AllocGrp.prototype.settlInstructionsData = function () {
  return this.message.groups[SettlInstructionsData.Tag]
    .map(function (settlInstructionsData) {
      return new SettlInstructionsData(settlInstructionsData);
  });
};

/* field */
AllocGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
AllocGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
AllocGrp.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[MatchStatus.Tag]);
};

/* field */
AllocGrp.prototype.allocPrice = function () {
  return new AllocPrice(this.message.tags[AllocPrice.Tag]);
};

/* field */
AllocGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* field */
AllocGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
AllocGrp.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[ProcessCode.Tag]);
};

/* field */
AllocGrp.prototype.notifyBrokerOfCredit = function () {
  return new NotifyBrokerOfCredit(this.message.tags[NotifyBrokerOfCredit.Tag]);
};

/* field */
AllocGrp.prototype.allocHandlInst = function () {
  return new AllocHandlInst(this.message.tags[AllocHandlInst.Tag]);
};

/* field */
AllocGrp.prototype.allocText = function () {
  return new AllocText(this.message.tags[AllocText.Tag]);
};

/* field */
AllocGrp.prototype.encodedAllocTextLen = function () {
  return new EncodedAllocTextLen(this.message.tags[EncodedAllocTextLen.Tag]);
};

/* field */
AllocGrp.prototype.encodedAllocText = function () {
  return new EncodedAllocText(this.message.tags[EncodedAllocText.Tag]);
};

/* field */
AllocGrp.prototype.allocAvgPx = function () {
  return new AllocAvgPx(this.message.tags[AllocAvgPx.Tag]);
};

/* field */
AllocGrp.prototype.allocNetMoney = function () {
  return new AllocNetMoney(this.message.tags[AllocNetMoney.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[SettlCurrAmt.Tag]);
};

/* field */
AllocGrp.prototype.allocSettlCurrAmt = function () {
  return new AllocSettlCurrAmt(this.message.tags[AllocSettlCurrAmt.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
AllocGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[SettlCurrFxRate.Tag]);
};

/* field */
AllocGrp.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[SettlCurrFxRateCalc.Tag]);
};

/* field */
AllocGrp.prototype.allocAccruedInterestAmt = function () {
  return new AllocAccruedInterestAmt(this.message.tags[AllocAccruedInterestAmt.Tag]);
};

/* field */
AllocGrp.prototype.allocInterestAtMaturity = function () {
  return new AllocInterestAtMaturity(this.message.tags[AllocInterestAtMaturity.Tag]);
};

/* field */
AllocGrp.prototype.allocSettlInstType = function () {
  return new AllocSettlInstType(this.message.tags[AllocSettlInstType.Tag]);
};

/* field */
AllocGrp.prototype.secondaryIndividualAllocId = function () {
  return new SecondaryIndividualAllocID(this.message.tags[SecondaryIndividualAllocID.Tag]);
};

/* field */
AllocGrp.prototype.allocMethod = function () {
  return new AllocMethod(this.message.tags[AllocMethod.Tag]);
};

/* field */
AllocGrp.prototype.allocCustomerCapacity = function () {
  return new AllocCustomerCapacity(this.message.tags[AllocCustomerCapacity.Tag]);
};

/* field */
AllocGrp.prototype.individualAllocType = function () {
  return new IndividualAllocType(this.message.tags[IndividualAllocType.Tag]);
};

/* field */
AllocGrp.prototype.allocPositionEffect = function () {
  return new AllocPositionEffect(this.message.tags[AllocPositionEffect.Tag]);
};

/* field */
AllocGrp.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[ClearingFeeIndicator.Tag]);
};

/* end group */

AllocGrp.Tag = '78';

module.exports = AllocGrp;