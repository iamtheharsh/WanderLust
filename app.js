const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");


const MONGO_URL =  "mongodb://127.0.0.1:27017/wanderlust";  

main()
.then(()=>{
  console.log("connected to DB");
})
.catch((err)=>{
  console.log(err);
});


async function main(){
  await  mongoose.connect(MONGO_URL)
}

app.get("/",function(req,res){
    res.send("Hi I am root");
});

app.get("/testlisting", async function(req, res) {
  let sampleListing  = new Listing({
    title: "My new Villa",
    description: "By the beach",
    price: 1200,
    location: "Sanvid Nagar, Indore",
    country: "India",
  });
  
  await sampleListing.save();
  console.log("sample");
  res.send("successful testing");
});


app.listen(8080,()=>{
  console.log("RUnning");
})