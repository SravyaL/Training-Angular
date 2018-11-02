class RandomNumberSeries{

    constructor(title, limit){
        this.title = title;
        this.limit = limit;
        this.count=0;
    }
generateRandomSeries(){
    this.count=0;
    this.intervalHandler = setInterval(()=>{
        let output = Math.trunc(Math.random()*100);
        console.log(`${this.title} >> ${output}`);

        this.count++;
        if(this.count === this.limit){
            clearInterval(this.intervalHandler);
        }
    },2000);
}
}

let series1 = new RandomNumberSeries("Series1",10);

series1.generateRandomSeries();