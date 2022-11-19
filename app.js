require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
// const mongoose = require('mongoose');
const { PythonShell } = require('python-shell');


const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
// mongoose.connect(process.env.MONGOLAB_URI, {useNewUrlParser: true});

// let repo ="";
let Age;
let Sex;
let cp;
let trestbps;
let chol;
let fbs;
let restecg;
let thalach;
let exang;
let oldpeak;
let slope;
let ca;
let thal;

let repo="";
let options = {};
app.post("/report",(req,res)=>{
  Age = req.body.Age;
  // repo.push(Age)
  repo =repo+ Age+ " ";
  Sex = req.body.Sex;
  // repo.push(Sex)
  repo =repo + Sex + " ";
  cp = req.body.cp;
  // repo.push(cp)
  repo =repo + cp + " ";
  trestbps = req.body.trestbps;
  // repo.push(trestbps)
  repo =repo + trestbps + " ";
  chol = req.body.chol;
  // repo.push(chol)
  repo =repo + chol + " ";
  fbs = req.body.fbs;
  // repo.push(fbs)
  repo =repo + fbs + " ";
  restecg = req.body.restecg;
  // repo.push(restecg)
  repo =repo + restecg + " ";
  thalach = req.body.thalach;
  // repo.push(thalach)
  repo =repo + thalach + " ";
  exang = req.body.exang;
  // repo.push(exang)
  repo =repo + exang + " ";
  oldpeak = req.body.oldpeak;
  // repo.push(oldpeak)
  repo =repo + oldpeak + " ";
  slope = req.body.slope;
  // repo.push(slope)
  repo =repo + slope + " ";
  ca = req.body.ca;
  // repo.push(ca)
  repo =repo + ca + " ";
  thal = req.body.thal;
  // repo.push(thal)
  repo =repo + thal + " ";
  // let target = req.body.target;
  // repo.push(target)
  options ={
    scriptPath: "./",
    args:[Age ,Sex ,cp ,trestbps ,chol ,fbs ,restecg, thalach, exang ,oldpeak ,slope ,ca ,thal ]
  };
  
  // console.log(repo)
  res.redirect("/result")
})
// console.log(Sex)
// console.log(cp)
// console.log(trestbps)
// console.log(chol)
// console.log(fbs)
// console.log(restecg)
// console.log(thalach)
// console.log(exang)
// console.log(oldpeak)
// console.log(slope)
// console.log(ca)
// console.log(thal)



app.get("/",(req,res)=>{ 
  res.render("index")
})

app.get("/report",(req,res)=>{
     res.render("report")
   
})

app.get("/result",(req,res)=>{
 
  PythonShell.run("data.py", options, (err, rest) => {
    if(res){
     res.send(rest)
    }
    });
})


app.listen(3000, function() {
  console.log(`Server started on port 3000`);
});



//PORT=5000
//MONGOLAB_URI=mongodb://localhost/
