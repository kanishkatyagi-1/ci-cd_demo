import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.listen(5000,()=>{
    console.log("Server is runnning on port 5000.New changes made to the file ")
})

