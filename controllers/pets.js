const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) =>{
	res.send('everything is working');
})

router.get('/pets', (req, res) =>{
	pet.find((err, pets)=>{
		if(err)
			res.send('/pets error');
		res.render('index', {pet: pets});
	})
})

router.get('/fruits/new', (req, res) =>{
	res.render('new', {});
})

module.exports = router;