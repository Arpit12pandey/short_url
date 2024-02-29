const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const urlRoutes = require('./routes/urlRoutes')
const path = require('path');

const app = express();
const PORT = 4001;

app.use(bodyParser.json());
//connect to the database
connectDB();
app.use('/',urlRoutes);
app.use(express.static(__dirname+'/../public'));

app.listen(PORT, () => {
    console.log(`Server is running fine on ${PORT}`);
})