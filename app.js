const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// ALLOW CORS
app.use(cors());

// JSON
app.use(express.json({ limit: '1mb' }));

// TIMEZONE
process.env.TZ = "Asia/Dhaka";

app.get('/', async (req, res) => {
    return res.status(200).json({message: 'API Working!'});
});


// DATABASE CONNECTION
let databaseURI = process.env.DB_URI;
mongoose.connect(databaseURI);
mongoose.connection.once('open', () => console.log('MongoDB Connected'))
.on('error', (error) => {
    console.log('Error', error);
});

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on: ${port}`));
console.log("Time Zone:", Intl.DateTimeFormat().resolvedOptions().timeZone);