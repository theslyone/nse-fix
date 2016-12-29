var invert = require('invert-obj');

function MDUpdateType (mdupdateType) {
  this.message = mdupdateType;
}

MDUpdateType.prototype.value = function () {
  return this.message;
};


MDUpdateType.Keys = {
  'FULL_REFRESH': '0',
  'INCREMENTAL_REFRESH': '1',
};

MDUpdateType.Tag = '265';

MDUpdateType.Type = 'INT';

MDUpdateType.Values = invert(MDUpdateType.Keys);

module.exports = MDUpdateType;