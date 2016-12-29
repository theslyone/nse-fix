var invert = require('invert-obj');

function ContraBroker (contraBroker) {
  this.message = contraBroker;
}

ContraBroker.prototype.value = function () {
  return this.message;
};

ContraBroker.Tag = '375';

ContraBroker.Type = 'STRING';

module.exports = ContraBroker;