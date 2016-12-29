var invert = require('invert-obj');

function AsgnRptID (asgnRptId) {
  this.message = asgnRptId;
}

AsgnRptID.prototype.value = function () {
  return this.message;
};

AsgnRptID.Tag = '833';

AsgnRptID.Type = 'STRING';

module.exports = AsgnRptID;