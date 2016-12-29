var invert = require('invert-obj');

function AvgPxPrecision (avgPxPrecision) {
  this.message = avgPxPrecision;
}

AvgPxPrecision.prototype.value = function () {
  return this.message;
};

AvgPxPrecision.Tag = '74';

AvgPxPrecision.Type = 'INT';

module.exports = AvgPxPrecision;