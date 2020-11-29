require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts")

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/posts", postsRoute);

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected to DB!")
    }
);


app.listen(3000);