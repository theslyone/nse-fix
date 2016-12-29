var invert = require('invert-obj');

function StandInstDbType (standInstDbType) {
  this.message = standInstDbType;
}

StandInstDbType.prototype.value = function () {
  return this.message;
};


StandInstDbType.Keys = {
  'OTHER': '0',
  'DTC_SID': '1',
  'THOMSON_ALERT': '2',
  'A_GLOBAL_CUSTODIAN': '3',
  'ACCOUNTNET': '4',
};

StandInstDbType.Tag = '169';

StandInstDbType.Type = 'INT';

StandInstDbType.Values = invert(StandInstDbType.Keys);

module.exports = StandInstDbType;