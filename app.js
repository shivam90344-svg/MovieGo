const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    if(req.url=='/'){
             fs.readFile("app.html",(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end();
            return false;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();

    })
    }

      else if(req.url=='/trending'){
              fs.readFile("trending.html",(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end();
            return false;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();

    })
    }
          else if(req.url=='/about'){
              fs.readFile("about.html",(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end();
            return false;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();

    })
    }
          else if(req.url=='/movies'){
              fs.readFile("movies.html",(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end();
            return false;
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();

    })
    }
        else if(req.url=='/app.css'){
              fs.readFile("app.css",(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end();
            return false;
        }
        res.writeHead(200,{'Content-Type':'text/css'});
        res.write(data);
        res.end();

    })
    }
 
}).listen(3100)