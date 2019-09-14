"use strict";

// Module dependecies
const express = require('express')
// Routes
const router = express.Router();
router.get('/', (req, res) => res.send('Hello World!'))
router.get('/examples', (req,res,next) => res.send(200,'test'))

module.exports = router;