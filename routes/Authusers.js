var express = require('express');
var router = express.Router();
var controller = require('../controllers/authuser')

var app = require('../app')

/* GET users listing. */
router.use(function(req,res,next){
  if(req.session.user){
    next()
  }
  else{
    res.redirect('/login')
  }
})
router.get('/profile', function(req, res, next) {
  res.render('profile.hbs');
});

router.post('/share_post',controller.share_post)

module.exports = router;
