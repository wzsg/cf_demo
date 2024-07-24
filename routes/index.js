var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let headersOutput = '';
  for (let header in req.headers) {
    headersOutput += `${header}: ${req.headers[header]}<br>`;
  }

  res.render('index', { title: 'Express', message: headersOutput });
});

module.exports = router;
