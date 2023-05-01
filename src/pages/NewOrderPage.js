import { useState } from "react";

function NewOrderPage() {
    return (

        <h1>New Job</h1>
        
        
    )
}

function JobSearchForm({ onSearch }) {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [minSalary, setMinSalary] = useState(0);
    const [maxSalary, setMaxSalary] = useState(0);
  
    function handleSubmit(event) {
      event.preventDefault();
      const searchCriteria = {
        jobTitle,
        location,
        minSalary,
        maxSalary,
      };
      onSearch(searchCriteria);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Min Salary:
          <input type="number" value={minSalary} onChange={(e) => setMinSalary(e.target.value)} />
        </label>
        <label>
          Max Salary:
          <input type="number" value={maxSalary} onChange={(e) => setMaxSalary(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
  JobSearchForm();




export default NewOrderPage;