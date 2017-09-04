let checkSession = function(req, res, next) {
    let user = req.session.user;
    if (!user) {
        res.status = 401;
    }
    next();
}

module.exports = checkSession;