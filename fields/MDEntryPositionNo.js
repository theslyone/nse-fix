var invert = require('invert-obj');

function MDEntryPositionNo (mdentryPositionNo) {
  this.message = mdentryPositionNo;
}

MDEntryPositionNo.prototype.value = function () {
  return this.message;
};

MDEntryPositionNo.Tag = '290';

MDEntryPositionNo.Type = 'INT';

module.exports = MDEntryPositionNo;