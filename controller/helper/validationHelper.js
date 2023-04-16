
((validationHelper)=>{
    let pattern = /@gmail.com/;
    validationHelper.uservalidation = async(username,email,password,phone) =>{
        if (username == "" || password == "" || email == "" || phone == "") {
           console.log("Data can't be empty");;
        }
       
        else if (password.length <= 8) {
            console.log("Password length must be correct");
        }
        else if (pattern.test(email) == false) {
            console.log("Put valid email");
        }
        else if(phone.length <= 9 ){
            console.log("Phone number should be correct");
        }
        else{
            return true;
        }
    };
})(module.exports);