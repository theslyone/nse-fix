var invert = require('invert-obj');

function ForexReq (forexReq) {
  this.message = forexReq;
}

ForexReq.prototype.value = function () {
  return this.message;
};


ForexReq.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

ForexReq.Tag = '121';

ForexReq.Type = 'BOOLEAN';

ForexReq.Values = invert(ForexReq.Keys);

module.exports = ForexReq;