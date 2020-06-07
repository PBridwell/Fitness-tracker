// Bring in modules 
const router = require("express").Router();
const db = require("../models");

// route to get last workout 
router.get("/api/workouts", (req,res) => {
    db.Workout.find({})
    .then(data => {     
        console.log(data);   
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})


// route to create new exercise
router.post("/api/workouts", ({body}, res) => {
    db.Exercise.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
module.exports = router;