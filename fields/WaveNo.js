var invert = require('invert-obj');

function WaveNo (waveNo) {
  this.message = waveNo;
}

WaveNo.prototype.value = function () {
  return this.message;
};

WaveNo.Tag = '105';

WaveNo.Type = 'STRING';

module.exports = WaveNo;