var NoTradingSessionRules = require('../fields/NoTradingSessionRules');
var TradingSessionRules = require('../components/TradingSessionRules');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function TradingSessionRulesGrp (tradingSessionRulesGrp) {
  this.message = tradingSessionRulesGrp;
}

/* group */

/* component */
TradingSessionRulesGrp.prototype.tradingSessionRules = function () {
  return this.message.groups[TradingSessionRules.Tag]
    .map(function (tradingSessionRules) {
      return new TradingSessionRules(tradingSessionRules);
  });
};

/* field */
TradingSessionRulesGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
TradingSessionRulesGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* end group */

TradingSessionRulesGrp.Tag = '1309';

module.exports = TradingSessionRulesGrp;