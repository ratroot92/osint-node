


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
res.render('sources/facebook');
})



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
            console.log(req.body)
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
                        res.render('sources/facebook',{target:results,message:{type:'success',intro:'facebook person target ',message:'facebook person target successfully added  '},all_facebook_person_targets:list})
                    }
                    else{
                        console.log("Error ! while attemping to fetch all facebook_person_targets ");
                        console.log("Facebook person target inserted successfully ");
                        console.log(results);
                        res.render('sources/facebook',{target:results,message:{type:'failure',intro:'facebook person target ',message:'facebook person target successfully added || all facebook person targets list failed  '}})
                    }

                })
       
                }  
                else{
                    console.log("Error ! while attemping to insert facebook target ");
                    console.log(err);
                    console.log("Error ! while attemping to fetch all facebook_person_targets ");
                    console.log(results);
                    res.render('sources/facebook',{target:results,message:{type:'failure',intro:'facebook person target ',message:'facebook person target failed   '}})
                } 
            })
        });


module.exports=router;