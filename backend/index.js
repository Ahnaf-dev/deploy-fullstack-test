const express = require("express");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next()
})

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// module.exports = async (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   if (req.method === 'OPTIONS') {
//     res.status(200).end();
//     return;
//   }

//   // Your API logic goes here
//   res.status(200).json({ message: 'Hello from Vercel!' });
// };