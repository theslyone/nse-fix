var invert = require('invert-obj');

function MDOriginType (mdoriginType) {
  this.message = mdoriginType;
}

MDOriginType.prototype.value = function () {
  return this.message;
};


MDOriginType.Keys = {
  'BOOK': '0',
  'OFF_BOOK': '1',
  'CROSS': '2',
};

MDOriginType.Tag = '1024';

MDOriginType.Type = 'INT';

MDOriginType.Values = invert(MDOriginType.Keys);

module.exports = MDOriginType;