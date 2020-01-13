var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://anuj_2901:rakesh192733@petbook-88mzn.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('hello')
});