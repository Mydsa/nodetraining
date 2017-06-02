var path = require("path")

var hello = "Hello World from node js";

var substring = hello.slice(17);

console.log(hello);
console.log(substring);
console.log(`Rock on the world with ${substring}`);
console.log(__dirname);
console.log(__filename);
console.log(`Rock on the world with ${path.basename(__filename)}`);