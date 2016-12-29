var invert = require('invert-obj');

function WtAverageLiquidity (wtAverageLiquidity) {
  this.message = wtAverageLiquidity;
}

WtAverageLiquidity.prototype.value = function () {
  return this.message;
};

WtAverageLiquidity.Tag = '410';

WtAverageLiquidity.Type = 'PERCENTAGE';

module.exports = WtAverageLiquidity;