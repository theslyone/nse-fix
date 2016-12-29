var LegSecAltIDGrp = require('../components/LegSecAltIDGrp');
var LegSymbol = require('../fields/LegSymbol');
var LegSymbolSfx = require('../fields/LegSymbolSfx');
var LegSecurityID = require('../fields/LegSecurityID');
var LegSecurityIDSource = require('../fields/LegSecurityIDSource');
var LegProduct = require('../fields/LegProduct');
var LegCFICode = require('../fields/LegCFICode');
var LegSecurityType = require('../fields/LegSecurityType');
var LegSecuritySubType = require('../fields/LegSecuritySubType');
var LegMaturityMonthYear = require('../fields/LegMaturityMonthYear');
var LegMaturityDate = require('../fields/LegMaturityDate');
var LegCouponPaymentDate = require('../fields/LegCouponPaymentDate');
var LegIssueDate = require('../fields/LegIssueDate');
var LegRepoCollateralSecurityType = require('../fields/LegRepoCollateralSecurityType');
var LegRepurchaseTerm = require('../fields/LegRepurchaseTerm');
var LegRepurchaseRate = require('../fields/LegRepurchaseRate');
var LegFactor = require('../fields/LegFactor');
var LegCreditRating = require('../fields/LegCreditRating');
var LegInstrRegistry = require('../fields/LegInstrRegistry');
var LegCountryOfIssue = require('../fields/LegCountryOfIssue');
var LegStateOrProvinceOfIssue = require('../fields/LegStateOrProvinceOfIssue');
var LegLocaleOfIssue = require('../fields/LegLocaleOfIssue');
var LegRedemptionDate = require('../fields/LegRedemptionDate');
var LegStrikePrice = require('../fields/LegStrikePrice');
var LegStrikeCurrency = require('../fields/LegStrikeCurrency');
var LegOptAttribute = require('../fields/LegOptAttribute');
var LegContractMultiplier = require('../fields/LegContractMultiplier');
var LegCouponRate = require('../fields/LegCouponRate');
var LegSecurityExchange = require('../fields/LegSecurityExchange');
var LegIssuer = require('../fields/LegIssuer');
var EncodedLegIssuerLen = require('../fields/EncodedLegIssuerLen');
var EncodedLegIssuer = require('../fields/EncodedLegIssuer');
var LegSecurityDesc = require('../fields/LegSecurityDesc');
var EncodedLegSecurityDescLen = require('../fields/EncodedLegSecurityDescLen');
var EncodedLegSecurityDesc = require('../fields/EncodedLegSecurityDesc');
var LegRatioQty = require('../fields/LegRatioQty');
var LegSide = require('../fields/LegSide');
var LegCurrency = require('../fields/LegCurrency');
var LegPool = require('../fields/LegPool');
var LegDatedDate = require('../fields/LegDatedDate');
var LegContractSettlMonth = require('../fields/LegContractSettlMonth');
var LegInterestAccrualDate = require('../fields/LegInterestAccrualDate');
var LegUnitOfMeasure = require('../fields/LegUnitOfMeasure');
var LegTimeUnit = require('../fields/LegTimeUnit');
var LegOptionRatio = require('../fields/LegOptionRatio');
var LegPrice = require('../fields/LegPrice');
var LegMaturityTime = require('../fields/LegMaturityTime');
var LegPutOrCall = require('../fields/LegPutOrCall');
var LegExerciseStyle = require('../fields/LegExerciseStyle');
var LegUnitOfMeasureQty = require('../fields/LegUnitOfMeasureQty');
var LegPriceUnitOfMeasure = require('../fields/LegPriceUnitOfMeasure');
var LegPriceUnitOfMeasureQty = require('../fields/LegPriceUnitOfMeasureQty');

function InstrumentLeg (instrumentLeg) {
  this.message = instrumentLeg;
}
/* component */
InstrumentLeg.prototype.legSecAltIdgrp = function () {
  return this.message.groups[LegSecAltIDGrp.Tag]
    .map(function (legSecAltIdgrp) {
      return new LegSecAltIDGrp(legSecAltIdgrp);
  });
};

/* field */
InstrumentLeg.prototype.legSymbol = function () {
  return new LegSymbol(this.message.tags[LegSymbol.Tag]);
};

