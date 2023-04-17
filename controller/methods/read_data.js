(()=>{
    const select_teacher = require('../sql/select_teacher')
    module.exports = async(req, res, next) => {
            const output2=await select_teacher();
            res.send({
                status:200,
                message: "The soft deleted teachers are:",
                data: output2
            })    
       
    }
})()