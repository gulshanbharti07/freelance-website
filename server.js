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

// Serve Static Files (Frontend)
 app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when visiting "/"
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// Handle Payment Form Submission


    const sql = 'INSERT INTO payments (name, email, card_number, expiry_date, cvv, amount) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [name, email, card_number, expiry_date, cvv, amount], (err, result) => {
        if (err) {
            console.error('❌ Database Insertion Error:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }
        res.status(200).json({ message: 'Payment received successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running at https://freelance-website-a43b.onrender.com`);
});
app.post("/submit-contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  connection.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error saving message:", err);
      res.status(500).json({ error: "Database insert failed" });
    } else {
      res.json({ message: "Message saved successfully!" });
    }
  });
});

    // Insert the message into MySQL (or do other processing)
    const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('❌ Database Insertion Error:', err);
            return res.status(500).json({ error: 'Database error', details: err.message });
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    });
});
