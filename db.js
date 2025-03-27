
const mysql = require('mysql2'); // Use mysql2 instead of mysql

const connection = mysql.createConnection({
    host: 'nozomi.proxy.rlwy.net',  // Example: 'nozomi.proxy.rlwy.net'
    user: 'root',  // Example: 'root'
    password: 'lBwLLkfLOQMMokxhdDSIPQTfMzcviGIY',  // Your actual password
    database: 'railway',  // Example: 'railway'
    port: 19266 || 3306,  // Railway might use a custom port
     ssl: {
        rejectUnauthorized: false // ✅ Ignore self-signed certificate errors
    }
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed:", err);
    } else {
        console.log("✅ Connected to MySQL Database");
    }
});

module.exports = connection;
