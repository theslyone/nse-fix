var OrdTypeRules = require('../components/OrdTypeRules');
var TimeInForceRules = require('../components/TimeInForceRules');
var ExecInstRules = require('../components/ExecInstRules');
var MatchRules = require('../components/MatchRules');
var MarketDataFeedTypes = require('../components/MarketDataFeedTypes');

function TradingSessionRules (tradingSessionRules) {
  this.message = tradingSessionRules;
}
/* component */
TradingSessionRules.prototype.ordTypeRules = function () {
  return this.message.groups[OrdTypeRules.Tag]
    .map(function (ordTypeRules) {
      return new OrdTypeRules(ordTypeRules);
  });
};

/* component */
TradingSessionRules.prototype.timeInForceRules = function () {
  return this.message.groups[TimeInForceRules.Tag]
    .map(function (timeInForceRules) {
      return new TimeInForceRules(timeInForceRules);
  });
};

/* component */
TradingSessionRules.prototype.execInstRules = function () {
  return this.message.groups[ExecInstRules.Tag]
    .map(function (execInstRules) {
      return new ExecInstRules(execInstRules);
  });
};

/* component */
TradingSessionRules.prototype.matchRules = function () {
  return this.message.groups[MatchRules.Tag]
    .map(function (matchRules) {
      return new MatchRules(matchRules);
  });
};

/* component */
TradingSessionRules.prototype.marketDataFeedTypes = function () {
  return this.message.groups[MarketDataFeedTypes.Tag]
    .map(function (marketDataFeedTypes) {
      return new MarketDataFeedTypes(marketDataFeedTypes);
  });
};



TradingSessionRules.Tag = '1237';

module.exports = TradingSessionRules;