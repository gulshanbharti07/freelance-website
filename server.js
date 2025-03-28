const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const db = require('./db'); // Import MySQL connection

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Serve index.html when visiting "/"
app.get("/get-messages", (req, res) => {
    const sql = "SELECT * FROM contact_messages ORDER BY id DESC";
    db.query(sql, (err, results) => {  // 🔥 Fixed: Changed `connection.query` to `db.query`
        if (err) {
            console.error("Error fetching messages:", err);
            res.status(500).json({ error: "Failed to fetch messages" });
        } else {
            res.json(results);
        }
    });
});

// Handle contact form submission
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Validate incoming data
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    // Insert the message into MySQL
    const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('❌ Database Insertion Error:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at https://freelance-website-a43b.onrender.com`);
});
