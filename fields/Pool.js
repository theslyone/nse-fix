var invert = require('invert-obj');

function Pool (pool) {
  this.message = pool;
}

Pool.prototype.value = function () {
  return this.message;
};

Pool.Tag = '691';

Pool.Type = 'STRING';

module.exports = Pool;