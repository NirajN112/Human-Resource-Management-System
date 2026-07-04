// connectdb.js
const mysql = require('mysql2/promise'); // Notice the /promise import
require('dotenv').config();

let pool;

const connectdb = async () => {
    try {
        pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT || 3306,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // Test the connection
        await pool.getConnection();
        console.log('✅ MySQL Database connected successfully.');
        
        // Return the pool so it can be used elsewhere
        return pool; 
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1); // Stop the app if it can't connect
    }
};

// Export the function, and an option to get the active pool later
module.exports = { 
    connectdb, 
    getPool: () => pool 
};