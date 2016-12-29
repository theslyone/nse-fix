var invert = require('invert-obj');

function Scope (scope) {
  this.message = scope;
}

Scope.prototype.value = function () {
  return this.message;
};


Scope.Keys = {
  'LOCAL_MARKET': '1',
  'NATIONAL': '2',
  'GLOBAL': '3',
};

Scope.Tag = '546';

Scope.Type = 'MULTIPLECHARVALUE';

Scope.Values = invert(Scope.Keys);

module.exports = Scope;