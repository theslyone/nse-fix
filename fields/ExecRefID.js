var invert = require('invert-obj');

function ExecRefID (execRefId) {
  this.message = execRefId;
}

ExecRefID.prototype.value = function () {
  return this.message;
};

ExecRefID.Tag = '19';

ExecRefID.Type = 'STRING';

module.exports = ExecRefID;