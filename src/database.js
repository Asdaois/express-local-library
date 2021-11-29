//Import the mongoose module
const mongoose = require("mongoose");

//Set up default mongoose connection
const mongoDB =
  "mongodb+srv://admin:ahotenus@node-crash-course.jwrc4.mongodb.net/local-library?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;
db.on("connecting", () => console.log("trying to connect to db"));
db.on("connected", () => console.log("connected to DB"));
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
