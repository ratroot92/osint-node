
const db=require('./../..//db/db.js');
const userModal=require('./../..//local_app/models/user.model');
const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');

const SECRETKEY ='asd';


const verfiyTheToken=(req,res,next)=>{
    //getting token from headers 
    const bearer=req.headers["authorization"];
    if(bearer){
        console.log("bearer in headers exsist");
    }
    else{
        const bearerToken=bearer.spilt(" ");
        const token=bearerToken;
        jwt.verify(token,SECRETKEY,(err,data)=>{
            if(err){
                res.sendStatus(403);
    
            }
            else{
                req.verifiedUserData=data;
                next();
            }
        });
    }
   
}


router.get('/users',verfiyTheToken,(req,res,next)=>{
userModal.find({},(err,result)=>{
    console.log(result);
})
});





router.post('/',(req,res,next)=>{
    console.log("****************************************************")
    console.log("route called : ' api/login ' &&  request body is  : ")
    console.log("----------------------------------------------------")
    console.log(req.body);
    console.log("----------------------------------------------------")
    console.log("****************************************************")
    userModal.findOne({email:req.body.email,password:req.body.password},(err,result)=>{
      if(err){
        res.json({error:err,status:500,message:'failure',info:'internal server error / query error'})
       
      }
      else if(result){
          jwt.sign({result},SECRETKEY,(err,token)=>{
              if(err){
                  res.sendStatus(403);
              }
              else{
                res.json({token,status:200,message:'success',info:'user validated'})
              }
          })
      
      }
       else{
        res.json({status:401,message:'failure',info:'user unathorized'})
       }
    })


});



module.exports=router;