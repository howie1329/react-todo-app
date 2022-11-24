require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

//Express App

const app = express();

//MiddleWare
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/", todoRoutes);

mongoose
  .connect(process.env.MONG)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to Database & Listening on port...",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
