const passport = require('passport');
const uuid = require('uuidv4').default;
const apiName = 'betaapi';

module.exports = (app, amplifyApi) => {
  app.post('/api/user/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
  });

  app.post('/api/user/register', async (req, res) => {
    try {
      const postData = {
        body: { id: `user_${uuid()}`, ...req.body },
        headers: {}
      };
      const results = await amplifyApi.post(apiName, '/users', postData);
      if (results.error) {
        res.status(200).json({ error: results.error });
        return;
      }
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).send({ error: { err } });
    }
  });

  app.get('/api/user/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/user/logout', (req, res) => {
    req.logout();
    res.status(200).json({ success: true });
  });

};
