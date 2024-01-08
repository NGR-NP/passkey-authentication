class pageController {
  welcome(req, res, next) {
    if (!req.user) return res.render('pages/welcome');
    next();
  }
}
module.exports = pageController;
