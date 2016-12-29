var invert = require('invert-obj');

function NoSides (noSides) {
  this.message = noSides;
}

NoSides.prototype.value = function () {
  return this.message;
};


NoSides.Keys = {
  'ONE_SIDE': '1',
  'BOTH_SIDES': '2',
};

NoSides.Tag = '552';

NoSides.Type = 'NUMINGROUP';

NoSides.Values = invert(NoSides.Keys);

module.exports = NoSides;