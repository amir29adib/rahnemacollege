import express from 'express';
import { getUser } from './user';


const app = express();

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

app.get('/', (req, res) => {
    res.send(JSON.stringify({message: 'Welcome! Please go to route user/login for login!'}));
});

app.get('/user/login', (req, res) => {
    const username = req.query.username?.toString();
    const password = req.query.password?.toString();
    
    if (!username || !password) {
        return res.status(400).send(JSON.stringify({ message: 'Username and password are required' }));
    }

    const user = getUser(username, password);

    res.send(JSON.stringify(user));
});