var Username = require('../fields/Username');

function UsernameGrp (usernameGrp) {
  this.message = usernameGrp;
}
/* field */
UsernameGrp.prototype.username = function () {
  return new Username(this.message.tags[Username.Tag]);
};



UsernameGrp.Tag = '553';

module.exports = UsernameGrp;