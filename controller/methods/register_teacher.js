
(()=>{
    const create_user = require('../../controller/sql/create_teacher')
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
        const created_at = new Date().getTime();
        // const updated_at = new Date().toDateString();
        const username = req.body.username;
        const email = req.body.email;
        const phone = req.body.phone;
        const password = req.body.password;
        let output = await helper.validateHelper.uservalidation(username,email,password,phone,created_at);
        if(output == true){
            const output2=await create_user(username,email,password,phone,created_at);
            if(output2==true){
                res.send('SignUp Succesful')
            }else{
                res.send('SignUp UnSuccesful')
            }
            }
            else{
                res.send('Signup Unsucessful');
            }
           
       
    }
})()