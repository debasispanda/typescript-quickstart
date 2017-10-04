export class Person{
	private name: string = 'debasis';
	constructor(){
		console.log(this.getName());
	}
	public getName(): string {
		return this.name;
	}
}

class Teacher extends Person{
	constructor(){ 
		super();
		console.log(this.getName());
	}
}

let t1: Teacher = new Teacher();