var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var PrevClosePx = require('../fields/PrevClosePx');
var QuoteRequestType = require('../fields/QuoteRequestType');
var QuoteType = require('../fields/QuoteType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function RFQReqGrp (rfqreqGrp) {
  this.message = rfqreqGrp;
}

/* group */

/* component */
RFQReqGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
RFQReqGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
RFQReqGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* field */
RFQReqGrp.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[PrevClosePx.Tag]);
};

/* field */
RFQReqGrp.prototype.quoteRequestType = function () {
  return new QuoteRequestType(this.message.tags[QuoteRequestType.Tag]);
};

/* field */
RFQReqGrp.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteType.Tag]);
};

/* field */
RFQReqGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
RFQReqGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* end group */

RFQReqGrp.Tag = '146';

module.exports = RFQReqGrp;