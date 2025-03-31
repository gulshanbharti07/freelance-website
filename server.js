const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const db = require('./db'); // Import MySQL connection

const app = express();
const PORT = process.env.PORT || 3000;   // ✅ Use dynamic port

// ✅ Proper CORS configuration
app.use(cors({
    origin: "https://sapphirewebtech.in",  // ✅ Replace with your actual frontend domain
    methods: ["GET", "POST"],
    credentials: true
}));

// ✅ Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ✅ Fetch messages from MySQL
app.get("/get-messages", (req, res) => {
    const sql = "SELECT * FROM contact_messages ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("❌ Error fetching messages:", err);
            res.status(500).json({ error: "Failed to fetch messages" });
        } else {
            res.json(results);
        }
    });
});

app.get("/", (req, res) => {
    res.send("✅ Backend is running!");
});

// ✅ Handle contact form submission
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('❌ Database Insertion Error:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.status(200).json({ message: 'Message sent successfully!' });
    });
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
