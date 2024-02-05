const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.get('/prtyps', async (req, res) => {
  try {
    await client.connect();
    
    const db = client.db('nomore');
    const prtypsCollection = db.collection('prtyps');
    
    const prtyps = await prtypsCollection.find({}).toArray();

    res.json(prtyps);
  } catch (error) {
    console.error('Error fetching prtyps:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

