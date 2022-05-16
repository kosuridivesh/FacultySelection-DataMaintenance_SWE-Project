export const server = "http://34.145.171.118:4444";
// export const server = "http://localhost:4444";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  sendmail: `${server}/api/sendmail`,
  signupmail: `${server}/api/signupmail`,
  sendaccmail: `${server}/api/sendaccmail`,
  authmail: `${server}/api/authmail`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
  rec: `${server}/api/something`,
  createExcel: `${server}/api/createExcel`,
};

export default apiList;
