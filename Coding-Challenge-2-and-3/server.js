const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const {Sports} = require('./models/sport-model');

const app = express();


app.post('/sports/addSport/:sportId', jsonParser, (req,res) => {
    let name = req.body.name;
    let num_player = req.body.num_player;
    let bid = req.body.id;
    let pid = req.params.sportId;

    if(name === undefined || num_player === undefined || bid === undefined || pid === undefined){
        res.statusMessage("One of the parameters is missing in body or the request")
        res.status(406).end();
    }

    if(bid !== pid) {
        res.statusMessage("The id in the body is not the same as the id in the body")
        res.status(409).end();
    }

    const sport = {
        name,
        num_player,
        bid
    }

    Sports
        createSport (sport){
                .then(result => {
                    res.status(201).json(result)
                })
                .catch(err => {
                    res.statusMessage("Id is already on the database")
                    res.status(400).end();
                })
    }

});


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});