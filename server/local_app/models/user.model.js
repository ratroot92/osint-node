var db = require('mongoose');
  var Schema = db.Schema;

  var UserSchema = new Schema({
    _id:  db.Types.ObjectId,
    name:{
       type:String,
       reequired:true,
    },
    
    

    email:{
        type:String,
        reequired:true,
     }, 


     password:{
        type:String,
        reequired:true,
     }, 


     status:{
        type:String,
        reequired:false,
     } ,
   
  });


  module.exports = db.model('User', UserSchema);