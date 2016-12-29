var invert = require('invert-obj');

function AllocLinkType (allocLinkType) {
  this.message = allocLinkType;
}

AllocLinkType.prototype.value = function () {
  return this.message;
};


AllocLinkType.Keys = {
  'FX_NETTING': '0',
  'FX_SWAP': '1',
};

AllocLinkType.Tag = '197';

AllocLinkType.Type = 'INT';

AllocLinkType.Values = invert(AllocLinkType.Keys);

module.exports = AllocLinkType;