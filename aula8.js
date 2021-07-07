var http = require("http");

http.createServer(function(require,answer){
    answer.end("<h1>Youre Welcome</h1>");
}).listen(8181);
console.log("my server are running");
