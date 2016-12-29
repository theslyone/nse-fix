var invert = require('invert-obj');

function CollAsgnReason (collAsgnReason) {
  this.message = collAsgnReason;
}

CollAsgnReason.prototype.value = function () {
  return this.message;
};


CollAsgnReason.Keys = {
  'INITIAL': '0',
  'SCHEDULED': '1',
  'TIME_WARNING': '2',
  'MARGIN_DEFICIENCY': '3',
  'MARGIN_EXCESS': '4',
  'FORWARD_COLLATERAL_DEMAND': '5',
  'EVENT_OF_DEFAULT': '6',
  'ADVERSE_TAX_EVENT': '7',
};

CollAsgnReason.Tag = '895';

CollAsgnReason.Type = 'INT';

CollAsgnReason.Values = invert(CollAsgnReason.Keys);

module.exports = CollAsgnReason;