var invert = require('invert-obj');

function BrokerOfCredit (brokerOfCredit) {
  this.message = brokerOfCredit;
}

BrokerOfCredit.prototype.value = function () {
  return this.message;
};

BrokerOfCredit.Tag = '92';

BrokerOfCredit.Type = 'STRING';

module.exports = BrokerOfCredit;