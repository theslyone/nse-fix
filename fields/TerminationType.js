var invert = require('invert-obj');

function TerminationType (terminationType) {
  this.message = terminationType;
}

TerminationType.prototype.value = function () {
  return this.message;
};


TerminationType.Keys = {
  'OVERNIGHT': '1',
  'TERM': '2',
  'FLEXIBLE': '3',
  'OPEN': '4',
};

TerminationType.Tag = '788';

TerminationType.Type = 'INT';

TerminationType.Values = invert(TerminationType.Keys);

module.exports = TerminationType;