//Soft Delete Operation
(()=>{
    const soft_delete = require("../../controller/sql/soft_delete")
    module.exports = async(req, res, next) => {
        //let id = req.params.id;
       // let uuid = req.params.uuid;
       //let sqlQuery = "DELETE FROM teachers WHERE id="+id+"";
        //let sqlQuery = `Update teachers set is_delete=1 WHERE uuid='${uuid}'`; //flag ko concept 1 or 0
         //    let result = await helper.mysqlHelper.query(sqlQuery); 
         const output2= await soft_delete(req.params);
       res.send({
        status:200,
        message : "Successfully Deleted data"  
       })
           
       
    }
})()