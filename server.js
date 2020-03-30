
'use strict'

// libraries
// require('ejs');
require('dotenv').config();
// const pg = require('pg');
const cors = require('cors');
const express = require('express');
const superagent = require('superagent');
// const methodOverride = require('method-override');

// global variables
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors()); // Allows everyone to access our info
app.set('view engine','ejs'); // EJS templating engine looks for views folder
// app.use(methodOverride('_method')); // Turns a POST or GET into PUT or DELETE
app.use(express.static('./public')); // Serves our files from public
app.use(express.urlencoded({extended:true})); // Body parser

// setup PG
// const client = new pg.Client(process.env.DATABASE_URL);
// client.on('error', err => console.error(err));


const request = require("request");

const options = {
  method: 'GET',
//   type: 'JSON',
  url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
  qs: {term: 'chance', country: 'us'},
  headers: {
    'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
    'x-rapidapi-key': '38e058ddb8msh0ab4bb9902ac5b2p1d7aa3jsn10ae3807ccee'
  }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    let ourResults = JSON.parse(response.body);
    // console.log(body);
    console.log('Im testing this:', ourResults.results);
    return new Video(ourResults.results[0]);
});
let videoArray = [];

function Video(obj){
    this.name = obj.name;
    this.picture = obj.picture;
    this.locations = obj.locations;
    this.favorite = obj.favorite;
    videoArray.push(this);
  }
console.log('I am a videoArray', videoArray);

 

// Turn everything on
// client.connect()
//     .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on ${PORT}`)
        });
    // });



    