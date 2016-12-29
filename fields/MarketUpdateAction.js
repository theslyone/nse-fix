var invert = require('invert-obj');

function MarketUpdateAction (marketUpdateAction) {
  this.message = marketUpdateAction;
}

MarketUpdateAction.prototype.value = function () {
  return this.message;
};


MarketUpdateAction.Keys = {
  'ADD': 'A',
  'DELETE': 'D',
  'MODIFY': 'M',
};

MarketUpdateAction.Tag = '1395';

MarketUpdateAction.Type = 'CHAR';

MarketUpdateAction.Values = invert(MarketUpdateAction.Keys);

module.exports = MarketUpdateAction;