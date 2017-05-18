const express = require('express');
const router = express.Router();

//dashboard
router.get('/', (req, res) => {
  	res.render('/pages/index');
  });

router.get('/dashboard', (req, res) => {
	res.render('dashboard', {error: null});
});

router.get('/event', (req, res) => {
	res.render('event', {error: null});
})


module.exports = router;