const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://goweek:goweek123@ds221405.mlab.com:21405/goweew-douglas-backend', {})

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
});