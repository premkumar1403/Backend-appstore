const data =require("../Model/user")
exports.searchdata = async (req, res) => {
  try {
    if (req.query) {
      const queryobject = { ...req.query };
     var  query = await data.find(queryobject);
    } else {
      var query = await data.find();
    }
    res.json(query);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

