const passport = require('passport');

module.exports = app => {
  app.post('/api/user/login', (req, res) => {
    console.log('req body', req.body);
    res.json({ success: true });
  });

  app.post('/api/user/register', (req, res) => {
    console.log('req body', req.body);
    res.json({ success: true });
  });
  // app.post('/api/user/login', passport.authenticate('local'), (req, res) => {
  //     console.log('req', req);
  //     res.json({ 'tada': 'yes'});
  // });
};
