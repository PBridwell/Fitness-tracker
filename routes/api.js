// Bring in modules 
const router = require("express").Router();
const db = require("../models/Workout");

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

// get workout by id then push exercise 
router.put("/api/workouts/:id", ({body, params}, res) => {
    db.findByIdAndUpdate(params.id, {$push: {exercises: body}}, {new: true, runValidators: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    })
  });

// Create new workout
router.post("/api/workouts", (req, res) => {
    db.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

// Get data for stats 
router.get("/api/workouts/range", (req, res) => {
    db.find({})
    .limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });


module.exports = router;