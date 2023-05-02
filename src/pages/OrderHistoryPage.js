import { useEffect, useState } from "react";
import axios from "axios";

function OrderHistoryPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/jobs");
      setJobs(response.data);
    }
    fetchData();
  }, []);

  const handleDeleteJob = async (id) => {
    await axios.delete(`/api/jobs/${id}`);
    setJobs(jobs.filter((job) => job._id !== id));
  };

  const handleUpdateJob = async (id, updatedJob) => {
    const response = await axios.put(`/api/jobs/${id}`, updatedJob);
    setJobs(jobs.map((job) => (job._id === id ? response.data : job)));
  };

  return (
    <div>
      <h1>Job Application Page</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>
                <button onClick={() => handleDeleteJob(job._id)}>Delete</button>
                <button onClick={() => handleUpdateJob(job._id, { salary: "" })}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistoryPage;