var invert = require('invert-obj');

function MiscFeeBasis (miscFeeBasis) {
  this.message = miscFeeBasis;
}

MiscFeeBasis.prototype.value = function () {
  return this.message;
};


MiscFeeBasis.Keys = {
  'ABSOLUTE': '0',
  'PER_UNIT': '1',
  'PERCENTAGE': '2',
};

MiscFeeBasis.Tag = '891';

MiscFeeBasis.Type = 'INT';

MiscFeeBasis.Values = invert(MiscFeeBasis.Keys);

module.exports = MiscFeeBasis;