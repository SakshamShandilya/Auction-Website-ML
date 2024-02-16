require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(
    `mongodb+srv://admin:admin@cluster0.qs1hl6j.mongodb.net/codeutsav?retryWrites=true&w=majority`
);
// mongoose.connect(`mongodb://localhost:27017/codeutsav?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDb connected successfully");
});

db.on("error", () => {
    console.log("MongoDb Connection Failed");
});

//
