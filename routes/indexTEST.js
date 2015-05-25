var express = require('express');
var router = express.Router();
/* Feed https://www.jobsatosu.com/all_jobs.atom */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Get Atom Feed */
router.get('/parse', function(req, res, next) {
//
var FeedParser = require('feedparser')
  , request = require('request');
var options = {};
var req = request('https://www.jobsatosu.com/all_jobs.atom')
  , feedparser = new FeedParser([options]);
//
});
//
module.exports = router;
