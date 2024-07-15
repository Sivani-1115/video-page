const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://none9441314:eXFpPNxBwBjEjJr8@cluster0.kjjdlpu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
  ()=> console.log('DB connected')
)


app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
