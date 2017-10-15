const express = require('express');
const router = express.Router();
const pet = require('../models/pets');

router.get('/', (req, res) =>{
	pet.find((err, pets)=>{
		if(err)
			res.send('/pets error');
		res.render('index', {pet: pets});
	})
})

router.get('/new', (req, res) =>{
	res.render('new', {});
})

router.post('/create', (req, res) =>{
	pet.create(req.body, (err, pet) =>{
		if(err)
			res.send('/create error');
		res.redirect('/pets')
	})
})

router.get('/:id/edit', (req, res) =>{
	pet.findById(req.params.id, (err, pet)=>{
		if(err)
			res.send('/edit get error');
		res.render('edit', {pets: pet})
	})
})

router.put('/:id/edit' , (req,res) =>{
	pet.findByIdAndUpdate(req.params.id, req.body, (err, pet) =>{
		if(err)
			res.send('/edit put error')
		res.redirect('/pets')
	})
})

router.delete('/:id', (req, res) =>{
	pet.findByIdAndRemove(req.params.id, (err, pet) =>{
		if(err)
			res.send('/delete error');
		res.redirect('/pets')
	})
})

module.exports = router;