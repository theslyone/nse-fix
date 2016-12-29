var DerivativeSecurityAltIDGrp = require('../components/DerivativeSecurityAltIDGrp');
var DerivativeEventsGrp = require('../components/DerivativeEventsGrp');
var DerivativeInstrumentParties = require('../components/DerivativeInstrumentParties');
var DerivativeSecurityXML = require('../components/DerivativeSecurityXML');
var DerivativeSymbol = require('../fields/DerivativeSymbol');
var DerivativeSymbolSfx = require('../fields/DerivativeSymbolSfx');
var DerivativeSecurityID = require('../fields/DerivativeSecurityID');
var DerivativeSecurityIDSource = require('../fields/DerivativeSecurityIDSource');
var DerivativeProduct = require('../fields/DerivativeProduct');
var DerivativeProductComplex = require('../fields/DerivativeProductComplex');
var DerivFlexProductEligibilityIndicator = require('../fields/DerivFlexProductEligibilityIndicator');
var DerivativeSecurityGroup = require('../fields/DerivativeSecurityGroup');
var DerivativeCFICode = require('../fields/DerivativeCFICode');
var DerivativeSecurityType = require('../fields/DerivativeSecurityType');
var DerivativeSecuritySubType = require('../fields/DerivativeSecuritySubType');
var DerivativeMaturityMonthYear = require('../fields/DerivativeMaturityMonthYear');
var DerivativeMaturityDate = require('../fields/DerivativeMaturityDate');
var DerivativeMaturityTime = require('../fields/DerivativeMaturityTime');
var DerivativeSettleOnOpenFlag = require('../fields/DerivativeSettleOnOpenFlag');
var DerivativeInstrmtAssignmentMethod = require('../fields/DerivativeInstrmtAssignmentMethod');
var DerivativeSecurityStatus = require('../fields/DerivativeSecurityStatus');
var DerivativeIssueDate = require('../fields/DerivativeIssueDate');
var DerivativeInstrRegistry = require('../fields/DerivativeInstrRegistry');
var DerivativeCountryOfIssue = require('../fields/DerivativeCountryOfIssue');
var DerivativeStateOrProvinceOfIssue = require('../fields/DerivativeStateOrProvinceOfIssue');
var DerivativeStrikePrice = require('../fields/DerivativeStrikePrice');
var DerivativeLocaleOfIssue = require('../fields/DerivativeLocaleOfIssue');
var DerivativeStrikeCurrency = require('../fields/DerivativeStrikeCurrency');
var DerivativeStrikeMultiplier = require('../fields/DerivativeStrikeMultiplier');
var DerivativeStrikeValue = require('../fields/DerivativeStrikeValue');
var DerivativeOptAttribute = require('../fields/DerivativeOptAttribute');
var DerivativeContractMultiplier = require('../fields/DerivativeContractMultiplier');
var DerivativeMinPriceIncrement = require('../fields/DerivativeMinPriceIncrement');
var DerivativeMinPriceIncrementAmount = require('../fields/DerivativeMinPriceIncrementAmount');
var DerivativeUnitOfMeasure = require('../fields/DerivativeUnitOfMeasure');
var DerivativeUnitOfMeasureQty = require('../fields/DerivativeUnitOfMeasureQty');
var DerivativePriceUnitOfMeasure = require('../fields/DerivativePriceUnitOfMeasure');
var DerivativePriceUnitOfMeasureQty = require('../fields/DerivativePriceUnitOfMeasureQty');
var DerivativeExerciseStyle = require('../fields/DerivativeExerciseStyle');
var DerivativeOptPayAmount = require('../fields/DerivativeOptPayAmount');
var DerivativeTimeUnit = require('../fields/DerivativeTimeUnit');
var DerivativeSecurityExchange = require('../fields/DerivativeSecurityExchange');
var DerivativePositionLimit = require('../fields/DerivativePositionLimit');
var DerivativeNTPositionLimit = require('../fields/DerivativeNTPositionLimit');
var DerivativeIssuer = require('../fields/DerivativeIssuer');
var DerivativeEncodedIssuerLen = require('../fields/DerivativeEncodedIssuerLen');
var DerivativeEncodedIssuer = require('../fields/DerivativeEncodedIssuer');
var DerivativeSecurityDesc = require('../fields/DerivativeSecurityDesc');
var DerivativeEncodedSecurityDescLen = require('../fields/DerivativeEncodedSecurityDescLen');
var DerivativeEncodedSecurityDesc = require('../fields/DerivativeEncodedSecurityDesc');
var DerivativeContractSettlMonth = require('../fields/DerivativeContractSettlMonth');
var DerivativeSettlMethod = require('../fields/DerivativeSettlMethod');
var DerivativePriceQuoteMethod = require('../fields/DerivativePriceQuoteMethod');
var DerivativeFuturesValuationMethod = require('../fields/DerivativeFuturesValuationMethod');
var DerivativeListMethod = require('../fields/DerivativeListMethod');
var DerivativeCapPrice = require('../fields/DerivativeCapPrice');
var DerivativeFloorPrice = require('../fields/DerivativeFloorPrice');
var DerivativePutOrCall = require('../fields/DerivativePutOrCall');

