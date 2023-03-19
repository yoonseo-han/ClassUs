const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const bodyParser = require("body-parser");

app.use('/users', userRoutes);

// Middleware
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Server started on port 3000');
});