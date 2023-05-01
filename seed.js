const Job = require('./models/Jobs');

// create some dummy data
const jobs = [
  {
    jobTitle: 'Software Engineer',
    salary: 90000,
    description: 'We are looking for a software engineer with experience in JavaScript and Node.js',
    location: 'London',
    applicationDeadline: new Date('2023-06-01'),
  },
  {
    jobTitle: 'Data Analyst',
    salary: 70000,
    description: 'We are looking for a data analyst to help us extract insights from our data',
    location: 'Manchester',
    applicationDeadline: new Date('2023-05-31'),
  },
  {
    jobTitle: 'Marketing Manager',
    salary: 80000,
    description: 'We are looking for a marketing manager to help us develop and execute our marketing strategy',
    location: 'East Orange',
    applicationDeadline: new Date('2023-06-15'),
  },
];


Job.create(jobs)
  .then((result) => console.log(`${result.length} jobs created`))
  .catch((error) => console.error(error));