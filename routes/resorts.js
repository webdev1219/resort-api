/* eslint-disable no-underscore-dangle */
const express = require('express');
const Resort = require('../models/Resort');
// const Review = require('../models/Review');
// const middleware = require('../helpers/authMiddleware');

const router = express.Router();

// router.use(middleware.checkIfUserLoggedIn);

/* GET /resorts */
router.get('/', (req, res, next) => {
	Resort.find()
		.then(resorts => {
			res.status(200).json(resorts);
		})
		.catch(next);
});

// POST /resorts
router.post('/', (req, res, next) => {
	const { name, latitude, longitude } = req.body;
	Resort.create({
		name,
		latitude: parseFloat(latitude),
		longitude: parseFloat(longitude),
	})
		.then(resort => {
			res.json(resort);
		})
		.catch(next);
});

// POST /resorts/:id
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;

	Resort.findByIdAndDelete(id)
		.then(resort => {
			res.json(resort);
		})
		.catch(next);
});

// POST /resorts/:id
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const { name, latitude, longitude } = req.body;
	Resort.findByIdAndUpdate(id, {
		name,
		latitude,
		longitude,
	})
		.then(resortUpdated => {
			if (resortUpdated) {
				res.json(resortUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});

// POST /resorts/:id/review
// router.post('/:id/review', (req, res, next) => {
// 	const { id } = req.params;
// 	const { author, text } = req.body;
// 	Review.create({
// 		resort_id: id,
// 		author,
// 		text,
// 	})
// 		.then(() => {
// 			res.redirect(`/resorts/${id}/update`);
// 		})
// 		.catch(next);
// });

module.exports = router;
