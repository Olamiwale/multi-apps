const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Hello from Application 3");
});

app.listen(PORT, () => console.log(`App 2 running on port ${PORT}`));