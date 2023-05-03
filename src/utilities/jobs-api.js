import { sendRequest } from './jobs-service';

const BASE_URL = '/api/jobs';

export function getAllJobs() {
  return sendRequest(BASE_URL);
}

export function getJobById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createJob(jobData) {
  return sendRequest(BASE_URL, 'POST', jobData);
}

export function updateJob(id, jobData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', jobData);
}

export function deleteJob(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
