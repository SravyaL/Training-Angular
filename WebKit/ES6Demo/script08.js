class fruit{
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    estimateFor(quantity){
        return quantity*this.price;
    }
    discountedEstimateFor(quantity,discPercent){
        let estimate = this.estimateFor(quantity);
        return estimate*discPercent/100;
    }
}

f1 = new fruit('mango', 123);
console.log(f1);
console.log(f1.estimateFor(100));
console.log(f1.discountedEstimateFor(100,25));