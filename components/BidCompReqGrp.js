var NoBidComponents = require('../fields/NoBidComponents');
var ListID = require('../fields/ListID');
var Side = require('../fields/Side');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var NetGrossInd = require('../fields/NetGrossInd');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');

function BidCompReqGrp (bidCompReqGrp) {
  this.message = bidCompReqGrp;
}

/* group */

/* field */
BidCompReqGrp.prototype.listId = function () {
  return new ListID(this.message.tags[ListID.Tag]);
};

/* field */
BidCompReqGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
BidCompReqGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
BidCompReqGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
BidCompReqGrp.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
BidCompReqGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
BidCompReqGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
BidCompReqGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
BidCompReqGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* end group */

BidCompReqGrp.Tag = '420';

module.exports = BidCompReqGrp;