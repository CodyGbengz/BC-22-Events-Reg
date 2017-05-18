const express = require('express'),
bodyParser = require('body-parser'),
router = express.Router(),
dotenv = require('dotenv').config(),
auth = require('./controllers/auth.js');

//initialize express
const app = express();

var port = process.env.PORT || 8000;

//set up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//login page
app.get('/', (req, res) => {
  res.render('pages/index');
  
});

//register page
app.get('/register', (req, res) => {
	res.render('pages/register', {error: null});
});

//homepage
app.post('/dashboard', (req, res) => {
	res.render('pages/dashboard');
});

app.get('/event', (req,res) => {
	res.render('pages/event');
});

app.get('/create', (req, res) => {
	res.render('pages/create');
})


//set up view engine



app.use(express.static('public'))


// grab form data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/dashboard', (req,res,next) => {
	next()
}, require('./routes/events.js'));

app.listen(port, () => {
	console.log("Now listening on  " + port);
})