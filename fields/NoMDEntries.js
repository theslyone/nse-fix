var invert = require('invert-obj');

function NoMDEntries (noMdentries) {
  this.message = noMdentries;
}

NoMDEntries.prototype.value = function () {
  return this.message;
};

NoMDEntries.Tag = '268';

NoMDEntries.Type = 'NUMINGROUP';

module.exports = NoMDEntries;