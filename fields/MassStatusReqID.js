var invert = require('invert-obj');

function MassStatusReqID (massStatusReqId) {
  this.message = massStatusReqId;
}

MassStatusReqID.prototype.value = function () {
  return this.message;
};

MassStatusReqID.Tag = '584';

MassStatusReqID.Type = 'STRING';

module.exports = MassStatusReqID;