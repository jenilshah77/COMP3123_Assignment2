const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel'); // Ensure the path to userModel is correct
const app = express();

// Middleware
app.use(express.json()); // To parse JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        // Check if the password is correct using bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }

        res.status(200).send({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server error' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
