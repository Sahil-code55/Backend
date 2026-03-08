const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:99EW1v0KvMxxc0wG@backend-try-01.xt5ab5a.mongodb.net/halley");
    console.log('Connected to MongoDB');
}

module.exports = connectDB;