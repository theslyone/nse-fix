var invert = require('invert-obj');

function FillExecID (fillExecId) {
  this.message = fillExecId;
}

FillExecID.prototype.value = function () {
  return this.message;
};

FillExecID.Tag = '1363';

FillExecID.Type = 'STRING';

module.exports = FillExecID;