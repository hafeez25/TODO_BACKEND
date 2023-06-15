const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorMiddleware");
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");

const app = express();
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://la-inventory-frontend.vercel.app",
    ],
    credentials: true,
  })
);

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
  .connect(process.env.MONGO_URI, { dbName: "todoDB" })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
