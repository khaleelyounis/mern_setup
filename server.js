const express = require('express');
const PORT = process.env.PORT || 9000;
const cors = require('cors');
const path = require('path');
const app = express();

//Cross Origin Request Middleware
app.use(cors());

//Path middleware
app.use(express.static(path.resolve(__dirname, 'client', 'dist')));

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>App is working! Now with Nodemon</h1>');
});

//Test route
// app.get('/test-route', (req, res) => {
//     res.send('<h1>This is a test route, if you are seeing this all is well.</h1>');
// });

app.get('/api/get-user', (req, res) => {
    res.send({ username: 'Bobthegreat', email: 'bob@mail.com', name: 'Bob' });
});

app.get('/api/get-articles', (req, res) => {
    res.send(['article-1', 'article-2', 'article-3']);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

//Listen function
app.listen(PORT, () => {
    console.log('Entering the world of development on port: ' + PORT);
});