const { application } = require("express");
const express = require("express");

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
router.post("/", (req, res) => {
    res.json({mssg: "POST a new workout"});
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