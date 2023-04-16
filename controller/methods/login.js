


const helper = require("../../common/index")

  //POST LOGIN
const loginController = async (req, res) => {
  try {
    const email  = req.body.email;
    const password = req.body.password;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check admin
   
    let sqlquery = "SELECT * FROM teachers WHERE email=" + email;
    if (!sqlquery) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    
    const match = await helper.mysqlHelper.comparePassword(password, sqlquery.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    
    res.status(200).send({
      success: true,
      message: "login successfully",
     
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

module.exports = loginController;
