var invert = require('invert-obj');

function UnitOfMeasure (unitOfMeasure) {
  this.message = unitOfMeasure;
}

UnitOfMeasure.prototype.value = function () {
  return this.message;
};


UnitOfMeasure.Keys = {
  'MEGAWATT_HOURS': 'MWh',
  'ONE_MILLION_BTU': 'MMBtu',
  'BARRELS': 'Bbl',
  'GALLONS': 'Gal',
  'METRIC_TONS': 't',
  'TONS': 'tn',
  'MILLION_BARRELS': 'MMbbl',
  'POUNDS': 'lbs',
  'TROY_OUNCES': 'oz_tr',
  'US_DOLLARS': 'USD',
  'BILLION_CUBIC_FEET': 'Bcf',
  'BUSHELS': 'Bu',
};

UnitOfMeasure.Tag = '996';

UnitOfMeasure.Type = 'STRING';

UnitOfMeasure.Values = invert(UnitOfMeasure.Keys);

module.exports = UnitOfMeasure;