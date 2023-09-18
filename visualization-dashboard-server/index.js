// server/index.js

const express = require('express');
const mongoose = require('mongoose');
const Data = require('./model')
// const bodyParser = require('body-parser');
const cors = require("cors");
const { required } = require('joi');
const app = express();
require("dotenv").config();

// app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome our to  API...");
});



app.get('/getalldata', async (req, res) => {
  try {
    const data = await Data.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/savedata', async (req, res) => {


  const data = new Data({
    end_year: req.body.end_year,
    intensity:req.body.intensity,
    sector:req.body.sector,
    topic: req.body.topic,
    insight: req.body.insight,
    url: req.body.url,
    region: req.body.region,
    start_year: req.body.start_year,
    impact: req.body.impact,
    added: req.body.added,
    published: req.body.published,
    country: req.body.country,
    relevance: req.body.relevance,
    pestle: req.body.pestle,
    source: req.body.source,
    title: req.body.title,
    likelihood: req.body.likelihood   
    });
  
    try {
      const newData = await data.save();
      res.status(201).json(newData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});
  

// Connect to MongoDB (replace <username>, <password>, <mongodb-url>, and <database> with your actual credentials)
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
