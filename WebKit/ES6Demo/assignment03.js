class rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }

    area(){
       
        return (this.length*this.breadth);
    }
}

class cuboid extends rectangle{
    constructor(length,breadth, height){
        super(length,breadth);
        this.height = height;
    }

    area(){
        return(super.area()*this.height);
    }
}


r1 = new rectangle(4,3);
console.log(r1.area());
c1 = new cuboid(4,3,5);
console.log(c1.area());