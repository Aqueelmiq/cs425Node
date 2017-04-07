var express = require('express');
var router = express.Router();
var User = require("../models").User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { fat: 'LOL POOP' });
});

router.get('/user', function(req, res, next) {
    res.render('user', { user: {name: "pooper", pass: "12345"} });
});

router.post('/user', function(req, res, next) {
  User.create(req.body).then(function (user) {
      res.redirect('user');
  });
});

module.exports = router;
