var events = require('events');
var intervalHandler;

var emitter = new events.EventEmitter();

generateRandomNumbers = function(){
    let n = Math.trunc(Math.random()*100);
    if(n%2==0)
        emitter.emit("evenNumberOccured");
else
emitter.emit("oddNumberOccured");
    
}

intervalHandler = setInterval(generateRandomNumbers,1000);

emitter.on("evenNumberOccured",()=>{
console.log('Saw even number');
});

emitter.on("oddNumberOccured",()=>{
    console.log('Saw odd number');
    });