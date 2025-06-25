const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    console.log("MongoDb connected");
    return mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connect;