//import dependencies

const express = require('express'),
bodyParser = require('body-parser'),
router = express.Router(),
dotenv = require('dotenv').config(),
auth = require('./controllers/auth.js');

//initialize express
const app = express();

var port = process.env.PORT || 8000;

//set up view engine
app.use('/public',express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');





// grab form data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./routes/events.js'));

app.listen(port, () => {
	console.log("Now listening on  " + port)}
)