
const {readFileSync , writeFileSync} = require("fs")
console.log("start ");

const fs = require ("fs")
//read from file 
const first = readFileSync("./content/first.txt","utf-8")
const second = readFileSync("./content/second.txt","utf-8")

//write into file 
writeFileSync(
    "./content/result.txt",
     `here is the result : ${first} ,${second} `
     ,(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log("done with this task");
        

     }
    )

console.log("starting with next task ");