function DerivativeInstrument (derivativeInstrument) {
  this.message = derivativeInstrument;
}
/* component */
DerivativeInstrument.prototype.derivativeSecurityAltIdgrp = function () {
  return this.message.groups[DerivativeSecurityAltIDGrp.Tag]
    .map(function (derivativeSecurityAltIdgrp) {
      return new DerivativeSecurityAltIDGrp(derivativeSecurityAltIdgrp);
  });
};

/* component */
DerivativeInstrument.prototype.derivativeEventsGrp = function () {
  return this.message.groups[DerivativeEventsGrp.Tag]
    .map(function (derivativeEventsGrp) {
      return new DerivativeEventsGrp(derivativeEventsGrp);
  });
};

/* component */
DerivativeInstrument.prototype.derivativeInstrumentParties = function () {
  return this.message.groups[DerivativeInstrumentParties.Tag]
    .map(function (derivativeInstrumentParties) {
      return new DerivativeInstrumentParties(derivativeInstrumentParties);
  });
};

/* component */
DerivativeInstrument.prototype.derivativeSecurityXml = function () {
  return this.message.groups[DerivativeSecurityXML.Tag]
    .map(function (derivativeSecurityXml) {
      return new DerivativeSecurityXML(derivativeSecurityXml);
  });
};

