const express = require('express');
const router = express.Router();
const jobController = require('../controllers/api/jobsController');

// Handle POST request to create a new job
router.post('/', jobController.create);

// Handle GET request to retrieve a specific job by ID
router.get('/:id', jobController.show);

// Handle PUT request to update a specific job by ID
router.put('/:id', jobController.update);

// Handle DELETE request to delete a specific job by ID
router.delete('/:id', jobController.destroy);

module.exports = router;