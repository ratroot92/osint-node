
require('./db/db')


const express =require('express');
const bodyParser=require('body-parser');
const path=require('path');
const exhbs  = require('express-handlebars');



//require routres 
var loginRouter=require('./local_app/routes/login/login.route');
var userRouter=require('./local_app/routes/user/user.route')


//end require routers 

const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




app.engine( 'hbs', exhbs( {
  extname: 'hbs',
  defaultLayout: 'main',
 
}));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));
app.use('/mdbootstrap', express.static(__dirname + '/node_modules/mdbootstrap'));
app.set('view engine', 'hbs');



//register routes here 
app.use('/',loginRouter);
app.use('/user',userRouter);
//end reghister routes here 

const PORT =process.env.PORT || 3001;
app.listen(PORT,(err)=>{
    if(!err){
        console.log("server has beens started at port = "+PORT);
    }
    else{
        console.log("error at server "+err);
    }
});
