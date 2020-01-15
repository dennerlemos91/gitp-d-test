const express = require('express');
const axios = require('axios');

const app = express();

app.get('/devs', async (req, res) => {
  const apiResponse = await axios.get(
    'https://api.github.com/users/dennerlemos91'
  );
});

app.listen(3333);
