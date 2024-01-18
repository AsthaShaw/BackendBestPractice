const express=require('express')
const cors=require('cors')
const app=express()
const fruits=require('./fruits.json')
const logger=require("./logger")
app.use(logger)
//middlewares

app.use("/fruits",express.json())
app.use(cors())





app.post("/fruits", (req,res)=>{
    const fruit=req.body;
    console.log(fruit)
    fruits.push(fruit)
    res.status(201).send(fruit)
})





app.get('/',(req,res)=>{
    res.status(200).send("Hello Fruity!")
})

app.get('/fruits',(req,res)=>{
         res.send(fruits)
     })

app.get("/fruits/:name", (req, res) => {
        const name = req.params.name.toLowerCase();
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);
        if (fruit==undefined) {
            res.status(404).send("The fruit doesn't exist.");
        } else {
            res.send(fruit);
        }
    });
    

  
    
    

// app.get('/fruits/:name',(req,res)=>{
//             res.send(req.params)
//     })   

// app.get('/chickens',(req,res)=>{
//     res.send("Hello Chicken!")
// })

// //parameters
// app.get('/chickens/:name',(req,res)=>{
//     res.send(req.params)
// })
// //query
// app.get('/chickens/:name',(req,res)=>{
//     res.send(req.params)
// })

// app.get('/chicken',(req,res)=>{
//     res.send(req.query)
// })



module.exports=app;



