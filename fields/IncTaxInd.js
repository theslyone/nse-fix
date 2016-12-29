var invert = require('invert-obj');

function IncTaxInd (incTaxInd) {
  this.message = incTaxInd;
}

IncTaxInd.prototype.value = function () {
  return this.message;
};


IncTaxInd.Keys = {
  'NET': '1',
  'GROSS': '2',
};

IncTaxInd.Tag = '416';

IncTaxInd.Type = 'INT';

IncTaxInd.Values = invert(IncTaxInd.Keys);

module.exports = IncTaxInd;