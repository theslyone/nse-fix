var UnderlyingLegSecurityAltIDGrp = require('../components/UnderlyingLegSecurityAltIDGrp');
var UnderlyingLegSymbol = require('../fields/UnderlyingLegSymbol');
var UnderlyingLegSymbolSfx = require('../fields/UnderlyingLegSymbolSfx');
var UnderlyingLegSecurityID = require('../fields/UnderlyingLegSecurityID');
var UnderlyingLegSecurityIDSource = require('../fields/UnderlyingLegSecurityIDSource');
var UnderlyingLegCFICode = require('../fields/UnderlyingLegCFICode');
var UnderlyingLegSecurityType = require('../fields/UnderlyingLegSecurityType');
var UnderlyingLegSecuritySubType = require('../fields/UnderlyingLegSecuritySubType');
var UnderlyingLegMaturityMonthYear = require('../fields/UnderlyingLegMaturityMonthYear');
var UnderlyingLegMaturityDate = require('../fields/UnderlyingLegMaturityDate');
var UnderlyingLegMaturityTime = require('../fields/UnderlyingLegMaturityTime');
var UnderlyingLegStrikePrice = require('../fields/UnderlyingLegStrikePrice');
var UnderlyingLegOptAttribute = require('../fields/UnderlyingLegOptAttribute');
var UnderlyingLegPutOrCall = require('../fields/UnderlyingLegPutOrCall');
var UnderlyingLegSecurityExchange = require('../fields/UnderlyingLegSecurityExchange');
var UnderlyingLegSecurityDesc = require('../fields/UnderlyingLegSecurityDesc');

function UnderlyingLegInstrument (underlyingLegInstrument) {
  this.message = underlyingLegInstrument;
}
/* component */
UnderlyingLegInstrument.prototype.underlyingLegSecurityAltIdgrp = function () {
  return this.message.groups[UnderlyingLegSecurityAltIDGrp.Tag]
    .map(function (underlyingLegSecurityAltIdgrp) {
      return new UnderlyingLegSecurityAltIDGrp(underlyingLegSecurityAltIdgrp);
  });
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSymbol = function () {
  return new UnderlyingLegSymbol(this.message.tags[UnderlyingLegSymbol.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSymbolSfx = function () {
  return new UnderlyingLegSymbolSfx(this.message.tags[UnderlyingLegSymbolSfx.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSecurityId = function () {
  return new UnderlyingLegSecurityID(this.message.tags[UnderlyingLegSecurityID.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSecurityIdsource = function () {
  return new UnderlyingLegSecurityIDSource(this.message.tags[UnderlyingLegSecurityIDSource.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegCficode = function () {
  return new UnderlyingLegCFICode(this.message.tags[UnderlyingLegCFICode.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSecurityType = function () {
  return new UnderlyingLegSecurityType(this.message.tags[UnderlyingLegSecurityType.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSecuritySubType = function () {
  return new UnderlyingLegSecuritySubType(this.message.tags[UnderlyingLegSecuritySubType.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegMaturityMonthYear = function () {
  return new UnderlyingLegMaturityMonthYear(this.message.tags[UnderlyingLegMaturityMonthYear.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegMaturityDate = function () {
  return new UnderlyingLegMaturityDate(this.message.tags[UnderlyingLegMaturityDate.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegMaturityTime = function () {
  return new UnderlyingLegMaturityTime(this.message.tags[UnderlyingLegMaturityTime.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegStrikePrice = function () {
  return new UnderlyingLegStrikePrice(this.message.tags[UnderlyingLegStrikePrice.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegOptAttribute = function () {
  return new UnderlyingLegOptAttribute(this.message.tags[UnderlyingLegOptAttribute.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegPutOrCall = function () {
  return new UnderlyingLegPutOrCall(this.message.tags[UnderlyingLegPutOrCall.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSecurityExchange = function () {
  return new UnderlyingLegSecurityExchange(this.message.tags[UnderlyingLegSecurityExchange.Tag]);
};

/* field */
UnderlyingLegInstrument.prototype.underlyingLegSecurityDesc = function () {
  return new UnderlyingLegSecurityDesc(this.message.tags[UnderlyingLegSecurityDesc.Tag]);
};



UnderlyingLegInstrument.Tag = '1330';

module.exports = UnderlyingLegInstrument;