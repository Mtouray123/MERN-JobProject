import { getToken } from './users-service';

async function sendRequest(url, method = 'GET', payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, options);
  console.log(response);

  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }

  return response.json();
}

const BASE_URL = '/api/jobapplicants';

export async function createJobApplicant(jobApplicantData) {
  return sendRequest(BASE_URL, 'POST', jobApplicantData);
}

export async function updateJobApplicant(id, jobApplicantData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', jobApplicantData);
}
