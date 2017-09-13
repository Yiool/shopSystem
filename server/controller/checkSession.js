let checkSession = function(req, res, next) {
    let user = req.session.user;
    console.log('check', user);
    if (!user) {
        res.sendStatus(401);
    }
    next();
}

module.exports = checkSession;