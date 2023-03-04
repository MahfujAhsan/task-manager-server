const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');
const userRoutes = require('./routes/userRoute');


const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes)

// const logger = (req, res, next) => {
//     console.log("Middleware Running");
//     next();
// }

// app.get('/jwt', async (req, res) => {
//     const email = req.query.email;
//     const query = { email: email };
//     const user = await usersCollection.findOne(query);
//     if (user) {
//         const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '24h' });
//         return res.send({ accessToken: token })
//     }
//     res.status(403).send({ accessToken: "" })
// })


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
