var invert = require('invert-obj');

function ContingencyType (contingencyType) {
  this.message = contingencyType;
}

ContingencyType.prototype.value = function () {
  return this.message;
};


ContingencyType.Keys = {
  'ONE_CANCELS_THE_OTHER': '1',
  'ONE_TRIGGERS_THE_OTHER': '2',
  'ONE_UPDATES_THE_OTHER_3': '3',
  'ONE_UPDATES_THE_OTHER_4': '4',
};

ContingencyType.Tag = '1385';

ContingencyType.Type = 'INT';

ContingencyType.Values = invert(ContingencyType.Keys);

module.exports = ContingencyType;