


const app=require('express');
const router=app.Router();


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
        })


module.exports=router;