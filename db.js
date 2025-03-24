const mysql = require('mysql2');

// MySQL connection details
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Change this if you're using a different user
    password: 'NewPassword@123',  // Enter your MySQL password here
    database: 'mysite'    // Name of your MySQL database
});

db.connect((err) => {
    if (err) {
        console.error('❌ MySQL Connection Failed:', err.stack);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

module.exports = db;
