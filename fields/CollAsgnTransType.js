var invert = require('invert-obj');

function CollAsgnTransType (collAsgnTransType) {
  this.message = collAsgnTransType;
}

CollAsgnTransType.prototype.value = function () {
  return this.message;
};


CollAsgnTransType.Keys = {
  'NEW': '0',
  'REPLACE': '1',
  'CANCEL': '2',
  'RELEASE': '3',
  'REVERSE': '4',
};

CollAsgnTransType.Tag = '903';

CollAsgnTransType.Type = 'INT';

CollAsgnTransType.Values = invert(CollAsgnTransType.Keys);

module.exports = CollAsgnTransType;