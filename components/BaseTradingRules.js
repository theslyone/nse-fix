var TickRules = require('../components/TickRules');
var LotTypeRules = require('../components/LotTypeRules');
var PriceLimits = require('../components/PriceLimits');
var ExpirationCycle = require('../fields/ExpirationCycle');
var MinTradeVol = require('../fields/MinTradeVol');
var MaxTradeVol = require('../fields/MaxTradeVol');
var MaxPriceVariation = require('../fields/MaxPriceVariation');
var ImpliedMarketIndicator = require('../fields/ImpliedMarketIndicator');
var TradingCurrency = require('../fields/TradingCurrency');
var RoundLot = require('../fields/RoundLot');
var MultilegModel = require('../fields/MultilegModel');
var MultilegPriceMethod = require('../fields/MultilegPriceMethod');
var PriceType = require('../fields/PriceType');

function BaseTradingRules (baseTradingRules) {
  this.message = baseTradingRules;
}
/* component */
BaseTradingRules.prototype.tickRules = function () {
  return this.message.groups[TickRules.Tag]
    .map(function (tickRules) {
      return new TickRules(tickRules);
  });
};

/* component */
BaseTradingRules.prototype.lotTypeRules = function () {
  return this.message.groups[LotTypeRules.Tag]
    .map(function (lotTypeRules) {
      return new LotTypeRules(lotTypeRules);
  });
};

/* component */
BaseTradingRules.prototype.priceLimits = function () {
  return this.message.groups[PriceLimits.Tag]
    .map(function (priceLimits) {
      return new PriceLimits(priceLimits);
  });
};

/* field */
BaseTradingRules.prototype.expirationCycle = function () {
  return new ExpirationCycle(this.message.tags[ExpirationCycle.Tag]);
};

/* field */
BaseTradingRules.prototype.minTradeVol = function () {
  return new MinTradeVol(this.message.tags[MinTradeVol.Tag]);
};

/* field */
BaseTradingRules.prototype.maxTradeVol = function () {
  return new MaxTradeVol(this.message.tags[MaxTradeVol.Tag]);
};

/* field */
BaseTradingRules.prototype.maxPriceVariation = function () {
  return new MaxPriceVariation(this.message.tags[MaxPriceVariation.Tag]);
};

/* field */
BaseTradingRules.prototype.impliedMarketIndicator = function () {
  return new ImpliedMarketIndicator(this.message.tags[ImpliedMarketIndicator.Tag]);
};

/* field */
BaseTradingRules.prototype.tradingCurrency = function () {
  return new TradingCurrency(this.message.tags[TradingCurrency.Tag]);
};

/* field */
BaseTradingRules.prototype.roundLot = function () {
  return new RoundLot(this.message.tags[RoundLot.Tag]);
};

/* field */
BaseTradingRules.prototype.multilegModel = function () {
  return new MultilegModel(this.message.tags[MultilegModel.Tag]);
};

/* field */
BaseTradingRules.prototype.multilegPriceMethod = function () {
  return new MultilegPriceMethod(this.message.tags[MultilegPriceMethod.Tag]);
};

/* field */
BaseTradingRules.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};



BaseTradingRules.Tag = '1205';

module.exports = BaseTradingRules;