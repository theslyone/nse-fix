var invert = require('invert-obj');

function TriggerPriceType (triggerPriceType) {
  this.message = triggerPriceType;
}

TriggerPriceType.prototype.value = function () {
  return this.message;
};


TriggerPriceType.Keys = {
  'BEST_OFFER': '1',
  'LAST_TRADE': '2',
  'BEST_BID': '3',
  'BEST_BID_OR_LAST_TRADE': '4',
  'BEST_OFFER_OR_LAST_TRADE': '5',
  'BEST_MID': '6',
};

TriggerPriceType.Tag = '1107';

TriggerPriceType.Type = 'CHAR';

TriggerPriceType.Values = invert(TriggerPriceType.Keys);

module.exports = TriggerPriceType;