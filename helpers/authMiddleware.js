function checkIfUserLoggedIn(req, res, next) {
	if (req.session.currentUser) {
		res.locals.currentUser = req.session.currentUser;
		next();
	} else {
		res.redirect('/login');
	}
}

module.exports = {
	checkIfUserLoggedIn,
};
