const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/enviroments');

const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://radardev:radardev@cluster0-4a2nr.mongodb.net/radardev?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      process.exit(0);
    }
    console.log('Connect database success!');
  }
);

const app = express();
app.use(express.json());
app.use(config.contextPath, routes);

app.listen(config.port, () => {
  console.log(`Server runner on port: ${config.port}`);
});
