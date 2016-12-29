var invert = require('invert-obj');

function MassActionType (massActionType) {
  this.message = massActionType;
}

MassActionType.prototype.value = function () {
  return this.message;
};


MassActionType.Keys = {
  'SUSPEND_ORDERS': '1',
  'RELEASE_ORDERS_FROM_SUSPENSION': '2',
  'CANCEL_ORDERS': '3',
};

MassActionType.Tag = '1373';

MassActionType.Type = 'INT';

MassActionType.Values = invert(MassActionType.Keys);

module.exports = MassActionType;