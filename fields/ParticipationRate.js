var invert = require('invert-obj');

function ParticipationRate (participationRate) {
  this.message = participationRate;
}

ParticipationRate.prototype.value = function () {
  return this.message;
};

ParticipationRate.Tag = '849';

ParticipationRate.Type = 'PERCENTAGE';

module.exports = ParticipationRate;