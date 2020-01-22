


const app=require('express');
const router=app.Router();






router.post('/user/signup',(req,res)=>{
    console.log("request recived ")
    console.log(req.body);
    });



module.exports=router;