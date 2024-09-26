class Animal{
	constructor(name){
		this.name = name;
	}
}

class Dog extends Animal{
	constructor(name, breed){
		super(name);
		this.breed = breed;
	}

	speak(){
		console.log(`${this.name}, the ${this.breed}, is what i got.`);
	}

}

const myDog = new Dog('Buddy', 'pug');

myDog.speak();
