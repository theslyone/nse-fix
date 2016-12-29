var invert = require('invert-obj');

function TotalVolumeTradedDate (totalVolumeTradedDate) {
  this.message = totalVolumeTradedDate;
}

TotalVolumeTradedDate.prototype.value = function () {
  return this.message;
};

TotalVolumeTradedDate.Tag = '449';

TotalVolumeTradedDate.Type = 'UTCDATEONLY';

module.exports = TotalVolumeTradedDate;