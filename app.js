const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({
    message: 'Hello world',
    processId: process.pid,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
