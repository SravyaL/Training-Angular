function show( name: string): string{
    return "Hello " + name;
    //return '12.5';
}

let a:any;

let fname:string = "First";

let age:number = 25;
let basic:number = 1456.45;

let isAdmin:boolean = true;

let names:string[]=['First','Second','Third'];

let aname:Array<string>=['First','Second','Third'];

enum Role {
    Employee,
    Manager,
    Admin
};

enum Rolex {
    Employee=3,
    Manager,
    Admin
};

let userrole:Rolex = Rolex.Employee;

console.log("Roles:"+Rolex[0]);

let x: any="Hello";
x=50;
x=[23,45,56];

function fun(name: string) : void{

}

class Employee{
    name: string;
    age:number;
    basic:number;
    dept:string[];
    constructor(){
        this.name="First";
        this.age=25;
        this.basic = 2945.45;
        this.dept=["A","B","C"];
    }
    show_details():void{
        console.log(this.name,"|",this.age,"|",this.basic);
        this.dept.forEach((dept) => console.log(dept));
    }
}

class Product{
    /*item_code:number;
    name: string;
    constructor(item_code:number, name:string){
        this.item_code = item_code;
        this.name = name;
    }
    constructor(public item_code:number, public name:string){

    }*/
    constructor(private item_code:number, private name:string){
        console.log(this.item_code,this.name);
    }
}

let emp: Employee; //reference of Employee
emp = new Employee();
emp.show_details();
let emp_pro:Employee = new Employee();
let pro:Product = new Product(101,"Coke");