const model=require('../orm/model')
const route=require("express").Router();



route.get("/departments",function(request,response){
    try {
        model.department.findAll(
          ).then(function(data){
              response.json(data).status(200);
          }).catch(function(err){
              response.render([]).status(500);
          })
    } catch (error) {
        console.log(error)
        response.status(500)
    }
})

module.exports=route;