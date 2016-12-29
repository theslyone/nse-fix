var NoUndlyInstrumentPartySubIDs = require('../fields/NoUndlyInstrumentPartySubIDs');
var UndlyInstrumentPartySubID = require('../fields/UndlyInstrumentPartySubID');
var UndlyInstrumentPartySubIDType = require('../fields/UndlyInstrumentPartySubIDType');

function UndlyInstrumentPtysSubGrp (undlyInstrumentPtysSubGrp) {
  this.message = undlyInstrumentPtysSubGrp;
}

/* group */

/* field */
UndlyInstrumentPtysSubGrp.prototype.undlyInstrumentPartySubId = function () {
  return new UndlyInstrumentPartySubID(this.message.tags[UndlyInstrumentPartySubID.Tag]);
};

/* field */
UndlyInstrumentPtysSubGrp.prototype.undlyInstrumentPartySubIdtype = function () {
  return new UndlyInstrumentPartySubIDType(this.message.tags[UndlyInstrumentPartySubIDType.Tag]);
};

/* end group */

UndlyInstrumentPtysSubGrp.Tag = '1062';

module.exports = UndlyInstrumentPtysSubGrp;