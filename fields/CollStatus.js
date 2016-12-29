var invert = require('invert-obj');

function CollStatus (collStatus) {
  this.message = collStatus;
}

CollStatus.prototype.value = function () {
  return this.message;
};


CollStatus.Keys = {
  'UNASSIGNED': '0',
  'PARTIALLY_ASSIGNED': '1',
  'ASSIGNMENT_PROPOSED': '2',
  'ASSIGNED': '3',
  'CHALLENGED': '4',
};

CollStatus.Tag = '910';

CollStatus.Type = 'INT';

CollStatus.Values = invert(CollStatus.Keys);

module.exports = CollStatus;