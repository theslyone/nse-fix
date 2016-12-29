var invert = require('invert-obj');

function CPRegType (cpregType) {
  this.message = cpregType;
}

CPRegType.prototype.value = function () {
  return this.message;
};

CPRegType.Tag = '876';

CPRegType.Type = 'STRING';

module.exports = CPRegType;