/* field */
InstrumentLeg.prototype.legSymbolSfx = function () {
  return new LegSymbolSfx(this.message.tags[LegSymbolSfx.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityId = function () {
  return new LegSecurityID(this.message.tags[LegSecurityID.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityIdsource = function () {
  return new LegSecurityIDSource(this.message.tags[LegSecurityIDSource.Tag]);
};

/* field */
InstrumentLeg.prototype.legProduct = function () {
  return new LegProduct(this.message.tags[LegProduct.Tag]);
};

/* field */
InstrumentLeg.prototype.legCficode = function () {
  return new LegCFICode(this.message.tags[LegCFICode.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityType = function () {
  return new LegSecurityType(this.message.tags[LegSecurityType.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecuritySubType = function () {
  return new LegSecuritySubType(this.message.tags[LegSecuritySubType.Tag]);
};

/* field */
InstrumentLeg.prototype.legMaturityMonthYear = function () {
  return new LegMaturityMonthYear(this.message.tags[LegMaturityMonthYear.Tag]);
};

/* field */
InstrumentLeg.prototype.legMaturityDate = function () {
  return new LegMaturityDate(this.message.tags[LegMaturityDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponPaymentDate = function () {
  return new LegCouponPaymentDate(this.message.tags[LegCouponPaymentDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legIssueDate = function () {
  return new LegIssueDate(this.message.tags[LegIssueDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legRepoCollateralSecurityType = function () {
  return new LegRepoCollateralSecurityType(this.message.tags[LegRepoCollateralSecurityType.Tag]);
};

/* field */
InstrumentLeg.prototype.legRepurchaseTerm = function () {
  return new LegRepurchaseTerm(this.message.tags[LegRepurchaseTerm.Tag]);
};

/* field */
InstrumentLeg.prototype.legRepurchaseRate = function () {
  return new LegRepurchaseRate(this.message.tags[LegRepurchaseRate.Tag]);
};

/* field */
InstrumentLeg.prototype.legFactor = function () {
  return new LegFactor(this.message.tags[LegFactor.Tag]);
};

/* field */
InstrumentLeg.prototype.legCreditRating = function () {
  return new LegCreditRating(this.message.tags[LegCreditRating.Tag]);
};

/* field */
InstrumentLeg.prototype.legInstrRegistry = function () {
  return new LegInstrRegistry(this.message.tags[LegInstrRegistry.Tag]);
};

/* field */
InstrumentLeg.prototype.legCountryOfIssue = function () {
  return new LegCountryOfIssue(this.message.tags[LegCountryOfIssue.Tag]);
};

/* field */
InstrumentLeg.prototype.legStateOrProvinceOfIssue = function () {
  return new LegStateOrProvinceOfIssue(this.message.tags[LegStateOrProvinceOfIssue.Tag]);
};

/* field */
InstrumentLeg.prototype.legLocaleOfIssue = function () {
  return new LegLocaleOfIssue(this.message.tags[LegLocaleOfIssue.Tag]);
};

/* field */
InstrumentLeg.prototype.legRedemptionDate = function () {
  return new LegRedemptionDate(this.message.tags[LegRedemptionDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikePrice = function () {
  return new LegStrikePrice(this.message.tags[LegStrikePrice.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeCurrency = function () {
  return new LegStrikeCurrency(this.message.tags[LegStrikeCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptAttribute = function () {
  return new LegOptAttribute(this.message.tags[LegOptAttribute.Tag]);
};

/* field */
InstrumentLeg.prototype.legContractMultiplier = function () {
  return new LegContractMultiplier(this.message.tags[LegContractMultiplier.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponRate = function () {
  return new LegCouponRate(this.message.tags[LegCouponRate.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityExchange = function () {
  return new LegSecurityExchange(this.message.tags[LegSecurityExchange.Tag]);
};

/* field */
InstrumentLeg.prototype.legIssuer = function () {
  return new LegIssuer(this.message.tags[LegIssuer.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegIssuerLen = function () {
  return new EncodedLegIssuerLen(this.message.tags[EncodedLegIssuerLen.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegIssuer = function () {
  return new EncodedLegIssuer(this.message.tags[EncodedLegIssuer.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityDesc = function () {
  return new LegSecurityDesc(this.message.tags[LegSecurityDesc.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegSecurityDescLen = function () {
  return new EncodedLegSecurityDescLen(this.message.tags[EncodedLegSecurityDescLen.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegSecurityDesc = function () {
  return new EncodedLegSecurityDesc(this.message.tags[EncodedLegSecurityDesc.Tag]);
};

/* field */
InstrumentLeg.prototype.legRatioQty = function () {
  return new LegRatioQty(this.message.tags[LegRatioQty.Tag]);
};

/* field */
InstrumentLeg.prototype.legSide = function () {
  return new LegSide(this.message.tags[LegSide.Tag]);
};

/* field */
InstrumentLeg.prototype.legCurrency = function () {
  return new LegCurrency(this.message.tags[LegCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legPool = function () {
  return new LegPool(this.message.tags[LegPool.Tag]);
};

/* field */
InstrumentLeg.prototype.legDatedDate = function () {
  return new LegDatedDate(this.message.tags[LegDatedDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legContractSettlMonth = function () {
  return new LegContractSettlMonth(this.message.tags[LegContractSettlMonth.Tag]);
};

/* field */
InstrumentLeg.prototype.legInterestAccrualDate = function () {
  return new LegInterestAccrualDate(this.message.tags[LegInterestAccrualDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legUnitOfMeasure = function () {
  return new LegUnitOfMeasure(this.message.tags[LegUnitOfMeasure.Tag]);
};

/* field */
InstrumentLeg.prototype.legTimeUnit = function () {
  return new LegTimeUnit(this.message.tags[LegTimeUnit.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptionRatio = function () {
  return new LegOptionRatio(this.message.tags[LegOptionRatio.Tag]);
};

/* field */
InstrumentLeg.prototype.legPrice = function () {
  return new LegPrice(this.message.tags[LegPrice.Tag]);
};

/* field */
InstrumentLeg.prototype.legMaturityTime = function () {
  return new LegMaturityTime(this.message.tags[LegMaturityTime.Tag]);
};

/* field */
InstrumentLeg.prototype.legPutOrCall = function () {
  return new LegPutOrCall(this.message.tags[LegPutOrCall.Tag]);
};

/* field */
InstrumentLeg.prototype.legExerciseStyle = function () {
  return new LegExerciseStyle(this.message.tags[LegExerciseStyle.Tag]);
};

/* field */
InstrumentLeg.prototype.legUnitOfMeasureQty = function () {
  return new LegUnitOfMeasureQty(this.message.tags[LegUnitOfMeasureQty.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceUnitOfMeasure = function () {
  return new LegPriceUnitOfMeasure(this.message.tags[LegPriceUnitOfMeasure.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceUnitOfMeasureQty = function () {
  return new LegPriceUnitOfMeasureQty(this.message.tags[LegPriceUnitOfMeasureQty.Tag]);
};



InstrumentLeg.Tag = '600';

module.exports = InstrumentLeg;