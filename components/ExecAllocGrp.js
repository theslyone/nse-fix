var NoExecs = require('../fields/NoExecs');
var LastQty = require('../fields/LastQty');
var ExecID = require('../fields/ExecID');
var SecondaryExecID = require('../fields/SecondaryExecID');
var LastPx = require('../fields/LastPx');
var LastParPx = require('../fields/LastParPx');
var LastCapacity = require('../fields/LastCapacity');
var TradeID = require('../fields/TradeID');
var FirmTradeID = require('../fields/FirmTradeID');

function ExecAllocGrp (execAllocGrp) {
  this.message = execAllocGrp;
}

/* group */

/* field */
ExecAllocGrp.prototype.lastQty = function () {
  return new LastQty(this.message.tags[LastQty.Tag]);
};

/* field */
ExecAllocGrp.prototype.execId = function () {
  return new ExecID(this.message.tags[ExecID.Tag]);
};

/* field */
ExecAllocGrp.prototype.secondaryExecId = function () {
  return new SecondaryExecID(this.message.tags[SecondaryExecID.Tag]);
};

/* field */
ExecAllocGrp.prototype.lastPx = function () {
  return new LastPx(this.message.tags[LastPx.Tag]);
};

/* field */
ExecAllocGrp.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[LastParPx.Tag]);
};

/* field */
ExecAllocGrp.prototype.lastCapacity = function () {
  return new LastCapacity(this.message.tags[LastCapacity.Tag]);
};

/* field */
ExecAllocGrp.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeID.Tag]);
};

/* field */
ExecAllocGrp.prototype.firmTradeId = function () {
  return new FirmTradeID(this.message.tags[FirmTradeID.Tag]);
};

/* end group */

ExecAllocGrp.Tag = '124';

module.exports = ExecAllocGrp;