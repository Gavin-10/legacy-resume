const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const uri = "mongodb+srv://userOne:bX6y0N44Log9rpT8@cluster0.cywt3lw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  ServerApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbAccess(callback, newColl, docs, updateDocs) {
  try {
    await client.connect();
    console.log("connected to client");

    const db = client.db("resume-site");
    const coll = db.collection(newColl);

    const result = await callback(docs, coll, updateDocs);
    return result;
  } finally {
    await client.close();
  }
}

async function insertOneDoc(docs, coll) {
  const result = await coll.insertOne(docs);
  return result;
}

async function deleteDocs(docs, coll) {
  console.log(docs);
  const result = await coll.deleteMany({_id: new ObjectId(`${docs}`)});
  console.log(result.deletedCount, "documents removed");
  return String(result);
}

async function findOne(docs, coll) {
  const cursor = coll.find({_id: new ObjectId(`${docs}`)});
  const cursorValues = await cursor.toArray();
  console.log("Retrived Documents: ", cursorValues);
  await cursor.close();
  return cursorValues;
}

async function findAll(_, coll) {
  const cursor = coll.find({});
  const cursorValues = await cursor.toArray();
  console.log("Retrieved Documents: ", cursorValues);
  await cursor.close();
  return cursorValues;
}

async function updateDocs(docs, coll, updateDocs) {
  const result = await coll.updateMany({_id: new ObjectId(`${docs}`)}, {$set: updateDocs});
  console.dir(result);
  return result;
}

module.exports = { dbAccess, insertOneDoc, deleteDocs, findOne, findAll, updateDocs}