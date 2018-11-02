var fs = require('fs');

fs.writeFile('test.txt','This is test file',(err)=>{
    if(err){
        console.log('Operation failed'+err);
    }
    else{
        console.log('File written');
    }
});