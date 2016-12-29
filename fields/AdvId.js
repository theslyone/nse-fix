var invert = require('invert-obj');

function AdvId (advId) {
  this.message = advId;
}

AdvId.prototype.value = function () {
  return this.message;
};

AdvId.Tag = '2';

AdvId.Type = 'STRING';

module.exports = AdvId;