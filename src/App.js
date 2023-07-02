const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const spaceRoutes = require('./routes/spaeRoutes');
const bodyParser = require("body-parser");

// Middleware
// use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/space', spaceRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});