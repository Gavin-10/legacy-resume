const express = require("express");
const router = express.Router();
const { dbAccess, findAll, insertOneDoc, deleteDocs, updateDocs } = require("../driver/mongoDriver")

router.route("/")
.get(async (req, res) => {
  const data = await dbAccess(findAll, "messages")
  data.forEach(element => {
    console.log(element._id);
  });
  res.send(data);
})
.put(async (req, res) => {
  const updates = req.body;
  const result = await dbAccess(updateDocs, "messages", req.query.search, updates);
  res.send(result);
})
.post(async (req, res) => {
  const submission = req.body;
  const data = {
    firstName: submission.firstName || "No First Name",
    lastName: submission.lastName || "No Last Name",
    company: submission.company || "No Company",
    email: submission.email || "No Email",
    message: submission.message || "No Message???",
    read: false,
  }
  const result = await dbAccess(insertOneDoc, "messages", data);
  console.log(result, " ", data);
  res.send(result);
})
.delete(async (req, res) => {
  const result = await dbAccess(deleteDocs, "messages", req.query.search);
  res.send(result);
});

module.exports = router;