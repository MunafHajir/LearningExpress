"use strict";

// Module dependecies
const express = require('express')

var ExampleController = require('./Controller')

// Routes
const router = express.Router();
router.get('/', ExampleController.getExamples)
router.get('/?examples',ExampleController.getExamples)

module.exports = router;