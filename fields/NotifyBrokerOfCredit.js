var invert = require('invert-obj');

function NotifyBrokerOfCredit (notifyBrokerOfCredit) {
  this.message = notifyBrokerOfCredit;
}

NotifyBrokerOfCredit.prototype.value = function () {
  return this.message;
};


NotifyBrokerOfCredit.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

NotifyBrokerOfCredit.Tag = '208';

NotifyBrokerOfCredit.Type = 'BOOLEAN';

NotifyBrokerOfCredit.Values = invert(NotifyBrokerOfCredit.Keys);

module.exports = NotifyBrokerOfCredit;