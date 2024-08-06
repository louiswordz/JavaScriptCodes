// for loop
for (let i =0; i<10; i++){
    console.log(i)
}

// While loop
let i = 0;
while(i < 10){
    console.log(i)
    i++;
}

//Do-while
let j = 0;
do{
    console.log(j)
    j++;
}while(j < 0);

// array loop
let arr = [1,2,3]
for (let i=0; i<arr.length; i++){
    console.log(i)
}


let gift = ['Car', "Book", "Chair", "House"]

for (k of gift){
    console.log(k)
}

// Loop an object;

let obj = {name:'John', age:30, address:"NTA"}
for (let key in obj){
    console.log(key, obj[key]);
}