const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './config.env' });

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/login', (req, res) => {
    const { username, password } = req.body.params;

    if (username === process.env.V_USERNAME && password === process.env.V_PASSWORD) {
        const expires = new Date(new Date().setMonth(new Date().getMonth() + 1));

        res.cookie('login_session', process.env.V_TOKEN, { expires, httpOnly: true });
        res.status(200).json({
            status: 200,
            data: {
                token: process.env.V_TOKEN
            }
        });
    } else {
        res.status(400).json({
            status: 400,
            message: 'Credentials are not correct!'
        })
    }
});

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});