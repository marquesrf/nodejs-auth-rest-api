const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

const app = express();

// Environment variables
dotenv.config();

// Database connection
mongoose.connect(
  process.env.DB_CONN,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to the database.")
);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(3000, () => console.log("The server is running on port 3000."));
