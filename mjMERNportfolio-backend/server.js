require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const axios = require('axios');

const sampleWorks = require('./routes/sampleworkRoutes')
const personalInfo = require('./routes/personalinfoRoutes'); 


//express app 
const app = express();

// middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.json())
app.use(cors({
  origin: "*",
  methods: ["GET","POST","DELETE","PATCH"]
}));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next();
})

// routes
app.use('/api/sampleWorks', sampleWorks)
app.use('/api/personalInfo', personalInfo)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
    // Exit the process if the database connection fails
    process.exit(1);
  }) 


 