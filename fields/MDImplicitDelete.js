var invert = require('invert-obj');

function MDImplicitDelete (mdimplicitDelete) {
  this.message = mdimplicitDelete;
}

MDImplicitDelete.prototype.value = function () {
  return this.message;
};


MDImplicitDelete.Keys = {
  'NO': 'N',
  'YES': 'Y',
};

MDImplicitDelete.Tag = '547';

MDImplicitDelete.Type = 'BOOLEAN';

MDImplicitDelete.Values = invert(MDImplicitDelete.Keys);

module.exports = MDImplicitDelete;