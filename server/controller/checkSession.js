let chalk = require('chalk');
let checkSession = function(req, res, next) {
    let user = req.session.user;
    console.log('checking: ',chalk.green(user));
    if (!user) {
        res.sendStatus(401);
    }
    next();
}

module.exports = checkSession;