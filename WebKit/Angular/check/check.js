function show(name) {
    return "Hello " + name;
    //return '12.5';
}
var a;
var fname = "First";
var age = 25;
var basic = 1456.45;
var isAdmin = true;
var names = ['First', 'Second', 'Third'];
var aname = ['First', 'Second', 'Third'];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
;
var Rolex;
(function (Rolex) {
    Rolex[Rolex["Employee"] = 3] = "Employee";
    Rolex[Rolex["Manager"] = 4] = "Manager";
    Rolex[Rolex["Admin"] = 5] = "Admin";
})(Rolex || (Rolex = {}));
;
var userrole = Rolex.Employee;
console.log("Roles:" + Rolex[0]);
var x = "Hello";
x = 50;
x = [23, 45, 56];
function fun(name) {
}
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "First";
        this.age = 25;
        this.basic = 2945.45;
        this.dept = ["A", "B", "C"];
    }
    Employee.prototype.show_details = function () {
        console.log(this.name, "|", this.age, "|", this.basic);
        this.dept.forEach(function (dept) { return console.log(dept); });
    };
    return Employee;
}());
var Product = /** @class */ (function () {
    /*item_code:number;
    name: string;
    constructor(item_code:number, name:string){
        this.item_code = item_code;
        this.name = name;
    }
    constructor(public item_code:number, public name:string){

    }*/
    function Product(item_code, name) {
        this.item_code = item_code;
        this.name = name;
        console.log(this.item_code, this.name);
    }
    return Product;
}());
var emp; //reference of Employee
emp = new Employee();
emp.show_details();
var emp_pro = new Employee();
var pro = new Product(101, "Coke");
