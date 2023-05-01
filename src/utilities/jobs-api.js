import { getToken } from './users-service';

const BASE_URL = '/api/jobs';

export async function getAllJobs() {
  const response = await fetch(BASE_URL);
  return response.json();
}

export async function addJob(jobData) {
  const token = getToken();
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(jobData),
  });
  return response.json();
}

export async function deleteJob(jobId) {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/${jobId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
