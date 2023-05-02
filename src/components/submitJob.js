import React, { useState } from 'react';
import axios from 'axios';

function SubmitJob() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/jobs', {
        title: jobTitle,
        description: jobDescription,
        location: jobLocation,
        salary: jobSalary,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='submit-job' style={{ backgroundColor: 'darkblue', borderRadius: '10px', padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Submit a Job</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Job Title:
          <input
            type='text'
            name='jobTitle'
            placeholder='Enter job title'
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Job Description:
          <input
            type='text'
            name='jobDescription'
            placeholder='Enter job description'
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Job Location:
          <input
            type='text'
            name='jobLocation'
            placeholder='Enter job location'
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Job Salary:
          <input
            type='number'
            name='jobSalary'
            placeholder='Enter job salary'
            value={jobSalary}
            onChange={(e) => setJobSalary(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <button type='submit' style={{ backgroundColor: 'white', color: 'darkblue', borderRadius: '5px', border: 'none', padding: '5px 10px' }}>Submit</button>
      </form>
    </div>
  );
}

export default SubmitJob;
