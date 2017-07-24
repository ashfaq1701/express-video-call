var ifNotAuthenticated = function(req, res, next)
{
	if(req.user)
	{
		res.redirect(req.get('referer'));
	}
	else
	{
		next();
	}
};

module.exports = ifNotAuthenticated;