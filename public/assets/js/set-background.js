var idx = Math.floor((new Date().getHours()));
var body = document.getElementsByTagName("body")[0];
body.className = "heaven-" + idx;

var message = document.getElementsByClassName("text")[0];
console.log(message)
message.prepend("Hey there: ");
console.log(message)
message.prepend("Hey there1: ");
message.prepend("Hey there2: ");
console.log("in the js export.get function")