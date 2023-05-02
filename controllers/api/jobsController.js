const Job = require('../../models/jobs');

module.exports = {
  // GET /api/jobs
  async getAllJobs(req, res) {
    try {
      const jobs = await Job.find({});
      return res.json(jobs);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },

  // POST /api/jobs
  async createJob(req, res) {
    try {
      const job = await Job.create(req.body);
      return res.status(201).json(job);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },

  // GET /api/jobs/:id
  async getJobById(req, res) {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      return res.json(job);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },

  // PUT /api/jobs/:id
  async updateJob(req, res) {
    try {
      const job = await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      return res.json(job);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  },

  // DELETE /api/jobs/:id
  async deleteJob(req, res) {
    try {
      const job = await Job.findByIdAndRemove(req.params.id);
      if (!job) {
        return res.status(404).json({ message: 'Job not found' });
      }
      return res.json({ message: 'Job deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  }
};
