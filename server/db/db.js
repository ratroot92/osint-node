const db=require('mongoose');
db.connect('mongodb://localhost:27017/Merndb',{ useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("MongoDb Service Has Been Started At Port : 27017");
    }
    else{
        console.log("MongoDb Error :  "+err);
    }
})



module.exports=db;