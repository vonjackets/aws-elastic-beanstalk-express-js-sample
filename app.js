const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('The old world is gone, and we shall rise.')

app.listen(port);
console.log(`App running on http://localhost:${port}`);
