var BaseTradingRules = require('../components/BaseTradingRules');
var TradingSessionRulesGrp = require('../components/TradingSessionRulesGrp');
var NestedInstrumentAttribute = require('../components/NestedInstrumentAttribute');

function SecurityTradingRules (securityTradingRules) {
  this.message = securityTradingRules;
}
/* component */
SecurityTradingRules.prototype.baseTradingRules = function () {
  return this.message.groups[BaseTradingRules.Tag]
    .map(function (baseTradingRules) {
      return new BaseTradingRules(baseTradingRules);
  });
};

/* component */
SecurityTradingRules.prototype.tradingSessionRulesGrp = function () {
  return this.message.groups[TradingSessionRulesGrp.Tag]
    .map(function (tradingSessionRulesGrp) {
      return new TradingSessionRulesGrp(tradingSessionRulesGrp);
  });
};

/* component */
SecurityTradingRules.prototype.nestedInstrumentAttribute = function () {
  return this.message.groups[NestedInstrumentAttribute.Tag]
    .map(function (nestedInstrumentAttribute) {
      return new NestedInstrumentAttribute(nestedInstrumentAttribute);
  });
};



SecurityTradingRules.Tag = '1205';

module.exports = SecurityTradingRules;