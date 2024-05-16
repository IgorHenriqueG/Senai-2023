const express = require('express');
const cors = require('cors');
const PORT = 3000;

const app = express();
const routes = require('./source/routes');

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));