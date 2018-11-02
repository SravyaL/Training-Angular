var set1 = new Set();

set1.add("Ant");
set1.add("B");
set1.add("E");
set1.add("Lion");


console.log(`we have ${set1.size} element`);

for(let ele of set1){
    console.log(ele);
}

set1.delete("E");
console.log(`we have ${set1.size} element`);

for(let ele of set1){
    console.log(ele);
}