var invert = require('invert-obj');

function RFQReqID (rfqreqId) {
  this.message = rfqreqId;
}

RFQReqID.prototype.value = function () {
  return this.message;
};

RFQReqID.Tag = '644';

RFQReqID.Type = 'STRING';

module.exports = RFQReqID;