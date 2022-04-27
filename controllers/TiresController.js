///////////////
// Dependencies
/////////////////
const express = require("express");
const router = express.Router();
const Tire = require("../models/Tire");

//////////////////
// Routes
/////////////////
router.get("/tires", async (req, res) =>{
    const tires = await Tire.find({}).catch(err => res.send(err));
    res.json(tires);
})


/////////////
// Export Router
/////////////
module.exports = router;