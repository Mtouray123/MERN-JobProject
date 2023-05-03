import { useState, useEffect } from "react";
import axios from "axios";
import JobApplicantForm from "../components/jobApplicantForm"
// import { updateJobApplicant } from "../utilities/jobApp-api";

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

  const handleShowJobApplicantForm = () => {
    setJobApplicantFormVisible(true);
  };

  const handleHideJobApplicantForm = () => {
    setJobApplicantFormVisible(false);
  };

  const [jobApplicantFormVisible, setJobApplicantFormVisible] = useState(false);

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
                <button onClick={handleShowJobApplicantForm}>Apply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {jobApplicantFormVisible && <JobApplicantForm onHide={handleHideJobApplicantForm} />}
    </div>
  );

}

export default OrderHistoryPage;
