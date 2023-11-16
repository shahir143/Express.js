const express= require('express');

const adminlogin= require('./routers/login');
const msg=require('./routers/msg');

const app = express();

app.use(adminlogin);
app.use(msg);

app.use((req,res)=>{
    res.status(404).send("Page not found")
})

app.listen(4000);
