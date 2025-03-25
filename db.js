// const mysql = require('mysql2');

// // MySQL connection details
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',         // Change this if you're using a different user
//     password: 'NewPassword@123',  // Enter your MySQL password here
//     database: 'mysite'    // Name of your MySQL database
// });

// db.connect((err) => {
//     if (err) {
//         console.error('❌ MySQL Connection Failed:', err.stack);
//     } else {
//         console.log('✅ Connected to MySQL Database');
//     }
// });

// module.exports = db;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql.railway.internal',
    user: 'root',
    password: 'lBwLLkfLOQMMokxhdDSIPQTfMzcviGIY',
    database: 'railway',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed:", err);
        return;
    }
    console.log("✅ MySQL Connected Successfully!");
});

module.exports = connection;
