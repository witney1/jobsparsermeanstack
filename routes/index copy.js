var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/fetch', function(req, res, next) {
/* https://www.npmjs.com/package/ortoo-feedparser */
//
var parser = require('rssparser');
var options = {};
//rss feeds
parser.parseURL('https://www.jobsatosu.com/all_jobs.atom', options, function(err, out){
    console.log(out);
}); 
//  res.render('index', { title: 'Fetching' });
});
// try another parser

/* GET home page. */
router.get('/parse', function(req, res, next) {
//
var FeedParser = require('feedparser')
  , request = require('request');
var options = {};
var req = request('https://www.jobsatosu.com/all_jobs.atom')
  , feedparser = new FeedParser([options]);

req.on('error', function (error) {
  // handle any request errors
});
req.on('response', function (res) {
  var stream = this;

  if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

  stream.pipe(feedparser);
});


feedparser.on('error', function(error) {
  // always handle errors
});
feedparser.on('readable', function() {
  // This is where the action is!
  var stream = this
    , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
    , item;

  while (item = stream.read()) {
    console.log(item);
  }
});
//
  res.render('index', { title: 'Parsing Feed' });

//
});
//
module.exports = router;
