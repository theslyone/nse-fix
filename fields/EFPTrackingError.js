var invert = require('invert-obj');

function EFPTrackingError (efptrackingError) {
  this.message = efptrackingError;
}

EFPTrackingError.prototype.value = function () {
  return this.message;
};

EFPTrackingError.Tag = '405';

EFPTrackingError.Type = 'PERCENTAGE';

module.exports = EFPTrackingError;