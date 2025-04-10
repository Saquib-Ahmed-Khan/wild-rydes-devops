const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Wild Rydes App deployed via AWS CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
