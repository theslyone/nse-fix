var invert = require('invert-obj');

function NoCompIDs (noCompIds) {
  this.message = noCompIds;
}

NoCompIDs.prototype.value = function () {
  return this.message;
};

NoCompIDs.Tag = '936';

NoCompIDs.Type = 'NUMINGROUP';

module.exports = NoCompIDs;