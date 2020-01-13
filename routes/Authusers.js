var express = require('express');
var router = express.Router();
var controller = require('../controllers/authuser')


/* GET users listing. */
router.get('/profile', function(req, res, next) {
  res.render('profilepage.hbs');
});

router.post('/share_post',controller.share_post)

module.exports = router;