/* field */
DerivativeInstrument.prototype.derivativeSymbol = function () {
  return new DerivativeSymbol(this.message.tags[DerivativeSymbol.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSymbolSfx = function () {
  return new DerivativeSymbolSfx(this.message.tags[DerivativeSymbolSfx.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityId = function () {
  return new DerivativeSecurityID(this.message.tags[DerivativeSecurityID.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityIdsource = function () {
  return new DerivativeSecurityIDSource(this.message.tags[DerivativeSecurityIDSource.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeProduct = function () {
  return new DerivativeProduct(this.message.tags[DerivativeProduct.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeProductComplex = function () {
  return new DerivativeProductComplex(this.message.tags[DerivativeProductComplex.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivFlexProductEligibilityIndicator = function () {
  return new DerivFlexProductEligibilityIndicator(this.message.tags[DerivFlexProductEligibilityIndicator.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityGroup = function () {
  return new DerivativeSecurityGroup(this.message.tags[DerivativeSecurityGroup.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeCficode = function () {
  return new DerivativeCFICode(this.message.tags[DerivativeCFICode.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityType = function () {
  return new DerivativeSecurityType(this.message.tags[DerivativeSecurityType.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecuritySubType = function () {
  return new DerivativeSecuritySubType(this.message.tags[DerivativeSecuritySubType.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeMaturityMonthYear = function () {
  return new DerivativeMaturityMonthYear(this.message.tags[DerivativeMaturityMonthYear.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeMaturityDate = function () {
  return new DerivativeMaturityDate(this.message.tags[DerivativeMaturityDate.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeMaturityTime = function () {
  return new DerivativeMaturityTime(this.message.tags[DerivativeMaturityTime.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSettleOnOpenFlag = function () {
  return new DerivativeSettleOnOpenFlag(this.message.tags[DerivativeSettleOnOpenFlag.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeInstrmtAssignmentMethod = function () {
  return new DerivativeInstrmtAssignmentMethod(this.message.tags[DerivativeInstrmtAssignmentMethod.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityStatus = function () {
  return new DerivativeSecurityStatus(this.message.tags[DerivativeSecurityStatus.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeIssueDate = function () {
  return new DerivativeIssueDate(this.message.tags[DerivativeIssueDate.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeInstrRegistry = function () {
  return new DerivativeInstrRegistry(this.message.tags[DerivativeInstrRegistry.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeCountryOfIssue = function () {
  return new DerivativeCountryOfIssue(this.message.tags[DerivativeCountryOfIssue.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeStateOrProvinceOfIssue = function () {
  return new DerivativeStateOrProvinceOfIssue(this.message.tags[DerivativeStateOrProvinceOfIssue.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeStrikePrice = function () {
  return new DerivativeStrikePrice(this.message.tags[DerivativeStrikePrice.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeLocaleOfIssue = function () {
  return new DerivativeLocaleOfIssue(this.message.tags[DerivativeLocaleOfIssue.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeStrikeCurrency = function () {
  return new DerivativeStrikeCurrency(this.message.tags[DerivativeStrikeCurrency.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeStrikeMultiplier = function () {
  return new DerivativeStrikeMultiplier(this.message.tags[DerivativeStrikeMultiplier.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeStrikeValue = function () {
  return new DerivativeStrikeValue(this.message.tags[DerivativeStrikeValue.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeOptAttribute = function () {
  return new DerivativeOptAttribute(this.message.tags[DerivativeOptAttribute.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeContractMultiplier = function () {
  return new DerivativeContractMultiplier(this.message.tags[DerivativeContractMultiplier.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeMinPriceIncrement = function () {
  return new DerivativeMinPriceIncrement(this.message.tags[DerivativeMinPriceIncrement.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeMinPriceIncrementAmount = function () {
  return new DerivativeMinPriceIncrementAmount(this.message.tags[DerivativeMinPriceIncrementAmount.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeUnitOfMeasure = function () {
  return new DerivativeUnitOfMeasure(this.message.tags[DerivativeUnitOfMeasure.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeUnitOfMeasureQty = function () {
  return new DerivativeUnitOfMeasureQty(this.message.tags[DerivativeUnitOfMeasureQty.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativePriceUnitOfMeasure = function () {
  return new DerivativePriceUnitOfMeasure(this.message.tags[DerivativePriceUnitOfMeasure.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativePriceUnitOfMeasureQty = function () {
  return new DerivativePriceUnitOfMeasureQty(this.message.tags[DerivativePriceUnitOfMeasureQty.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeExerciseStyle = function () {
  return new DerivativeExerciseStyle(this.message.tags[DerivativeExerciseStyle.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeOptPayAmount = function () {
  return new DerivativeOptPayAmount(this.message.tags[DerivativeOptPayAmount.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeTimeUnit = function () {
  return new DerivativeTimeUnit(this.message.tags[DerivativeTimeUnit.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityExchange = function () {
  return new DerivativeSecurityExchange(this.message.tags[DerivativeSecurityExchange.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativePositionLimit = function () {
  return new DerivativePositionLimit(this.message.tags[DerivativePositionLimit.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeNtpositionLimit = function () {
  return new DerivativeNTPositionLimit(this.message.tags[DerivativeNTPositionLimit.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeIssuer = function () {
  return new DerivativeIssuer(this.message.tags[DerivativeIssuer.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeEncodedIssuerLen = function () {
  return new DerivativeEncodedIssuerLen(this.message.tags[DerivativeEncodedIssuerLen.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeEncodedIssuer = function () {
  return new DerivativeEncodedIssuer(this.message.tags[DerivativeEncodedIssuer.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSecurityDesc = function () {
  return new DerivativeSecurityDesc(this.message.tags[DerivativeSecurityDesc.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeEncodedSecurityDescLen = function () {
  return new DerivativeEncodedSecurityDescLen(this.message.tags[DerivativeEncodedSecurityDescLen.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeEncodedSecurityDesc = function () {
  return new DerivativeEncodedSecurityDesc(this.message.tags[DerivativeEncodedSecurityDesc.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeContractSettlMonth = function () {
  return new DerivativeContractSettlMonth(this.message.tags[DerivativeContractSettlMonth.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeSettlMethod = function () {
  return new DerivativeSettlMethod(this.message.tags[DerivativeSettlMethod.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativePriceQuoteMethod = function () {
  return new DerivativePriceQuoteMethod(this.message.tags[DerivativePriceQuoteMethod.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeFuturesValuationMethod = function () {
  return new DerivativeFuturesValuationMethod(this.message.tags[DerivativeFuturesValuationMethod.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeListMethod = function () {
  return new DerivativeListMethod(this.message.tags[DerivativeListMethod.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeCapPrice = function () {
  return new DerivativeCapPrice(this.message.tags[DerivativeCapPrice.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativeFloorPrice = function () {
  return new DerivativeFloorPrice(this.message.tags[DerivativeFloorPrice.Tag]);
};

/* field */
DerivativeInstrument.prototype.derivativePutOrCall = function () {
  return new DerivativePutOrCall(this.message.tags[DerivativePutOrCall.Tag]);
};



DerivativeInstrument.Tag = '1214';

module.exports = DerivativeInstrument;