var invert = require('invert-obj');

function PegScope (pegScope) {
  this.message = pegScope;
}

PegScope.prototype.value = function () {
  return this.message;
};


PegScope.Keys = {
  'LOCAL': '1',
  'NATIONAL': '2',
  'GLOBAL': '3',
  'NATIONAL_EXCLUDING_LOCAL': '4',
};

PegScope.Tag = '840';

PegScope.Type = 'INT';

PegScope.Values = invert(PegScope.Keys);

module.exports = PegScope;