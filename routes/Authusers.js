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

router.get('/homepage',controller.load_homepage)
router.get('/profile',controller.load_profilepage);

router.get('/gettingpost',controller.get_posts)

router.get('/viewprofile',controller.viewprofile)

router.get('/logout',function(req,res,next){
  req.session.destroy()
  res.redirect('/')
})

router.post('/follow',controller.follow)

router.post('/unfollow',controller.unfollow)

router.post('/likepost',controller.likepost)

router.post('/dislikepost',controller.dislikepost)

router.post('/share_post',controller.share_post)

router.post('/editprofile',controller.editprofile)

router.post('/savecomment',controller.savecomment)

module.exports = router;
