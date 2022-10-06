require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();

app.use(express.json());
app.use('/api/blogs/', blogRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening to the port`);
        })
    }).catch(error => {
        console.log(error);
    });