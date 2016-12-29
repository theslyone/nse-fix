var invert = require('invert-obj');

function DeskTypeSource (deskTypeSource) {
  this.message = deskTypeSource;
}

DeskTypeSource.prototype.value = function () {
  return this.message;
};


DeskTypeSource.Keys = {
  'NASD_OATS': '1',
};

DeskTypeSource.Tag = '1034';

DeskTypeSource.Type = 'INT';

DeskTypeSource.Values = invert(DeskTypeSource.Keys);

module.exports = DeskTypeSource;