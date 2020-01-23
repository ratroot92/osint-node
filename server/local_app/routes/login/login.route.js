


const app=require('express');
const router=app.Router();


router.get('/',(req,res,next)=>{
    let pyramid_chart= {
        "instagram":10,
        "linkedin":25,
        "news":100,
        "facebook":84,
        "twitter":55,
        } 

res.render('index',{pyramid_chart});
});

router.get('/ajax_loaded_pyramid_chart',(req,res,next)=>{
    let pyramid_chart= {
        "instagram":10,
        "linkedin":25,
        "news":100,
        "facebook":84,
        "twitter":55,
        } 

res.json(pyramid_chart);
});



router.post('/login',(req,res)=>{
    console.log("request recived ")
    console.log(req.body);
    });



module.exports=router;