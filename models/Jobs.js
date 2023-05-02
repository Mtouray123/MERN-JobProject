const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    }
  }, {
    timestamps: true,
  });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;