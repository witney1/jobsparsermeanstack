var express = require('express');
var router = express.Router();


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

req.on('error', function (error) {
  // handle request errors
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
//
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
wstream.write("test text");
//
  while (item = stream.read()) {
    console.log(item);
    wstream.write(item.body);
    ///
    //data.Body.toString()?
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
// Node.js 0.10+ emits finish when complete
wstream.on('finish', function () {
  console.log('file has been written');
});
wstream.write('Hello world!\n');
wstream.write('Another line');

    ///
    
    
  }
  
  // on Node.js older than 0.10, add cb to end()
wstream.end();
});
//
  res.render('index', { title: 'Parsing Feed' });

//
});
//
module.exports = router;
