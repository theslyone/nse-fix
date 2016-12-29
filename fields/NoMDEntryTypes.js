var invert = require('invert-obj');

function NoMDEntryTypes (noMdentryTypes) {
  this.message = noMdentryTypes;
}

NoMDEntryTypes.prototype.value = function () {
  return this.message;
};

NoMDEntryTypes.Tag = '267';

NoMDEntryTypes.Type = 'NUMINGROUP';

module.exports = NoMDEntryTypes;