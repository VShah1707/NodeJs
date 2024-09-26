const person = {
    name: 'Varshil',
    age: 23,
    number: 123456,
    greet(){
        console.log('Hi there!!', this.name)
    }
}

console.log(person);
person.greet()
