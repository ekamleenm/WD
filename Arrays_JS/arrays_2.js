
// Different methods of Array 

let arr = [1,2,3,4,5,6,7,8,9];
console.log(Array.isArray(arr));  

console.log(arr);
arr.push(56);
console.log(arr);

// arr.sort() sort the original array dont make a copy.  This sorts like alphabetically 
// 1 23 45 9 is the way its sorted 23 is alphabetially less than 9.
arr.sort();

//  for-each loop 

let foods = ['bread','jam','milk','butter'];

foods.forEach(function(food){
  console.log(food);
});

// Return doesn't work in forEach loop be careful 

// Array advance functions 
// .map .filter 

let arr2  = [3,6,7,9,0,5];

let newArr = arr2.map(function(item) {
  console.log(item);
  return item*item;
});

console.log(newArr);