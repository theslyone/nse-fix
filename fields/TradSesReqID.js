var invert = require('invert-obj');

function TradSesReqID (tradSesReqId) {
  this.message = tradSesReqId;
}

TradSesReqID.prototype.value = function () {
  return this.message;
};

TradSesReqID.Tag = '335';

TradSesReqID.Type = 'STRING';

module.exports = TradSesReqID;