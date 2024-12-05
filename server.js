const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//This code has the problem that if the request takes longer than the keep-alive timeout, the connection will be closed before the response is sent. This will cause the client to not receive the response, and will lead to errors.
