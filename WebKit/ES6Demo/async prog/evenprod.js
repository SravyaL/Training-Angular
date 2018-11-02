class NewOutput{
    constructor(){
        this.nums=[];
        this.prod = 1;
    }
}
class EvenNumberSeries{

    constructor(title, l_limit,u_limit){
        this.title = title;
        this.l_limit = l_limit;
        this.u_limit = u_limit;
        //this.count=0;
    }
generateEvenSeries(){
    this.count=0;
    let  finalOutput = new NewOutput();
    let p = new Promise(
        (resolve,reject) => {
            if(this.l_limit<=0 || this.l_limit>this.u_limit){
                reject(`${this.title} has an invalid limit`);
            }
    this.intervalHandler = setInterval(()=>{
        if(this.l_limit %2 == 0){

            finalOutput.nums.push(this.l_limit);
            finalOutput.prod*=this.l_limit;
            this.l_limit+=2;

        }
        else{
            this.l_limit++;
        }
        //console.log(`${this.title} >> ${output}`);
        
        //this.count++;
        if(this.l_limit === this.u_limit){
            if(this.l_limit %2 == 0){

                finalOutput.nums.push(this.l_limit);
                finalOutput.prod*=this.l_limit;
                
    
            }
            
            clearInterval(this.intervalHandler);
            resolve(finalOutput);
        }
    },200);
    }
);
    return p;
}
}
let series1 = new EvenNumberSeries("Series1",10,20);

let p1= series1.generateEvenSeries();
p1.then(
    (data) => {console.log(`Series >>${data.nums} and Sum  >> ${data.prod}`);},
    (errMsg) => { console.log(errMsg);}
)

let series2 = new EvenNumberSeries("Series2",20,10);

let p2= series2.generateEvenSeries();
p2.then(
    (data) => {console.log(`Series >>${data.nums} and Sum  >> ${data.prod}`);},
    (errMsg) => { console.log(errMsg);}
)
let series3 = new EvenNumberSeries("Series3",-2,10);
let p3= series3.generateEvenSeries();
p3.then(
    (data) => {console.log(`Series >>${data.nums} and Sum  >> ${data.prod}`);},
    (errMsg) => { console.log(errMsg);}
)
