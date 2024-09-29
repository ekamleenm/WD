// to maintain state

function makeCounter(){
	let count = 0;

	return () => {
		count += 1;
		return count;
	};
}


const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
