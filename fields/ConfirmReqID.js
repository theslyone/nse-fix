var invert = require('invert-obj');

function ConfirmReqID (confirmReqId) {
  this.message = confirmReqId;
}

ConfirmReqID.prototype.value = function () {
  return this.message;
};

ConfirmReqID.Tag = '859';

ConfirmReqID.Type = 'STRING';

module.exports = ConfirmReqID;