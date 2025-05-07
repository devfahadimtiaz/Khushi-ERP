const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const authRoutes = require('./routes/authRoutes');// Import SignIn routes
const garageRoutes = require('./routes/garage'); // Import garage routes
const inventoryRoutes = require('./routes/inventoryRoutes'); // Import inventory routes

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'khushierp'
});

// Test DB connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit if DB connection fails
  }
  console.log('Connected to the database');
});

// Use auth routes
app.use('/', authRoutes(db));
app.use('/', garageRoutes(db));
app.use('/', inventoryRoutes(db)); // Use inventory routes
app.use('/uploads', express.static('uploads'));
// Use inventory routes

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
