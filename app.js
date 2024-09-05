const express = require("express");
const app = express();
const mongoose = require("mongoose");
const data =require("./Model/user")
const cors = require("cors")
const port = 3500;
const dotenv = require("dotenv")
const userRoutes=require("./routes/router")
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
dotenv.config();
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("usercredential db connected");
  })
  .catch(() => {
    console.log("Please check your db connecction");
  });

//routes
app.use('/', userRoutes)


app.listen(port, () => {
    console.log(`Server is running at port ${ port }`);
});
