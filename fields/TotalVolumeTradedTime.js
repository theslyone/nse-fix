var invert = require('invert-obj');

function TotalVolumeTradedTime (totalVolumeTradedTime) {
  this.message = totalVolumeTradedTime;
}

TotalVolumeTradedTime.prototype.value = function () {
  return this.message;
};

TotalVolumeTradedTime.Tag = '450';

TotalVolumeTradedTime.Type = 'UTCTIMEONLY';

module.exports = TotalVolumeTradedTime;