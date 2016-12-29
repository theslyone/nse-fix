var invert = require('invert-obj');

function SettlInstSource (settlInstSource) {
  this.message = settlInstSource;
}

SettlInstSource.prototype.value = function () {
  return this.message;
};


SettlInstSource.Keys = {
  'BROKERS_INSTRUCTIONS': '1',
  'INSTITUTIONS_INSTRUCTIONS': '2',
  'INVESTOR': '3',
};

SettlInstSource.Tag = '165';

SettlInstSource.Type = 'CHAR';

SettlInstSource.Values = invert(SettlInstSource.Keys);

module.exports = SettlInstSource;