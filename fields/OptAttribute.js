var invert = require('invert-obj');

function OptAttribute (optAttribute) {
  this.message = optAttribute;
}

OptAttribute.prototype.value = function () {
  return this.message;
};

OptAttribute.Tag = '206';

OptAttribute.Type = 'CHAR';

module.exports = OptAttribute;