// model.js
const mongoose = require("./connection"); // import the Mongoose module

// Define the feedback schema
const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true, maxlength: 360 }
}, { timestamps: true });

// Create and export the model
const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;