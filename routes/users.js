var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  let xUsers = [
    { id: 1, name: "darshan" },
    { id: 2, name: "rangana" },
    { id: 3, name: "sanchita" },
    { id: 4, name: "misbah" }
  ];

  res.json(xUsers);
});

module.exports = router;
