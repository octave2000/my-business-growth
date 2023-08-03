const express = require('express');
const path = require('path');
const ejs = require('ejs');
const async = require('async');
const fetch = require('node-fetch');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');



const app = express();

app.use(cookieParser());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const server = app.listen(3000, function() {
  console.log('server started');
});

const premiumplan = require('./controllers/premiumplan');
const proplan = require('./controllers/proplan');
const contact = require('./controllers/contact');
const report = require('./controllers/report');
const newsletter = require('./controllers/newsletter');

const home = require('./controllers/home');

app.set('view engine', 'ejs');

app.use('/home', home);
app.use('/form1', proplan);
app.use('/form2', premiumplan);
app.use('/contact', contact);
app.use('/report', report);
app.use('/form3', newsletter);


