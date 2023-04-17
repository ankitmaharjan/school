
(()=>{
    const create_user = require('../../controller/sql/create_teacher')
    const helper = require("../../controller/helper/index")
    module.exports = async(req, res, next) => {
        
        //const created_at = new Date().getTime();
        // const updated_at = new Date().toDateString();
        const requestObject = {
            username: req.body.username,
             email: req.body.email,
             phone: req.body.phone,
             password: req.body.password,
          };
        // const username = req.body.username;
        // const email = req.body.email;
        // const phone = req.body.phone;
        // const password = req.body.password;
        //let output = await helper.validateHelper.uservalidation(username,email,password,phone);
        let output = await helper.validateHelper.uservalidation(requestObject);
        if(output == true){
            const output2=await create_user(requestObject);
            //const output2=await create_user(req.body);
            if(output2==true){
                res.send('SignUp Succesful')
            }else{
                res.send('SignUp UnSuccesful')
            }
            }
            else{
                res.send('Please provide appropriate data');
            }
           
       
    }
})()