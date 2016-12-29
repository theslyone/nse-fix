var invert = require('invert-obj');

function OrigOrdModTime (origOrdModTime) {
  this.message = origOrdModTime;
}

OrigOrdModTime.prototype.value = function () {
  return this.message;
};

OrigOrdModTime.Tag = '586';

OrigOrdModTime.Type = 'UTCTIMESTAMP';

module.exports = OrigOrdModTime;