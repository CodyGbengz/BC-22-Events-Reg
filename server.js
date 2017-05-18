const express = require('express'),
bodyParser = require('body-parser'),
auth = require('./controllers/auth.js');

//initialize express
const app = express();

var port = 8000;

//set up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//login page
app.get('/', (req, res) => {
  res.render('pages/register');
  
});

//register page
app.get('/register', (req, res) => {
	res.render('pages/register');
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


app.post('/register', auth.register);
app.post('/', auth.login);


app.listen(port, () => {
	console.log("Now listening on  " + port);
})