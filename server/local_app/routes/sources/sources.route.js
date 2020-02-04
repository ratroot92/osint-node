


const app=require('express');
const router=app.Router();
const FacebookTargetModel=require('./../../models/facebook_target.model');
const db=require('./../../../db/db');

router.get('/add/facebook',(req,res,next)=>{
//     console.log("source route called ");
//     let user=req.session.user;
//     let listUsers;
//     if(user){
//         req.session.message = {
//             type: "",
//             intro: "",
//             message: ""
//           };
          
//           res.render('sources/facebook');
//     }
//     else{
// res.redirect('/');
//     }
var data=[];

FacebookTargetModel.find({},(function(err, result) {
    if (err) {
        console.log("error : "+error);
        res.render('sources/facebook');
    }
    else{
        for(var i=0;i<result.length;i++){
           // console.log(rows[i].profileName);
            //x = rows;
           // data.push({_id: result[i]._id,_author_type: result[i].author_type,author_name: result[i]._author_name,});
           data.push(result[i]);
            }
            console.log(data)
     
        console.log("success : all facebook persons targets found ");
        res.render('sources/facebook',{list:data});
    }



}));

});

router.post('/add/facebook/populatefacebookPersonTargets',(req,res,next)=>{

console.log("populatefacebookPersonTargets called");
    
    var searchStr = req.body.search.value;
    if(req.body.search.value)
    {
            var regex = new RegExp(req.body.search.value, "i");
            searchStr = { $or: [{'author_type': regex},{'author_id': regex },{'author_name': regex },
            {'author_account': regex },{'author_url': regex },{'expired_on': regex },
            {'need_screenshots': regex },{'': regex },{'': regex }] };
    }
    else
    {
         searchStr={};
    }

    var recordsTotal = 0;
    var recordsFiltered=0;
    
    FacebookTargetModel.countDocuments({}, function(err, c) {
        recordsTotal=c;
        console.log(c);
        FacebookTargetModel.countDocuments(searchStr, function(err, c) {
            recordsFiltered=c;
            console.log(c);
            console.log(req.body.start);
            console.log(req.body.length);
                FacebookTargetModel.find(searchStr, ' author_type author_name author_id author_name author_account author_url expired_on  need_screenshots created_at updated_at',{'skip': Number( req.body.start), 'limit': Number(req.body.length) }, function (err, results) {
                    if (err) {
                        console.log('error while getting results'+err);
                        return;
                    }
            
                    var data = JSON.stringify({
                        "draw": req.body.draw,
                        "recordsFiltered": recordsFiltered,
                        "recordsTotal": recordsTotal,
                        "data": results
                    });
                    res.send(data);
                });
        
          });
});
});



router.get('/add/instagram',(req,res,next)=>{
    //     console.log("source route called ");
    //     let user=req.session.user;
    //     let listUsers;
    //     if(user){
    //         req.session.message = {
    //             type: "",
    //             intro: "",
    //             message: ""
    //           };
              
    //           res.render('sources/facebook');
    //     }
    //     else{
    // res.redirect('/');
    //     }
    res.render('sources/instagram');
    })


    
router.get('/add/linkedin',(req,res,next)=>{
    //     console.log("source route called ");
    //     let user=req.session.user;
    //     let listUsers;
    //     if(user){
    //         req.session.message = {
    //             type: "",
    //             intro: "",
    //             message: ""
    //           };
              
    //           res.render('sources/facebook');
    //     }
    //     else{
    // res.redirect('/');
    //     }
    res.render('sources/linkedin');
    })

    
    router.get('/add/twitter',(req,res,next)=>{
        //     console.log("source route called ");
        //     let user=req.session.user;
        //     let listUsers;
        //     if(user){
        //         req.session.message = {
        //             type: "",
        //             intro: "",
        //             message: ""
        //           };
                  
        //           res.render('sources/facebook');
        //     }
        //     else{
        // res.redirect('/');
        //     }
        res.render('sources/twitter');
        })
    



        router.post('/add/facebook_person/target/',(req,res,next)=>{
            console.log(req.body);
            let New_FacebookTargetModel= new FacebookTargetModel({
                _id:new db.Types.ObjectId,
                author_type:req.body.author_type,
                author_id:req.body.author_id,
                author_name:req.body.author_name,
                author_account:req.body.author_account,
                author_url:req.body.author_url,
                interval:req.body.interval,
                expired_on:req.body.expired_on,
                need_screenshots:req.body.need_screenshots,
              
            }).save((err,results)=>{
                if(!err){
                FacebookTargetModel.find({},(err,list)=>{
                    if(!err && list){
                        console.log("All facebook person target fetched successfully");
                        console.log("Facebook person target inserted successfully ");
                        console.log(results);
                        res.render('sources/facebook',{target:results,message:{type:'success',intro:'Osint Notifier ',message:'facebook person target successfully added  '},all_facebook_person_targets:list})
                    }
                    else{
                        console.log("Error ! while attemping to fetch all facebook_person_targets ");
                        console.log("Facebook person target inserted successfully ");
                        console.log(results);
                        res.render('sources/facebook',{target:results,message:{type:'warning',intro:'Osint Notifier ',message:'facebook person target successfully added || all facebook person targets list failed  '}})
                    }

                })
       
                }  
                else{
                    console.log("Error ! while attemping to insert facebook target ");
                    console.log(err);
                    console.log("Error ! while attemping to fetch all facebook_person_targets ");
                    console.log(results);
                    res.render('sources/facebook',{target:results,message:{type:'danger',intro:'Osint Notifier ',message:'facebook person target failed   '}})
                } 
            });
        });


module.exports=router;