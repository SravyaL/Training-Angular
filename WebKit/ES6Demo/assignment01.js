function* sum(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
            yield arr[i];
        }
    }

    return sum;
    

}

arr1=[1,2,3,4,5,6,7,8,9,10];

function main(){
    x = sum(arr1);
    continuenow = true;
    while(continuenow){
        currStage = x.next();
        continuenow = !currStage.done;
        if(currStage){
            console.log(currStage.value);
        }
        else{
            console.log(currStage.value);
        }

    }
}

main();


