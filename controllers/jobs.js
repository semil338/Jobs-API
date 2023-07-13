const getAllJobs = async (req, res) => {};
const getJob = async (req, res) => {};
const createJob = async (req, res) => {
  console.log(req.user);
  // res.send(req.user);
};
const updateJob = async (req, res) => {};
const deleteJob = async (req, res) => {};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
