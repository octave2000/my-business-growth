const express = require('express');
const fetch = require('node-fetch');
const PocketBase = require('pocketbase/cjs');
const pb = new PocketBase('https://pocketbase-001.betterlevelgroup.com');
const router = express.Router();



router.get("/", function (req, res) {
  res.render("report.ejs");
});

module.exports = router;