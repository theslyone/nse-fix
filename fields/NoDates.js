var invert = require('invert-obj');

function NoDates (noDates) {
  this.message = noDates;
}

NoDates.prototype.value = function () {
  return this.message;
};

NoDates.Tag = '580';

NoDates.Type = 'INT';

module.exports = NoDates;