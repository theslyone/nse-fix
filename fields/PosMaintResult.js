var invert = require('invert-obj');

function PosMaintResult (posMaintResult) {
  this.message = posMaintResult;
}

PosMaintResult.prototype.value = function () {
  return this.message;
};


PosMaintResult.Keys = {
  'SUCCESSFUL_COMPLETION': '0',
  'REJECTED': '1',
  'OTHER': '99',
};

PosMaintResult.Tag = '723';

PosMaintResult.Type = 'INT';

PosMaintResult.Values = invert(PosMaintResult.Keys);

module.exports = PosMaintResult;