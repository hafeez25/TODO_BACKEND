const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const errorHandler = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("Home page");
});

// Error Middleware
app.use(errorHandler);

//connect DB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
