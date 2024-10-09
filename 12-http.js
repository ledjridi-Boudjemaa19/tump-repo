
const http = require("http");

const server= http.createServer((req,res)=>{
    if(req.url="/"){
        res.end("welcome to home page");
    }
    if(req.url="/about"){
        res.end("there is a short history");
    }
    
    
    
    res.end(`
        <h1>Oops<h1/>
        <p>We cant seem to find the PAGE YOU ARE LOOKING FOR </p>
<a href="/"> back to home page </a>

        `);


})

server.listen(5000);
