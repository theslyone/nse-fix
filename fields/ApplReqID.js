var invert = require('invert-obj');

function ApplReqID (applReqId) {
  this.message = applReqId;
}

ApplReqID.prototype.value = function () {
  return this.message;
};

ApplReqID.Tag = '1346';

ApplReqID.Type = 'STRING';

module.exports = ApplReqID;