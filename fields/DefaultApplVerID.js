var invert = require('invert-obj');

function DefaultApplVerID (defaultApplVerId) {
  this.message = defaultApplVerId;
}

DefaultApplVerID.prototype.value = function () {
  return this.message;
};

DefaultApplVerID.Tag = '1137';

DefaultApplVerID.Type = 'STRING';

module.exports = DefaultApplVerID;