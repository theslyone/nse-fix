var invert = require('invert-obj');

function SideValueInd (sideValueInd) {
  this.message = sideValueInd;
}

SideValueInd.prototype.value = function () {
  return this.message;
};


SideValueInd.Keys = {
  'SIDE_VALUE_1': '1',
  'SIDE_VALUE_2': '2',
};

SideValueInd.Tag = '401';

SideValueInd.Type = 'INT';

SideValueInd.Values = invert(SideValueInd.Keys);

module.exports = SideValueInd;