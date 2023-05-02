import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllJobs } from '../utilities/jobs-api';

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    async function fetchData() {
      const jobsData = await getAllJobs();
      setJobs(jobsData);
    }
    fetchData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/jobs/search?jobTitle=${jobTitle}&location=${location}`);
      const jobsData = await response.json();
      setJobs(jobsData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <h1>Jobs List</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.jobTitle}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>{job.description}</td>
              <td>{new Date(job.applicationDeadline).toDateString()}</td>
              <td>
                <Link to={`/jobs/${job._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/jobs/new">Add Job</Link>
    </div>
  );
}

export default JobsList;
