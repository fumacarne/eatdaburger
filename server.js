var express = require('express');
var mysql= require('mysql');
var bodyParser= require('body-parser');
var methodOverride= require('method-override');
var exphbs= require('express-handlebars');
const app = express();


app.use(express.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
  defaultLayout:'main'
}));
app.set('view engine','handlebars');
 
var PORT = process.env.PORT || 8080;
var routes = require('./routes/router.js');
app.use('/', routes);

app.use(express.static(__dirname + "public"));

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  


