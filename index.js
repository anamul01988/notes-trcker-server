// user: anamul
// Pass: GSctW5esOQXj1KhH
const express = require("express");
const app = express();
const port = 4000;
// const cors = require("cors");

// app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://anamul:GSctW5esOQXj1KhH@cluster0.p7i47.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const notesCollection = client.db("notesTaker").collection("notes");

    //get api to read all notes
    app.get("/notes", async (req, res) => {
      const q = req.query;
      console.log(q);
      const cursor = notesCollection.find({});
      const result = await cursor.toArray();
      res.send(result);
    });

    //create notesTaker
    app.post("/note", async (req, res) => {
      const data = req.body;
      console.log(data);
    //   const result = await notesCollection.insertOne(data);
      res.send('hellow');
    });

    //update notesTaker

    //deteteNote

    console.log("connect to db1");
  } finally {
  }
}
run().catch(console.dir);
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
// //   client.close();
// console.log('connect to db')
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
