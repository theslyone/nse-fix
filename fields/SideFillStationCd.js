var invert = require('invert-obj');

function SideFillStationCd (sideFillStationCd) {
  this.message = sideFillStationCd;
}

SideFillStationCd.prototype.value = function () {
  return this.message;
};

SideFillStationCd.Tag = '1006';

SideFillStationCd.Type = 'STRING';

module.exports = SideFillStationCd;