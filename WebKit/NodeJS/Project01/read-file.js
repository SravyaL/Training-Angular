var fs= require('fs');

fs.readFile('test.txt',(err,data)=>{
    if(err){
        console.log('Operation failed'+err);
    }
    else{
        console.log(data.toString());
    }
});