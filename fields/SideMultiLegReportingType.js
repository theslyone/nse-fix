var invert = require('invert-obj');

function SideMultiLegReportingType (sideMultiLegReportingType) {
  this.message = sideMultiLegReportingType;
}

SideMultiLegReportingType.prototype.value = function () {
  return this.message;
};


SideMultiLegReportingType.Keys = {
  'SINGLE_SECURITY': '1',
  'INDIVIDUAL_LEG_OF_A_MULTILEG_SECURITY': '2',
  'MULTILEG_SECURITY': '3',
};

SideMultiLegReportingType.Tag = '752';

SideMultiLegReportingType.Type = 'INT';

SideMultiLegReportingType.Values = invert(SideMultiLegReportingType.Keys);

module.exports = SideMultiLegReportingType;