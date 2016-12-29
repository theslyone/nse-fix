var invert = require('invert-obj');

function RawData (rawData) {
  this.message = rawData;
}

RawData.prototype.value = function () {
  return this.message;
};

RawData.Tag = '96';

RawData.Type = 'DATA';

module.exports = RawData;