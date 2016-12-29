var invert = require('invert-obj');

function SecondaryExecID (secondaryExecId) {
  this.message = secondaryExecId;
}

SecondaryExecID.prototype.value = function () {
  return this.message;
};

SecondaryExecID.Tag = '527';

SecondaryExecID.Type = 'STRING';

module.exports = SecondaryExecID;