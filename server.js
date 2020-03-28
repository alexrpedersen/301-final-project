
'use strict'

// libraries
require('ejs')
require('dotenv').config
const pg = require('pg');
const cors = require('cors');
const express = require('express');
const superagent = require('superagent');
const methodOverride = require('method-override');

// global variables
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors()); // Allows everyone to access our info
app.set('view engine','ejs'); // EJS templating engine looks for views folder
app.use(methodOverride('_method')); // Turns a POST or GET into PUT or DELETE
app.use(express.static('./public')); // Serves our files from public
app.use(express.urlencoded({extended:true})); // Body parser

// setup PG
const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => console.error(err));

// Turn everything on
client.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}`);
        });
    });
