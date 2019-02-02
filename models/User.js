const mongoose = require("mongoose");
//This reference will be the same as the one that was returned when we connected to the database, which means the schema and model definitions will not need to explicitly connect to the database.
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
module.exports = User = mongoose.model("users", UserSchema);

//A Mongoose schema defines the structure of the document, default values, validators, etc.,
//whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
