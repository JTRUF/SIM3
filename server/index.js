require('dotenv').config();
const express = require('express');
// const session = require('express-session');
const bodyParser = require('body-parser')
const controller = require('./controller.js');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
const massive = require('massive');

const app = express();
const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.post('/register', controller.register)
app.post('/login', controller.login)


app.listen(4000, () => console.log("Listening"));