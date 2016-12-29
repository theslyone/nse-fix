var NoTradingSessions = require('../fields/NoTradingSessions');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function TrdgSesGrp (trdgSesGrp) {
  this.message = trdgSesGrp;
}

/* group */

/* field */
TrdgSesGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
TrdgSesGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* end group */

TrdgSesGrp.Tag = '386';

module.exports = TrdgSesGrp;