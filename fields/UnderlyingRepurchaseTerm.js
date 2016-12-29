var invert = require('invert-obj');

function UnderlyingRepurchaseTerm (underlyingRepurchaseTerm) {
  this.message = underlyingRepurchaseTerm;
}

UnderlyingRepurchaseTerm.prototype.value = function () {
  return this.message;
};

UnderlyingRepurchaseTerm.Tag = '244';

UnderlyingRepurchaseTerm.Type = 'INT';

module.exports = UnderlyingRepurchaseTerm;