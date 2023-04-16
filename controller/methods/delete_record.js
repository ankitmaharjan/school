
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
        let id = req.params.id;
        let sqlQuery = "DELETE FROM teachers WHERE id="+id+"";
       let result = await helper.mysqlHelper.query(sqlQuery); 
       res.send({
        message : `Successfull Delete data id:${id}`  
       })
           
       
    }
})()