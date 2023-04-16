
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
       
       let sqlquery = "select * from teachers";
       let result = await helper.mysqlHelper.query(sqlquery); 
       res.send({
        message: "The teacher list are:",
        data: result
       })
           
       
    }
})()