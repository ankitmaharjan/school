(() => {
    const express = require("express");
    const router = express.Router();
    const create_teacher = require("../controller/methods/register_teacher")
    const read_data = require("../controller/methods/read_record");
    const delete_data = require("../controller/methods/delete_record");
    const search_data = require("../controller/methods/read_singleRecord");
    const update_record = require("../controller/methods/update_record");
    const login_teacher = require("../controller/methods/login");
    
    router.post('/sign-up',create_teacher);
    router.get('/get-all-record',read_data);
    router.get('/read-single/:id',search_data);
    router.delete('/delete-record/:id',delete_data);
    router.put('/update-record/:id',update_record);
    router.post('/login',login_teacher.loginUser)


    module.exports = router;
})()