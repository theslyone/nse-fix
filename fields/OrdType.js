var invert = require('invert-obj');

function OrdType (ordType) {
  this.message = ordType;
}

OrdType.prototype.value = function () {
  return this.message;
};


OrdType.Keys = {
  'MARKET': '1',
  'LIMIT': '2',
  'STOP': '3',
  'STOP_LIMIT': '4',
  'MARKET_ON_CLOSE': '5',
  'WITH_OR_WITHOUT': '6',
  'LIMIT_OR_BETTER': '7',
  'LIMIT_WITH_OR_WITHOUT': '8',
  'ON_BASIS': '9',
  'ON_CLOSE': 'A',
  'LIMIT_ON_CLOSE': 'B',
  'FOREX_MARKET': 'C',
  'PREVIOUSLY_QUOTED': 'D',
  'PREVIOUSLY_INDICATED': 'E',
  'FOREX_LIMIT': 'F',
  'FOREX_SWAP': 'G',
  'FOREX_PREVIOUSLY_QUOTED': 'H',
  'FUNARI': 'I',
  'MARKET_IF_TOUCHED': 'J',
  'MARKET_WITH_LEFT_OVER_AS_LIMIT': 'K',
  'PREVIOUS_FUND_VALUATION_POINT': 'L',
  'NEXT_FUND_VALUATION_POINT': 'M',
  'PEGGED': 'P',
  'COUNTER_ORDER_SELECTION': 'Q',
};

OrdType.Tag = '40';

OrdType.Type = 'CHAR';

OrdType.Values = invert(OrdType.Keys);

module.exports = OrdType;