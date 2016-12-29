var invert = require('invert-obj');

function DiscretionScope (discretionScope) {
  this.message = discretionScope;
}

DiscretionScope.prototype.value = function () {
  return this.message;
};


DiscretionScope.Keys = {
  'LOCAL': '1',
  'NATIONAL': '2',
  'GLOBAL': '3',
  'NATIONAL_EXCLUDING_LOCAL': '4',
};

DiscretionScope.Tag = '846';

DiscretionScope.Type = 'INT';

DiscretionScope.Values = invert(DiscretionScope.Keys);

module.exports = DiscretionScope;