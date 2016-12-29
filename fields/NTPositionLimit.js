var invert = require('invert-obj');

function NTPositionLimit (ntpositionLimit) {
  this.message = ntpositionLimit;
}

NTPositionLimit.prototype.value = function () {
  return this.message;
};

NTPositionLimit.Tag = '971';

NTPositionLimit.Type = 'INT';

module.exports = NTPositionLimit;