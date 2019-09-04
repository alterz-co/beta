const bcrypt = require('bcrypt');
const saltRounds = 10;
const uuid = require('uuidv4').default;
const apiName = 'betaapi';
const path = '/users';

module.exports = (app, amplifyApi) => {
  app.post('/api/user/login', async (req, res) => {
    try {
      const postData = {
        body: req.body,
        headers: {}
      };
      const results = await amplifyApi.post(apiName, `${path}/login`, postData);
      if (results.error) {
        res.status(200).json({ error: results.error });
        return;
      }
      res.status(200).json(results);
    } catch (err) {
      res.status(200).send({ error: { err } });
    }
  });

  app.post('/api/user/register', async (req, res) => {
    try {
      const { password } = req.body;
      const hash = await bcrypt.hash(password, saltRounds);
      const postData = {
        body: { id: `user_${uuid()}`, ...req.body, password: hash },
        headers: {}
      };
      const results = await amplifyApi.post(apiName, '/users', postData);
      if (results.error) {
        res.status(200).json({ error: results.error });
        return;
      }
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(200).send({ error: { err } });
    }
  });
};
