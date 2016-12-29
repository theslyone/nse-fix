var invert = require('invert-obj');

function CustomerOrFirm (customerOrFirm) {
  this.message = customerOrFirm;
}

CustomerOrFirm.prototype.value = function () {
  return this.message;
};


CustomerOrFirm.Keys = {
  'CUSTOMER': '0',
  'FIRM': '1',
};

CustomerOrFirm.Tag = '204';

CustomerOrFirm.Type = 'INT';

CustomerOrFirm.Values = invert(CustomerOrFirm.Keys);

module.exports = CustomerOrFirm;