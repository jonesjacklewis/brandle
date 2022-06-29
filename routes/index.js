const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, '../db/brandle.db'));


/* GET home page. */
router.get('/', function(req, res, next) {
  db.all('SELECT brand,colour,trueName FROM brandle;', function(
      err,
      results,
  ) {
    if (err) {
      console.error(err);
      res.send(`
      <script>window.alert("Please try again");
      window.location.reload();
      </script>`);
    } else {
      const correct = results[Math.floor(Math.random() * results.length)];
      const brand = correct.brand;
      const colour = correct.colour;
      res.cookie('correctAnswer', brand);
      res.render('index', {
        title: 'Brandle',
        results: results,
        colour: colour,
      });
    }
  });
});

module.exports = router;
