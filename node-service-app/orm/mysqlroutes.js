const route=require("express").Router();
const {Sequelize,QueryTypes} = require('sequelize');
var sequelize=require('./connection');

route.post("/employeeDetails/:username",(request,response)=>{
    let username = request.params.username;
    sequelize.query('select employee_id,e.name,GROUP_CONCAT(s.name) as skills,manager,wfm_manager,experience from employee as e, skills as s where manager = ? group by employee_id;',{replacements:[username],type: QueryTypes.SELECT}).then(data=>{
        response.status(200).json(data)
    }).catch(err=>{
        response.status(500).send(err);
    })
})

route.post('/softlock/:username',(req,res)=>{
    let username = req.params.username;
    sequelize.query('select a.employee_id,a.manager as Requestee,a.reqdate,a.requestmessage,b.manager as EmployeeManager,lockid,a.status from softlock a,employees b where a.employee_id=b.employee_id and b.wfm_manager = ? order by a.reqdate asc;',{replacements:[username],type: QueryTypes.SELECT}).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        res.status(500).send(err);
    })
})

route.post('/softlocked',(req,res)=>{
    let employee_id = req.body.employee_id;
    let manager = req.body.manager;
    let current_date = new Date().toISOString().slice(0, 10);
    let message = req.body.message;
    sequelize.query(`INSERT INTO softlock(employee_id,manager,reqdate,requestmessage) VALUES(?,?,?,?)`,{replacements:[employee_id,manager,current_date,message],type: QueryTypes.INSERT}).then(data=>{
        res.status(200).send('Added successfull');
    }).catch(err=>{
        res.status(500).send(err);
    })
})

route.put('/updateSoftlock/:lockid',(req,res)=>{
    let approve_date = new Date().toISOString().slice(0, 10);
    let status = req.body.status;
    let lockid = req.params.lockid;
    sequelize.query('update softlock set status=?,lastupdated=? where lockid=?',{replacements:[status,approve_date,lockid],type: QueryTypes.UPDATE}).then(data=>{
        res.status(200).send(status);
    }).catch(err=>{
        res.status(500).send(err)
    })
})

module.exports=route;