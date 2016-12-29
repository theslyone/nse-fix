var invert = require('invert-obj');

function HopRefID (hopRefId) {
  this.message = hopRefId;
}

HopRefID.prototype.value = function () {
  return this.message;
};

HopRefID.Tag = '630';

HopRefID.Type = 'SEQNUM';

module.exports = HopRefID;