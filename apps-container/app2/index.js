const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello from Application 2");
});

app.listen(PORT, () => console.log(`App 2 running on port ${PORT}`));