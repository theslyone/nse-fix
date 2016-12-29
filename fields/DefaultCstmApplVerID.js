var invert = require('invert-obj');

function DefaultCstmApplVerID (defaultCstmApplVerId) {
  this.message = defaultCstmApplVerId;
}

DefaultCstmApplVerID.prototype.value = function () {
  return this.message;
};

DefaultCstmApplVerID.Tag = '1408';

DefaultCstmApplVerID.Type = 'STRING';

module.exports = DefaultCstmApplVerID;