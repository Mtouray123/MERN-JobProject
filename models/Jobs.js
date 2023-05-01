const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    jobTitle: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
  }, {
    timestamps: true,
  });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;