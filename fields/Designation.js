var invert = require('invert-obj');

function Designation (designation) {
  this.message = designation;
}

Designation.prototype.value = function () {
  return this.message;
};

Designation.Tag = '494';

Designation.Type = 'STRING';

module.exports = Designation;