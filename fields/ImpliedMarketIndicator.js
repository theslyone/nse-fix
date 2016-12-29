var invert = require('invert-obj');

function ImpliedMarketIndicator (impliedMarketIndicator) {
  this.message = impliedMarketIndicator;
}

ImpliedMarketIndicator.prototype.value = function () {
  return this.message;
};


ImpliedMarketIndicator.Keys = {
  'NOT_IMPLIED': '0',
  'IMPLIED_IN': '1',
  'IMPLIED_OUT': '2',
  'BOTH_IMPLIED_IN_AND_IMPLIED_OUT': '3',
};

ImpliedMarketIndicator.Tag = '1144';

ImpliedMarketIndicator.Type = 'INT';

ImpliedMarketIndicator.Values = invert(ImpliedMarketIndicator.Keys);

module.exports = ImpliedMarketIndicator;