const JobApplicant = require('../../models/jobapplicant');

module.exports = {
  createJobApplicant,
  getJobApplicant,
  updateJobApplicant,
  deleteJobApplicant,
};

async function createJobApplicant(req, res) {
  try {
    const jobApplicant = new JobApplicant(req.body);
    await jobApplicant.save();
    res.json({ jobApplicant });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function getJobApplicant(req, res) {
  try {
    const jobApplicant = await JobApplicant.findById(req.params.id);
    res.json({ jobApplicant });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function updateJobApplicant(req, res) {
  try {
    const jobApplicant = await JobApplicant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ jobApplicant });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function deleteJobApplicant(req, res) {
  try {
    await JobApplicant.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Job applicant deleted' });
  } catch (err) {
    res.status(400).json({ err });
  }
}
