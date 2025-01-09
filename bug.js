const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid user IDs
  db.getUser(userId, (err, user) => {
    if (err) {
      // Handle the error appropriately (e.g., send a 500 error)
      console.error('Error fetching user:', err);
      res.status(500).send('Internal Server Error');
    } else if (!user) {
      // Handle the case where the user is not found
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));