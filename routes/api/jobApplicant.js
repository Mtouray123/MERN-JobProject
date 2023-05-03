const express = require('express');
const router = express.Router();
const jobApplicantCtrl = require('../../controllers/api/jobApplicantCtrl');

router.post('/', jobApplicantCtrl.createJobApplicant);
router.get('/:id', jobApplicantCtrl.getJobApplicant);
router.put('/:id', jobApplicantCtrl.updateJobApplicant);
router.delete('/:id', jobApplicantCtrl.deleteJobApplicant);

module.exports = router;
