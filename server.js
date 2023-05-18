const express = require("express");

const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const { request } = require("express");
const cors = require("cors");

//--------------------!!!
const app = express();
require("dotenv").config();
//-----------------!!!!
//Middle Ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

//Routes

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Home page");
});

//-----------------!!!!
//connect DB

// connectDB();

// xxxxxxxxxxxxxxx---->
const PORT = process.env.PORT || 5000;

// Run the server command : npm run backend

//function to reflect the mango db and server

// This is the  2 .Secound Method of connecting Mongo_DB O_^
// console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
