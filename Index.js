require("dotenv").config();
const newLocal = require("express");
const express = newLocal;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
const errormiddleware = require("./Middlewares/errormiddleware");
app.use(express.urlencoded({ extended: true }));
const newLocal_1 = require("body-parser");
const bodyParser = newLocal_1;
app.use(express.json());
const PORT = process.env.PORT;
const Mongo_Url = process.env.MONGO_URL;
const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

//mongoDB connection
mongoose
  .connect(Mongo_Url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//route
app.use("/", authRoute);
app.use("/", GoalRouter);

app.use(errormiddleware);
app.listen(PORT, () => {
  console.log("Server running on port 8000")
});
    
