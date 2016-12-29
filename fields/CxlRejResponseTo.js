var invert = require('invert-obj');

function CxlRejResponseTo (cxlRejResponseTo) {
  this.message = cxlRejResponseTo;
}

CxlRejResponseTo.prototype.value = function () {
  return this.message;
};


CxlRejResponseTo.Keys = {
  'ORDER_CANCEL_REQUEST': '1',
  'ORDER_CANCEL_REPLACE_REQUEST': '2',
};

CxlRejResponseTo.Tag = '434';

CxlRejResponseTo.Type = 'CHAR';

CxlRejResponseTo.Values = invert(CxlRejResponseTo.Keys);

module.exports = CxlRejResponseTo;