var invert = require('invert-obj');

function SecurityReqID (securityReqId) {
  this.message = securityReqId;
}

SecurityReqID.prototype.value = function () {
  return this.message;
};

SecurityReqID.Tag = '320';

SecurityReqID.Type = 'STRING';

module.exports = SecurityReqID;