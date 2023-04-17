const helper = require("../../controller/helper/index")
const teacher = require('../../db/models');
//   //POST LOGIN
// const loginController = async (req, res) => {
//   try {
//     const email  = req.body.email;
//     const password = req.body.password;

//     //validation
//     if (!email || !password) {
//       return res.status(404).send({
//         success: false,
//         message: "Invalid email or password",
//       });
//     }
//     //check admin
//       let sqlquery = "SELECT * FROM teachers WHERE email=" + email;
//     if (!sqlquery) {
//       return res.status(404).send({
//         success: false,
//         message: "Email is not registerd",
//       });
//     }
//       const match = await helper.mysqlHelper.comparePassword(password, sqlquery.password);
//     if (!match) {
//       return res.status(200).send({
//         success: false,
//         message: "Invalid Password",
//       });
//     }  
//     res.status(200).send({
//       success: true,
//       message: "login successfully",
//         });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in login",
//       error,
//     });
//   }
// };
// module.exports = loginController;



// const helper = require('../../common/index')
// const db = require('../../db/models')
// let teachers = helper.my;
//login validation
const loginUser = async(req,res,next)=>{
        let username = req.body.username;
        let password = req.body.password;
        
        const output = await helper.cacheHelper.saveCache("isLogin",true,100000);
        console.log(output);
        let data = await teacher.findOne({where:{username:username,password:password}});
        if(output){   
            res.send({
                message:"Successfully Login, Welcome to Login Page"
            });
        }else{
            res.send(`Username and Password is not match, Please Try Again`);
        }
}

module.exports = {loginUser};