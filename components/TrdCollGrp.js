var NoTrades = require('../fields/NoTrades');
var TradeReportID = require('../fields/TradeReportID');
var SecondaryTradeReportID = require('../fields/SecondaryTradeReportID');

function TrdCollGrp (trdCollGrp) {
  this.message = trdCollGrp;
}

/* group */

/* field */
TrdCollGrp.prototype.tradeReportId = function () {
  return new TradeReportID(this.message.tags[TradeReportID.Tag]);
};

/* field */
TrdCollGrp.prototype.secondaryTradeReportId = function () {
  return new SecondaryTradeReportID(this.message.tags[SecondaryTradeReportID.Tag]);
};

/* end group */

TrdCollGrp.Tag = '897';

module.exports = TrdCollGrp;