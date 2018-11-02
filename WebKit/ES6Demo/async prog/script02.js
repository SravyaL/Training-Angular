var InternalHandler;
var count=0;
var limit=0;

nextNumber = function(){
    console.log(Math.trunc(Math.random()*100));
    count++;
    if(count==limit){
        clearInterval(InternalHandler);
    }
}

console.log(nextNumber());

generateRandomSeries = function(limit){
    limit = bound;
    count =0;
    InternalHandler = setInterval(nextNumber, 2000);

}