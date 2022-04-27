const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const PORT = 3000;

const app = express();
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.json({
    message: 'This is the home page',
  });
});

app.listen(PORT, () => {
  console.log(`App is listenning at http://localhost:${PORT}`);
});
