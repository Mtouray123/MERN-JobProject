// Create Job Seeker Schema
const mongoose = require('mongoose');
const {Schema} = mongoose;

const jobApplicantSchema = new Schema({
	fullname: {
		type: String,
		required: true
	},
	mail: {
		type: String,
		required: true
    },
    education:[{
        institute:{
            type: String,
            required: true
        },
        startyear: {
            type: String,
            required: true
        },
        endyear: {
            type: String,
            required: false
        }
    }],
    skill:[{
        type: String,
        required: false
    }]
});

module.exports = mongoose.model("jobapplicants", jobApplicantSchema);