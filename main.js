let http = require("http");
let fs = require("fs");
let url = require("url");
let qs = require("querystring");

let mainpage = require('./lib/mainpage');

var app = http.createServer((request, response)=>{
    let url = request.url;
    let queryData = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;

    if(pathname === "/mainpage") {
        mainpage.home(request, response);
    }
    else {
        response.writeHead(404);
        response.end('Not found');
    }

});

app.listen(3000);