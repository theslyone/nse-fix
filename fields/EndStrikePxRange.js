var invert = require('invert-obj');

function EndStrikePxRange (endStrikePxRange) {
  this.message = endStrikePxRange;
}

EndStrikePxRange.prototype.value = function () {
  return this.message;
};

EndStrikePxRange.Tag = '1203';

EndStrikePxRange.Type = 'PRICE';

module.exports = EndStrikePxRange;