const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name) {
    return res.status(400).send('Missing user name');
  }
  console.log(user.name);
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));