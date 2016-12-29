var invert = require('invert-obj');

function DefaultApplExtID (defaultApplExtId) {
  this.message = defaultApplExtId;
}

DefaultApplExtID.prototype.value = function () {
  return this.message;
};

DefaultApplExtID.Tag = '1407';

DefaultApplExtID.Type = 'INT';

module.exports = DefaultApplExtID;