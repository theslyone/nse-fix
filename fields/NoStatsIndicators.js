var invert = require('invert-obj');

function NoStatsIndicators (noStatsIndicators) {
  this.message = noStatsIndicators;
}

NoStatsIndicators.prototype.value = function () {
  return this.message;
};

NoStatsIndicators.Tag = '1175';

NoStatsIndicators.Type = 'NUMINGROUP';

module.exports = NoStatsIndicators;