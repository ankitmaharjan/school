
(()=>{
    const helper = require("../../common/index")
    module.exports = async(req, res, next) => {
        //let id = req.params.id;
        let uuid = req.params.uuid;
      // let sqlquery = "SELECT * FROM teachers WHERE id=" + id;
      let sqlquery = `select * from teachers WHERE uuid='${uuid}'`;
       let result = await helper.mysqlHelper.query(sqlquery); 
       res.send({
        message: "The selected teacher is:",
        data: result
       })
           
       
    }
})()