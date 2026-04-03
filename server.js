const express = require("express");
const cors = require("cors");
const path = require("path");
const Feedback = require("./model");

require("./connection");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(path.join(__dirname, "public")));

app.post("/feedback", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) 
        return res.status(400).send("All fields are required");

    if (message.length > 360)
        return res.status(400).send("Message too long");

    try {
        const feedback = new Feedback({ name, email, message });
        await feedback.save();
        res.send("✅ Feedback submitted successfully!");
    } catch (err) {
        console.log(err);
        res.status(500).send("❌ Server error");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
