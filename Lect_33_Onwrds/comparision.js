console.log('Object Comparision');
// When we are comparing objects == and === are literally same, they both compare 
// references/adresses of the 2 objects 

let a = {
  name : 'ekam',
}

let b = {
  name : 'ekam',
}

let c = b ;

console.log(c === b);
console.log(c ==b);


console.log(a == b);
console.log(a === b);