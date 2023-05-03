import { sendRequest } from './jobs-service';

const BASE_URL = '/api/jobApplicant';

export function getAllJobApplicants() {
  return sendRequest(BASE_URL);
}

export function getJobApplicantById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createJobApplicant(jobApplicantData) {
  return sendRequest(BASE_URL, 'POST', jobApplicantData);
}

export function updateJobApplicant(id, jobApplicantData) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', jobApplicantData);
}

export function deleteJobApplicant(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
