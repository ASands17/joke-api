var express = require('express');
var router = express.Router();
var jokes = require('../data/jokes.data');


/* GET users listing. */
router.get('/', function(req, res, next) {
    const joke = {"joke": jokes[Math.floor(Math.random() * jokes.length)]}
    res.send(joke);
});

module.exports = router;
