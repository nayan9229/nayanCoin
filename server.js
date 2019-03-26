const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

app.use(cors());

require('./src/routes')(app);

app.listen(port, () => {
  console.log('We are live on : ' + port);
});