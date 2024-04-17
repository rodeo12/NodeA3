const express= require("express") ;

const app=express();
require("dotenv").config();
const { connectDB } = require('./db'); // Assuming your db.js file is in the same directory
const cors = require('cors'); // Optional: Enable CORS for frontend requests (if applicable)
const userRoutes = require('./routes/userRoutes'); // Import routes from user.js



// Apply middleware
app.use(express.json()); // Parse incoming JSON data in request bodies
app.use(cors()); // Enable CORS if needed

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });


// Mount routes
app.use('/api/users', userRoutes); // Mount user routes under /api/users prefix

// Define port to listen on
const PORT = process.env.PORT || 8000; // Use environment variable for port or default to 3000

// Start the server

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
