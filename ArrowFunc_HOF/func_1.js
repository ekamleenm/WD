// Normal Func
function add1(first, second){
	return first + second;
}

console.log(add1(3,6));

// Anonymous Func 
const add2 = function(first,second){
	return first + second;
}

// Arrow Func : For small functions, with single args, round brackets become optional 

//const square = num => num * num;

const add3 = (first,second) =>  {
	return first + second;
}
console.log(add3(8,9));


