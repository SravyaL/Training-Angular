class ComplexNumber{
    
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    static add(c1, c2){
       c1.real += c2.real;
       c1.imaginary+=c2.imaginary; 
       return c1;
    }

    static multiply(c1,c2){
        let c3 = new ComplexNumber(0,0);
        //console.log(c1.real * c2.real);
        c3.real = ((c1.real * c2.real) + (c1.imaginary*c2.imaginary*(-1)));
        c3.imaginary = (c1.real *c2.imaginary)+(c2.real * c1.imaginary); 
       return c3;

    }

    printComplex(){
        var x;
        var y;
        if(this.imaginary>=0) 
            x = "+";
        else{
            x = "-";
            y = this.imaginary* -1;
        }
           
        
        console.log(this.real+x+y+"i");
    }
}

obj1 = new ComplexNumber(2,-1);
obj2 = new ComplexNumber(-2,-3);
//obj1.add(3,1);
o1 = ComplexNumber.multiply(obj1,obj2);
o1.printComplex();
obj1.printComplex();
o1 = ComplexNumber.add(obj1,obj2);
o1.printComplex();

