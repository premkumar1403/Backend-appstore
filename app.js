const express = require("express");
const app = express();
const mongoose = require("mongoose");
const data =require("./Model/user")
const port = 3500;
const cors = require("cors")
const dotenv=require("dotenv")
app.use(cors());
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
app.get('/', async(req, res) => {
  try {
    if (req.query) {
      const queryobject = { ...req.query }
      var query = await data.find(queryobject);
      
    }
    else {
      var query = await data.find();
    }
    res.json(query)
  }
  catch (error) {
    res.status(500).json({
      message: err.message
    });
}
}
)


app.listen(port, () => {
    console.log(`Server is running at port ${ port }`);
});
