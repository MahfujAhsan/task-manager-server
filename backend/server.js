const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute')


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(taskRoutes);

// const logger = (req, res, next) => {
//     console.log("Middleware Running");
//     next();
// }


// Routes
app.get("/", (req, res) => {
    res.send("Home Page")
});





const PORT = process.env.PORT || 5000;

const startServer = async (req, res) => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error)
    }
};

startServer();
