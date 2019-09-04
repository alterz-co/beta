const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const uuid = require('uuidv4').default;
const apiName = 'betaapi';
const path = '/users';

module.exports = (app, amplifyApi) => {
  app.post('/api/user/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const userData = await amplifyApi.get(apiName, `${path}/find/${email}`);
      if (userData.length === 0) {
        res.status(200).json({ error: 'User does not exist' });
      } else {
        const saltedPassword = userData[0].password;
        const result = await bcrypt.compare(password, saltedPassword);
        if (!result) {
          res.status(200).json({ error: 'Invalid password' });
          return;
        }
        res.status(200).json({ success: true });
      }
    } catch (err) {
      res.status(200).send({ error: { err } });
    }
  });

  app.post('/api/user/register', async (req, res) => {
    try {
      const { email, password } = req.body;
      const userData = await amplifyApi.get(apiName, `${path}/find/${email}`);
      if (userData.length !== 0) {
        res.status(200).json({ error: 'Email already exists' });
      } else {
        const hash = await bcrypt.hash(password, saltRounds);
        const postData = {
          body: { id: `user_${uuid()}`, ...req.body, password: hash },
          headers: {}
        };
        await amplifyApi.post('betaapi', '/users', postData);
        res.status(200).json({ success: true });
      }
    } catch (err) {
      res.status(200).send({ error: { err } });
    }
  });
};
