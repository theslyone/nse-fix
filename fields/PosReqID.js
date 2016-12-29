var invert = require('invert-obj');

function PosReqID (posReqId) {
  this.message = posReqId;
}

PosReqID.prototype.value = function () {
  return this.message;
};

PosReqID.Tag = '710';

PosReqID.Type = 'STRING';

module.exports = PosReqID;