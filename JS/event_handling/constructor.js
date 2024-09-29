class Animal{
	// constructor
	constructor(name){
		this.name = name;
	}

	speak(sound){
		console.log(`${this.name} makes ${sound}`);
	}
}

const animal = new Animal('Dog');

animal.speak('Bhow Bhow');
