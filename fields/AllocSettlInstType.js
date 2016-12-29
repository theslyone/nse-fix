var invert = require('invert-obj');

function AllocSettlInstType (allocSettlInstType) {
  this.message = allocSettlInstType;
}

AllocSettlInstType.prototype.value = function () {
  return this.message;
};


AllocSettlInstType.Keys = {
  'USE_DEFAULT_INSTRUCTIONS': '0',
  'DERIVE_FROM_PARAMETERS_PROVIDED': '1',
  'FULL_DETAILS_PROVIDED': '2',
  'SSI_DB_IDS_PROVIDED': '3',
  'PHONE_FOR_INSTRUCTIONS': '4',
};

AllocSettlInstType.Tag = '780';

AllocSettlInstType.Type = 'INT';

AllocSettlInstType.Values = invert(AllocSettlInstType.Keys);

module.exports = AllocSettlInstType;