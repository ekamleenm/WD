console.log("Events");

let clickHandler = () => {
	console.log("Button Clicked");
}

let button = document.getElementById('myButton');

let secondClick = () => console.log("second one");
button.onclick = secondClick;
button.onclick = clickHandler;
//button.onclick = secondClick;
// Value got overridden so the second assigned works 



