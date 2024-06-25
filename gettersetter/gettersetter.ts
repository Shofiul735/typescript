class Person{
    private firstName:string = '';
    private lastName:string = '';

    public get name(){
        return `${this.firstName} ${this.lastName}`;
    }

    public set fName(name:string){
        this.firstName = name;
    }
    public set lName(name:string){
        this.lastName = name;
    }
}

const person = new Person();
person.fName = 'Mr. James'
person.lName = 'Hudson';
console.log(person.name);