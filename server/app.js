var cool = require('cool-ascii-faces');
var express = require( 'express' );
var app = express();


//spin up the server
app.listen( process.env.PORT || 3000, function( req, res ){
  console.log( 'server listening on port 3000' );
}); //end app.listen


app.get( '/', function( req, res ){
  console.log( 'base URL hit' );
  res.send( 'hello world from server!' );
});
