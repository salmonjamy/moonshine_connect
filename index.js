const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3003
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/moonshine')
.then(() =>
        app.listen(port, () => {
            console.log(`Server is running on port ${port} and connection to the moonshine database established`);
        })
);





