var invert = require('invert-obj');

function IOINaturalFlag (ioinaturalFlag) {
  this.message = ioinaturalFlag;
}

IOINaturalFlag.prototype.value = function () {
  return this.message;
};


IOINaturalFlag.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

IOINaturalFlag.Tag = '130';

IOINaturalFlag.Type = 'BOOLEAN';

IOINaturalFlag.Values = invert(IOINaturalFlag.Keys);

module.exports = IOINaturalFlag;