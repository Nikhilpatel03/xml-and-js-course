console.log("Here")
// const http = require("http");


// const server = http.createServer(() => {});

// const PORT = 8088;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const http = require("http");

const product = require("./product.js");

 const server = http.createServer(
     async(req,res)=>
{
    if(req.url === `/api/products`){
        const {code,data} = await product.getAll();
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }else if(req.url.match(/\/api\/products\/\w+/)){
        const urlElements = req.url.split(`/`);
        const id = urlElements(urlElements.length-1);

        const {code,data} = await product.getByID(id);
        res.writeHead(code);
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(404);
        res.end(JSON.stringify({ message: `Route not found`}));
    }
    
}
);

const PORT = 8082;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));