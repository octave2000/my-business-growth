const express = require('express');
const fetch = require('node-fetch');
const PocketBase = require('pocketbase/cjs');
const pb = new PocketBase('http://127.0.0.1:8090');
const router = express.Router();



router.get("/", function (req, res) {
  res.render("report.ejs");
});

module.exports = router;