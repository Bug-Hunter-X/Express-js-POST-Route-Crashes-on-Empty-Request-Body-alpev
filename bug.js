const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if req.body is empty
  console.log(user.name); //Error: Cannot read properties of undefined (reading 'name')
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));