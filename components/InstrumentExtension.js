var AttrbGrp = require('../components/AttrbGrp');
var DeliveryForm = require('../fields/DeliveryForm');
var PctAtRisk = require('../fields/PctAtRisk');

function InstrumentExtension (instrumentExtension) {
  this.message = instrumentExtension;
}
/* component */
InstrumentExtension.prototype.attrbGrp = function () {
  return this.message.groups[AttrbGrp.Tag]
    .map(function (attrbGrp) {
      return new AttrbGrp(attrbGrp);
  });
};

/* field */
InstrumentExtension.prototype.deliveryForm = function () {
  return new DeliveryForm(this.message.tags[DeliveryForm.Tag]);
};

/* field */
InstrumentExtension.prototype.pctAtRisk = function () {
  return new PctAtRisk(this.message.tags[PctAtRisk.Tag]);
};



InstrumentExtension.Tag = '668';

module.exports = InstrumentExtension;