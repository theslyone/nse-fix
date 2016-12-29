var invert = require('invert-obj');

function SettleOnOpenFlag (settleOnOpenFlag) {
  this.message = settleOnOpenFlag;
}

SettleOnOpenFlag.prototype.value = function () {
  return this.message;
};

SettleOnOpenFlag.Tag = '966';

SettleOnOpenFlag.Type = 'STRING';

module.exports = SettleOnOpenFlag;