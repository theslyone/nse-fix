var invert = require('invert-obj');

function NoMsgTypes (noMsgTypes) {
  this.message = noMsgTypes;
}

NoMsgTypes.prototype.value = function () {
  return this.message;
};

NoMsgTypes.Tag = '384';

NoMsgTypes.Type = 'NUMINGROUP';

module.exports = NoMsgTypes;