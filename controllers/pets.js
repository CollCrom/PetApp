const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) =>{
	res.send('everything is working');
})

module.exports = router;