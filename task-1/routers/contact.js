const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();

router.get('/admin/contact',(req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contact.html"))
});

router.post('/admin/contact',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/success');
})
// /admin/add-product => POST

router.get('/success',(req,res,next)=>{
    res.send(`<h1>Form successfuly filled</h1>
    <li><a href="/" ><button>HOME</button></a></li>`);
})
module.exports=router;