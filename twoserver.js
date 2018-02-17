var http = require('http');

var PORTONE = 7000;
var PORTTWO = 7500;

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

function handleRequestOne(response) {
  response.end("You're pretty cool.");
}

function handleRequestTwo(response) {
  response.end("You're not that cool.");
}

serverOne.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
