var invert = require('invert-obj');

function SecurityStatusReqID (securityStatusReqId) {
  this.message = securityStatusReqId;
}

SecurityStatusReqID.prototype.value = function () {
  return this.message;
};

SecurityStatusReqID.Tag = '324';

SecurityStatusReqID.Type = 'STRING';

module.exports = SecurityStatusReqID;