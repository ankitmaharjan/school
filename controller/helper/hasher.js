'user strict';

((hashOperator)=>{
    const bcrypt = require('bcrypt');

    hashOperator.computeHash  = (sourcePassword, salt)=>{
        return bcrypt.hash(sourcePassword,salt);
    };

    hashOperator.createSalt = ()=>{
        return bcrypt.genSalt(8);
    };
    hashOperator.comparePassword = async(inputPwd,hash)=>{
        return bcrypt.compare(inputPwd,hash);
    }   
})(module.exports)
