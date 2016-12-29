var invert = require('invert-obj');

function NoRpts (noRpts) {
  this.message = noRpts;
}

NoRpts.prototype.value = function () {
  return this.message;
};

NoRpts.Tag = '82';

NoRpts.Type = 'INT';

module.exports = NoRpts;