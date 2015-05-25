var express = require('express');
var bodyParser     =        require("body-parser");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Get Atom Feed and save as JSON file to import into DB or CACHE */
router.get('/parse', function(req, res, next) {
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
// Node.js 0.10+ emits finish when complete
wstream.on('finish', function () {
  console.log('file has been written');
});
//
rsj = require('rsj');
 rsj.r2j('https://www.jobsatosu.com/all_jobs.atom',function(json) { console.log(json);
	wstream.write(json);
	wstream.end()
})
  res.render('index', { title: 'Parsing Feed' });
});
////////////////////////////////////////////////////////////////////////////////
/* GET LIST OF DEPARTMENTS AUHTORS FROM MONGODB. */
router.get('/list', function(req, res, next) {
 // Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://104.131.1.140:27017/mydb", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection('mydb');
     //collection.find().toArray(function(err, items) {});
    
      db.close();
   
     //
  }
});
   
  res.render('index', { title: 'List Departments' });
    
});

//////////////////////////////////////////////////////////////////////////////
/* List by selected Dept. */
router.get('/dept/:department/sort/:sort', function(req, res, next) {
//res.send("Department: "+req.params.department+" "); 
//  res.render('index', { title: 'Express' });
  console.log(req.params.department);
//  
  var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://104.131.1.140:27017/mydb", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection('mydb');
     //collection.find().toArray(function(err, items) {});
      // Insert some users
      // todo sanitize req.params.department for injection attack?
    collection.find({author: req.params.department}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
         res.render('index', { title: 'Department List' });
        
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      db.close();
    });
     // db.close();
   
     //
  }
});
  
//  
});



module.exports = router;












