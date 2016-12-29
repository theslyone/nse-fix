var invert = require('invert-obj');

function MultilegModel (multilegModel) {
  this.message = multilegModel;
}

MultilegModel.prototype.value = function () {
  return this.message;
};


MultilegModel.Keys = {
  'PREDEFINED_MULTILEG_SECURITY': '0',
  'USER_DEFINED_MULTLEG_SECURITY': '1',
  'USER_DEFINED_NON_SECURITIZED_MULTILEG': '2',
};

MultilegModel.Tag = '1377';

MultilegModel.Type = 'INT';

MultilegModel.Values = invert(MultilegModel.Keys);

module.exports = MultilegModel;