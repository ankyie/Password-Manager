const express = require('express')
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

//connecting MongoDB
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect();
console.log('Connected successfully to server');

//Starting App and DB
const app = express()
const port = 3000;
const dbName = process.env.DB_NAME;

//Middlewares
app.use(bodyparser.json())
app.use(cors())

app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.send(findResult)
})

app.post("/", async (req, res) => {
  const password = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const insertResult = await collection.insertOne(password);
  res.send(insertResult)
})

app.delete("/", async (req, res) => {
  const passwordID = req.body
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const deleteResult = await collection.deleteOne(passwordID);
  res.send(deleteResult)
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})