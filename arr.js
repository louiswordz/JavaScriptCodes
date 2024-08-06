//Destructuring
/* It is the javascript expression that makes it possible to unpack values from 
arrays, or properties from objects, into distinct variables

We use '...rest' to pack values in an object and when we print 'rest' then it returns 
all values together
*/
// define
const arr = [1,2,3,4,5]

const [x,y] = arr;
console.log(x)
console.log(y)

let [a, b, ...rest] = [1,2,3,4,5,6,7,9]
console.log(a,b,rest)


