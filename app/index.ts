
var args = process.argv;
console.dir(args);
if (args.length > 2){
    console.log("Passed command line arguments");
    args.splice(0,2);
    args.forEach(function(item){
        console.log(item);
    });
}

console.log("HELLO WORLD");