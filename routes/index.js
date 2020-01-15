var express = require('express');
var router = express.Router();
var controller = require('../controllers/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingPage.hbs');
});

router.get('/signup',function(req,res,next){
  console.log(req.query)
  res.render('signup.hbs',{dup_email:req.query.dup_email,something_wrong:req.query.something_wrong})
})

router.get('/login',function(req,res,next){
  res.render('login.hbs',{signup_success:req.query.signup_success,invalid_password:req.query.invalid_password,user_not_found:req.query.user_not_found})
})

router.post('/signup',controller.signup)

router.post('/login',controller.login)

module.exports = router;
