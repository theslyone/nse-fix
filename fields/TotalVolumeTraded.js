var invert = require('invert-obj');

function TotalVolumeTraded (totalVolumeTraded) {
  this.message = totalVolumeTraded;
}

TotalVolumeTraded.prototype.value = function () {
  return this.message;
};

TotalVolumeTraded.Tag = '387';

TotalVolumeTraded.Type = 'QTY';

module.exports = TotalVolumeTraded;