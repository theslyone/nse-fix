var invert = require('invert-obj');

function OrigPosReqRefID (origPosReqRefId) {
  this.message = origPosReqRefId;
}

OrigPosReqRefID.prototype.value = function () {
  return this.message;
};

OrigPosReqRefID.Tag = '713';

OrigPosReqRefID.Type = 'STRING';

module.exports = OrigPosReqRefID;