var invert = require('invert-obj');

function IOIQty (ioiqty) {
  this.message = ioiqty;
}

IOIQty.prototype.value = function () {
  return this.message;
};


IOIQty.Keys = {
  '1000000000': '0',
  'SMALL': 'S',
  'MEDIUM': 'M',
  'LARGE': 'L',
  'UNDISCLOSED_QUANTITY': 'U',
};

IOIQty.Tag = '27';

IOIQty.Type = 'STRING';

IOIQty.Values = invert(IOIQty.Keys);

module.exports = IOIQty;