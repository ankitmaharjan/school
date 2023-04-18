"use strict";
const helper = require("../../controller/helper/index")
  //POST LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
      //check teacher
      let sqlQuery = `select password from teachers WHERE email='${email}'`;
      let teacherData = await helper.mysqlHelper.query(sqlQuery);
      
      if (!teacherData) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }

      const match = await helper.hasher.comparePassword(password,teacherData);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }  else{
    res.status(200).send({
      success: true,
      message: "login successfully",
        });
    }
  } catch (error) {
    res.status(401).send({ 
      //401 means unauthorized
        success: false,
      message: "Error in login",
      error,
    });
  }
};
module.exports = loginController;



