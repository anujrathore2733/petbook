var express = require('express');
var router = express.Router();
var controller = require('../controllers/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingPage.hbs');
});

router.get('/getin',function(req,res,next){
  
  res.render('getin.hbs',{signup_success:req.query.signup_success,user_not_found:req.query.user_not_found,invalid_password:req.query.invalid_password,dup_email:req.query.dup_email})
})

router.get('/Aboutus', function(req,res){
  res.render('Aboutus.hbs')
})

router.post('/signup',controller.signup)

router.post('/login',controller.login)

module.exports = router;
