const mysqlHelper = require("../../common/mysqlHelper");
(()=>{
    module.exports=async(username,email,password,phone)=>{
       let myDate = new Date().getTime(); //epoch value
       let query = "INSERT INTO teachers (username,email,password,phone,created_at) VALUES ('"+username+"','"+email+"','"+password+"','"+phone+"','"+myDate+"')";
       //let query = "INSERT INTO teachers (createdAt,updatedAt) VALUES ('"+myDate.toGMTString()+"','"+myDate.toGMTString()+"')";
       const output=await mysqlHelper.query(query);
        console.log(output[0].affectedRows>0)
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()