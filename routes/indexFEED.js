var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Get Atom Feed */
router.get('/parse', function(req, res, next) {
//
var feed = require("feed-read");
feed("https://www.jobsatosu.com/all_jobs.atom", function(err, articles) {
  if (err) throw err;
  // Each article has the following properties:
  // 
  //   * "title"     - The article title (String).
  //   * "author"    - The author's name (String).
  //   * "link"      - The original article link (String).
  //   * "content"   - The HTML content of the article (String).
  //   * "published" - The date that the article was published (Date).
  //   * "feed"      - {name, source, link}
  // 
  
    console.log(article);
});

//
  res.render('index', { title: 'Parsing Feed' });


//
});
//
module.exports = router;
