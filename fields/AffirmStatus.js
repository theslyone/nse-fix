var invert = require('invert-obj');

function AffirmStatus (affirmStatus) {
  this.message = affirmStatus;
}

AffirmStatus.prototype.value = function () {
  return this.message;
};


AffirmStatus.Keys = {
  'RECEIVED': '1',
  'CONFIRM_REJECTED_IE_NOT_AFFIRMED': '2',
  'AFFIRMED': '3',
};

AffirmStatus.Tag = '940';

AffirmStatus.Type = 'INT';

AffirmStatus.Values = invert(AffirmStatus.Keys);

module.exports = AffirmStatus;