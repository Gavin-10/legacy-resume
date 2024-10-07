const express = require("express");
const router = express.Router();
const { dbAccess, findOne, insertOneDoc, deleteDocs } = require("../driver/mongoDriver")

router.route("/")
.get(async (req, res) => {
  const data = await dbAccess(findOne, "fake-data", req.query.search)
  data.forEach(element => {
    console.log(element._id);
  });

  res.send(data);
})
.put(async (req, res) => {
  res.send("Update Database");
})
.post(async (req, res) => {
  const submission = await req.body;

  const data = {
    name: submission.fakeName || "No Name",
    email: submission.fakeEmail || "No Email",
    comments: submission.fakeComments || "No Comments",
  }

  console.log("Data to be submitted:", data);

  const result = await dbAccess(insertOneDoc, "fake-data", data);
  console.log(result);
  res.send(result);

  console.log(result.insertedId)

  if(result.acknowledged) {
    setTimeout(async () => {
      const removed = await dbAccess(deleteDocs, "fake-data", result.insertedId);
      console.log(removed);
    }, 60000);
  }
})
.delete(async (req, res) => {
  const result = await dbAccess(deleteDocs, "fake-data", req.query.search);

  res.send(result);
});

module.exports = router;