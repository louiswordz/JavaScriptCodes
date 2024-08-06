const arr1 = [1,2,3]
const arr2 = [3,4,5]
const combine = [...arr1, ...arr2]
console.log(combine)

function Sum(a,b,c){
    return a+b+c
}
let arr = [10, 11, 12]
console.log(Sum(...arr))

let obj1 = {y:0, x:'value'};
let obj2 = {v:1, p:'values'}

let obj3 = {...obj1, ...obj2}
console.log(obj3)