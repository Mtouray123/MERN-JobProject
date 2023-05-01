import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllJobs } from '../utilities/jobs-api';

function JobsList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const jobsData = await getAllJobs();
      setJobs(jobsData);
    }
    fetchData();
  }, []);

  return (
    <div>
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
