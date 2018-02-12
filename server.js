const express = require('express');
const PORT = process.env.PORT || 9000;
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>App is working!</h1>');
});

//Test route
app.get('/test-route', (req, res) => {
    res.send('<h1>This is a test route, if you are seeing this all is well.</h1>');
});

//Listen function
app.listen(PORT, () => {
    console.log('Entering the world of development on port: ' + PORT);
});