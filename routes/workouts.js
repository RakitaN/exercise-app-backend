const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

//GET all workouts
router.get("/", (req, res) => {
    res.json({mssg: "GET all workouts"});
});

//GET a specific workout
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a specific workout"});
});

//POST a new workout
router.post("/", async (req, res) => {
    const {title, reps, load} = req.body;

    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
});

//DELETE a specific workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a specific workout"});
});

//UPDATE a specific workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a specific workout"});
});

module.exports = router;