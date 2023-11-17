const express= require('express');
const bodyParser=require('body-parser');
const path=require('path');

const adminRoute= require('./routers/admin')
const shopRoute= require('./routers/shop');
const contactRoute=require('./routers/contact');
const app= express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoute);
app.use(shopRoute);
app.use(contactRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(4000);