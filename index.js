const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3003
const bodyParser = require('body-parser');
const createNewUser = require('./controllers/index.js')

app.use(bodyParser.json());

app.use('/user', createNewUser)
mongoose.connect('mongodb://localhost:27017/moonshine')
.then(() =>
        app.listen(port, () => {
            console.log(`Server is running on port ${port} and connection to the moonshine database established`);
        })
);





