var invert = require('invert-obj');

function AdvRefID (advRefId) {
  this.message = advRefId;
}

AdvRefID.prototype.value = function () {
  return this.message;
};

AdvRefID.Tag = '3';

AdvRefID.Type = 'STRING';

module.exports = AdvRefID;