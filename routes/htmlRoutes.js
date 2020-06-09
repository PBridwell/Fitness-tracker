const path = require('path')
const router = require("express").Router();
// const db = require("../models");

// Route to get exercise page
router.get('/exercise', function(req, res) {
    res.sendFile(path.resolve('public/exercise.html'));
});

// Route to stats page 
router.get("/stats", (req, res) => {
    res.sendFile(path.resolve("public/stats.html"));
  });




module.exports = router