//Node js Test 
const path=require('path')
console.log('my first app express with node js')
//import express 
const express=require('express')
// app is an express () instance : associate express methods to a variable
const app=express();

//todat is a an Date() instance 
const today=new Date(Date.now())
// my global middleware 
const day= today.getDay();
const hours=today.getHours();
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
app.get('/error.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','error.html')) 
})
app.use((req,res,next)=>{
    console.log("A new request received at "+ days[day] +" "+ hours +" H" );
(day === 0 || day === 6) || (hours <9 || hours >= 17)  ? 
res.redirect('/error.html')  
:next();   


app.use(express.static('public'));
//rendering css style 
app.use('/styleSheets',express.static('styleSheets'));
// create the port variable
const port=5000
//listen to the port
app.listen(port,(err)=>{
     err? console.log(err) : console.log('server is running on port 5000')
})