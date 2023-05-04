import React, { useState } from 'react';

function JobApplicantForm({applicant}) {
  const [fullname, setFullname] = useState('');
  const [mail, setMail] = useState('');
  const [institute, setInstitute] = useState('');
  const [startyear, setStartyear] = useState('');
  const [endyear, setEndyear] = useState('');
  const [skill, setSkill] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = '/api/jobApplicant';
    const options = {
      method: applicant ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullname,
        mail,
        education: [
          {
            institute,
            startyear,
            endyear,
          },
        ],
        skill: [skill],
      }),
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='job-applicant-form' style={{ backgroundColor: 'darkblue', borderRadius: '10px', padding: '20px' }}>
      <h2 style={{ color: 'white', textAlign: 'center' }}>Job Applicant Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Full Name:
          <input
            type='text'
            name='fullname'
            placeholder='Enter your full name'
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Email:
          <input
            type='text'
            name='mail'
            placeholder='Enter your email'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Institute:
          <input
            type='text'
            name='institute'
            placeholder='Enter your institute'
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Start Year:
          <input
            type='text'
            name='startyear'
            placeholder='Enter your start year'
            value={startyear}
            onChange={(e) => setStartyear(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          End Year:
          <input
            type='text'
            name='endyear'
            placeholder='Enter your end year'
            value={endyear}
            onChange={(e) => setEndyear(e.target.value)}
            style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
          />
        </label>
        <label style={{ color: 'white', marginBottom: '10px' }}>
          Skill:
          <input
          type='text'
          name='skill'
    placeholder='Enter your skill'
    value={skill}
    onChange={(e) => setSkill(e.target.value)}
    style={{ marginLeft: '10px', borderRadius: '5px', border: 'none', padding: '5px' }}
  />
</label>
<button type="submit" style={{ backgroundColor: 'white', color: 'darkblue', borderRadius: '5px', border: 'none', padding: '5px 10px' }}>
  {applicant ? 'Update' : 'Apply'}
</button>
    </form>
    </div>
  );
}

export default JobApplicantForm;
