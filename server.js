const { error } = require('console');
const http = require('http'); //loo vahemälus link nimega http
const url = require('url');
const fs = require('fs'); //faili süsteem
const port = 4000; //pordi loomine, 3000 ei tööta, hence 4000

const server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;
    console.log(requestUrl);
    if(requestUrl === '/') {
        fs.readFile('index.html', (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write('Error. File not Found')
            }
            else {
                response.write(fileContent);
            }

            response.end();
        })


        //response.write(`Hello from port ${requestUrl}.`);
    } else if(requestUrl === '/about'){
        fs.readFile('about.html', (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write('Error. Page not Found')
            }
            else {
                response.writeHead(200); //kõik on korras
                response.write(fileContent);
            }

            response.end();
        })


        //response.write(`Hello from port ${requestUrl}.`);
    }else if (requestUrl === '/contact'){
        fs.readFile('contact.html', (error, fileContent) => {
            if(error){
                response.writeHead(404);
                response.write(`${requestUrl} Page not Found.`);
            }
            else {
                response.write(fileContent);
            }

            response.end();
        })


        //response.write(`Hello from port ${requestUrl}.`);
    } else{
        response.writeHead(404); //path not found`)
        response.end();
    }
    
    //response.end();
});

server.listen(port, error => {
    if (error){
        console.log(error);
    } else {
        console.log(`Server is listening on port ${port}.`);
    }
});