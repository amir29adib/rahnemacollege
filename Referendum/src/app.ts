import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get('/', (req, res) => {
    res.send(JSON.stringify({message: 'Welcome! Please go to route user/login for login!'}));
});

app.get('/user/login', (req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    
    res.send(JSON.stringify({message: 'Everything is OK'}));
});