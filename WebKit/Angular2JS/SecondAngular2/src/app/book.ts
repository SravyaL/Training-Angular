export class Book {
    bcode : string;
    titie : string;
    price : number;
    pubDate : Date;

    constructor(){
        this.bcode="";
        this.titie="";
        this.price=0;
        this.pubDate= new Date();
    }
}
