var invert = require('invert-obj');

function GapFillFlag (gapFillFlag) {
  this.message = gapFillFlag;
}

GapFillFlag.prototype.value = function () {
  return this.message;
};


GapFillFlag.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

GapFillFlag.Tag = '123';

GapFillFlag.Type = 'BOOLEAN';

GapFillFlag.Values = invert(GapFillFlag.Keys);

module.exports = GapFillFlag;