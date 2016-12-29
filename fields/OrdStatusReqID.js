var invert = require('invert-obj');

function OrdStatusReqID (ordStatusReqId) {
  this.message = ordStatusReqId;
}

OrdStatusReqID.prototype.value = function () {
  return this.message;
};

OrdStatusReqID.Tag = '790';

OrdStatusReqID.Type = 'STRING';

module.exports = OrdStatusReqID;