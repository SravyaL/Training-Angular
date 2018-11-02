greet = function(userName){
    console.log( "Hello "+ userName);
}

//setTimeout(greet,2000);
setInterval(()=>greet("Ram"),2000);
console.log("Prog terminated");