
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
       
       let sqlquery = "UPDATE teachers SET username='"+req.body.username+"', email='"+req.body.email+"', password='"+req.body.password+"',phone='"+req.body.phone+"' WHERE id="+req.params.id;
       let result = await helper.mysqlHelper.query(sqlquery); 
       res.send({
        message: "The updated teacher is:",
        data: result
       })
           
       
    }
})()