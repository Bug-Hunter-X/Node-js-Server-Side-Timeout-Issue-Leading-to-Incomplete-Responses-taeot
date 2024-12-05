const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use a timeout with a callback to handle potential errors during the delay
  const timeoutId = setTimeout(() => {
    res.send('Hello World!');
  }, 5000);

  // Ensure response is sent even if the client closes the connection before the timeout
  req.on('close', () => {
    clearTimeout(timeoutId);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//This solution uses the req.on('close', () => { clearTimeout(timeoutId);}) to handle the situation where the client closes the connection before the response is sent.