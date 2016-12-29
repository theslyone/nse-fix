var invert = require('invert-obj');

function AdvTransType (advTransType) {
  this.message = advTransType;
}

AdvTransType.prototype.value = function () {
  return this.message;
};


AdvTransType.Keys = {
  'CANCEL': 'C',
  'NEW': 'N',
  'REPLACE': 'R',
};

AdvTransType.Tag = '5';

AdvTransType.Type = 'STRING';

AdvTransType.Values = invert(AdvTransType.Keys);

module.exports = AdvTransType;