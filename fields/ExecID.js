var invert = require('invert-obj');

function ExecID (execId) {
  this.message = execId;
}

ExecID.prototype.value = function () {
  return this.message;
};

ExecID.Tag = '17';

ExecID.Type = 'STRING';

module.exports = ExecID;