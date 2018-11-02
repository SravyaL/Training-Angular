class Box{
    about(){
        return "I am box";
    }
}

class Bigbox extends Box{
    about(){
        return super.about()+ "plus big";
    }
}

b1 = new Box();
b2 = new Bigbox();
console.log(b1.about());
console.log(b2.about());