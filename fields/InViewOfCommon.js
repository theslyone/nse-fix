var invert = require('invert-obj');

function InViewOfCommon (inViewOfCommon) {
  this.message = inViewOfCommon;
}

InViewOfCommon.prototype.value = function () {
  return this.message;
};


InViewOfCommon.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

InViewOfCommon.Tag = '328';

InViewOfCommon.Type = 'BOOLEAN';

InViewOfCommon.Values = invert(InViewOfCommon.Keys);

module.exports = InViewOfCommon;