
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
        let id = req.params.id;
       let sqlquery = "SELECT * FROM teachers WHERE id=" + id;
       let result = await helper.mysqlHelper.query(sqlquery); 
       res.send({
        message: "The selected teacher is:",
        data: result
       })
           
       
    }
})()