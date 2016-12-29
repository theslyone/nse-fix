var invert = require('invert-obj');

function RawDataLength (rawDataLength) {
  this.message = rawDataLength;
}

RawDataLength.prototype.value = function () {
  return this.message;
};

RawDataLength.Tag = '95';

RawDataLength.Type = 'LENGTH';

module.exports = RawDataLength;