class NewOutput{
    constructor(){
        this.nums=[];
        this.sum = 0;
    }
}
class RandomNumberSeries{

    constructor(title, limit){
        this.title = title;
        this.limit = limit;
        this.count=0;
    }
generateRandomSeries(){
    this.count=0;
    let  finalOutput = new NewOutput();
    let p = new Promise(
        (resolve,reject) => {
            if(this.limit<=0){
                reject("Invalid limit");
            }
    this.intervalHandler = setInterval(()=>{
        let output = Math.trunc(Math.random()*100);
        //console.log(`${this.title} >> ${output}`);
        finalOutput.nums.push(output);
        finalOutput.sum+=output;

        this.count++;
        if(this.count === this.limit){
            clearInterval(this.intervalHandler);
            resolve(finalOutput);
        }
    },2000);
    }
);
    return p;
}
}
let series1 = new RandomNumberSeries("Series1",10);

let p1= series1.generateRandomSeries();
p1.then(
    (data) => {console.log(`Series >>${data.nums} and Sum  >> ${data.sum}`);},
    (errMsg) => { console.log(errMsg);}
)

/*let series2 = new RandomNumberSeries("Series2",-1);

let p2= series2.generateRandomSeries();
p2.then(
    (successMsg) => {console.log(successMsg);},
    (errMsg) => { console.log(errMsg);}
)*/