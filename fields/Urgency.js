var invert = require('invert-obj');

function Urgency (urgency) {
  this.message = urgency;
}

Urgency.prototype.value = function () {
  return this.message;
};


Urgency.Keys = {
  'NORMAL': '0',
  'FLASH': '1',
  'BACKGROUND': '2',
};

Urgency.Tag = '61';

Urgency.Type = 'CHAR';

Urgency.Values = invert(Urgency.Keys);

module.exports = Urgency;